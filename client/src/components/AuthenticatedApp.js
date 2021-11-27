import Lists from "./Lists"
import {Button} from 'react-bootstrap'
import ListDetails from "./ListDetails"

function AuthenticatedApp({setCurrentUser, currentUser, currentUserLists, setCurrentUserLists, getListDetails}) {


    function handleDelete(e) {
        fetch('/logout', {method: 'DELETE'})
        .then(resp => {
            setCurrentUser(null)
        })
    }

    return (
        <>
            <Lists getListDetails={getListDetails} currentUser={currentUser} currentUserLists={currentUserLists} setCurrentUserLists={setCurrentUserLists}></Lists>
    
            <div><Button onClick={handleDelete}>Logout</Button></div>
        </>
    )
}

export default AuthenticatedApp