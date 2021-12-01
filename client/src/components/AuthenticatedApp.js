import Lists from "./Lists"
import {Button, Container} from 'react-bootstrap'
import ListDetails from "./ListDetails"

function AuthenticatedApp({
    setCurrentUser,
    currentUser,
    currentUserLists,
    setCurrentUserLists,
    setListDetails,
    getListDetails,
    listDetails,
    activeList
}) {


    function handleDelete(e) {
        fetch('/logout', {method: 'DELETE'}).then(resp => {
            setCurrentUser(null)
        })
    }

    return (
        <>
            <Container>
                <Lists activeList={activeList} setListDetails={setListDetails}
                    listDetails={listDetails}
                    getListDetails={getListDetails}
                    currentUser={currentUser}
                    currentUserLists={currentUserLists}
                    setCurrentUserLists={setCurrentUserLists}></Lists>

                <div>
                    <Button onClick={handleDelete}>Logout</Button>
                </div>
            </Container>
        </>
    )
}

export default AuthenticatedApp
