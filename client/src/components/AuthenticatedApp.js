import {Button} from 'react-bootstrap'

function AuthenticatedApp({setCurrentUser, currentUser}) {


    function handleDelete(e) {
        fetch('/logout', {method: 'DELETE'})
        .then(resp => {
            setCurrentUser(null)
        })
    }

    return (
        <div>
            You're logged in! 
<Button onClick={handleDelete}>Logout</Button>
        </div>
    )
}

export default AuthenticatedApp