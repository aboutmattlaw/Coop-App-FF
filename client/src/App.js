import AuthenticatedApp from './components/AuthenticatedApp'
import UnauthenticatedApp from './components/UnauthenticatedApp'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [currentUserLists, setCurrentUserLists] = useState([])
  const [listDetails, setListDetails] = useState([])
  const [activeList, setActiveList] = useState({})

  function handleDelete(e) {
    fetch('/logout', { method: 'DELETE' }).then((resp) => {
      setCurrentUser(null)
      setListDetails([])
    })
  }


  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setCurrentUser(user))
      } else {
        console.log('logged in', 'no')
      }
    })
  }, [])


  useEffect(() => {
    if (currentUser) {
      setCurrentUserLists(currentUser.lists)
      setActiveList(currentUser.lists[0])
    }
  }, [currentUser])


  function getListDetails(list) {
    console.log(list.id)
    setActiveList(list)
    fetch(`/lists/${list.id}`)
      .then((resp) => resp.json())
      .then(
        (resp) => setListDetails(resp),
        console.log('listdetails', listDetails),
      )
  }
  console.log('activelist:', activeList)

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1>
              <Link
                to="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Food Coop List
              </Link>
            </h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {currentUser ? (
        <AuthenticatedApp
          getListDetails={getListDetails}
          setListDetails={setListDetails}
          listDetails={listDetails}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          currentUserLists={currentUserLists}
          setCurrentUserLists={setCurrentUserLists}
          activeList={activeList}
        />
      ) : (
        <UnauthenticatedApp
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}

      {currentUser ? (
        <Navbar bg="dark" variant="dark" fixed="bottom">
          <Container>
            <Navbar.Brand>Items on list: {listDetails.length}</Navbar.Brand>
            <div className="text-right">
              <Button onClick={handleDelete}>Logout</Button>
            </div>
          </Container>
        </Navbar>
      ) : null}
    </>
  )
}

export default App
