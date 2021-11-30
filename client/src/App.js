import AuthenticatedApp from "./components/AuthenticatedApp"
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Navbar, Container, ListGroup} from 'react-bootstrap'
import ListDetails from "./components/ListDetails";

function App() { 
  
  // State

    const [currentUser, setCurrentUser] = useState(null)
    const [currentUserLists, setCurrentUserLists] = useState([])
    const [listDetails, setListDetails] = useState([])


    // Fetch current user details

    useEffect(() => {
        fetch('/me').then(resp => {
            if (resp.ok) {
                resp.json().then(user => setCurrentUser(user))
            } else {
                console.log('logged in', "no")
            }
        })
    }, [])


    // Sets current user

    useEffect(() => {
        if (currentUser) {
            setCurrentUserLists(currentUser.lists)
            // console.log("current user list", currentUserLists)
        }
    }, [currentUser])


// list details 


function getListDetails(id) {
  console.log(id)
  fetch(`/lists/${id}`)
  .then(resp => resp.json())
  .then(resp => setListDetails(resp),
  console.log("hello", listDetails)
  )
}



    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Food Coop List
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Router> {
                currentUser ? <AuthenticatedApp getListDetails={getListDetails} setListDetails={setListDetails} listDetails={listDetails} currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    currentUserLists={currentUserLists}
                    setCurrentUserLists={setCurrentUserLists}/> : <UnauthenticatedApp currentUser={currentUser}
                    setCurrentUser={setCurrentUser}/>
            } </Router>


            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        Food Coop List
                    </Navbar.Brand>
                </Container>
            </Navbar>


        </>
    );
}


export default App;
