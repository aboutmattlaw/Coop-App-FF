import AuthenticatedApp from "./components/AuthenticatedApp"
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import {Navbar, Container} from 'react-bootstrap'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentUserLists, setCurrentUserLists] = useState([])




  useEffect(() => {
    fetch('/me')
    .then(resp => {
      if(resp.ok) {
        resp.json().then(user => setCurrentUser(user))
      } else {
        console.log('logged in', "no")
      }
    })
  }, [])


  useEffect(() => {
    if(currentUser) {
      setCurrentUserLists(currentUser.lists)
      console.log("current user list" , currentUserLists)
    }
  }, [currentUser])  




  return (
<>
<Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        {/* <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} */}
Food Coop List      </Navbar.Brand>
    </Container>
  </Navbar>
    
      <Router>
        {currentUser ? <AuthenticatedApp currentUser={currentUser} setCurrentUser={setCurrentUser} currentUserLists={currentUserLists} setCurrentUserLists={setCurrentUserLists}/> : <UnauthenticatedApp currentUser={currentUser} setCurrentUser={setCurrentUser} />}
      </Router>


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