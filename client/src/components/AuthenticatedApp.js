import Lists from "./Lists"
import {Button} from 'react-bootstrap'

function AuthenticatedApp({setCurrentUser, currentUser, currentUserLists, setCurrentUserLists}) {


    function handleDelete(e) {
        fetch('/logout', {method: 'DELETE'})
        .then(resp => {
            setCurrentUser(null)
        })
    }

    return (
        <>
            <Lists currentUser={currentUser} currentUserLists={currentUserLists} setCurrentUserLists={setCurrentUserLists}></Lists>
            <Button onClick={handleDelete}>Logout</Button>
        </>
    )
}

export default AuthenticatedApp