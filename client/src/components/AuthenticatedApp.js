import Lists from "./Lists"
import {Button} from 'react-bootstrap'
import ListDetails from "./ListDetails"

function AuthenticatedApp({setCurrentUser, currentUser, currentUserLists, setCurrentUserLists, setListDetails, getListDetails, listDetails}) {


    function handleDelete(e) {
        fetch('/logout', {method: 'DELETE'})
        .then(resp => {
            setCurrentUser(null)
        })
    }

    return (
        <>
            <Lists setListDetails={setListDetails} listDetails={listDetails} getListDetails={getListDetails} currentUser={currentUser} currentUserLists={currentUserLists} setCurrentUserLists={setCurrentUserLists}></Lists>
    
            <div><Button onClick={handleDelete}>Logout</Button></div>
        </>
    )
}

export default AuthenticatedApp