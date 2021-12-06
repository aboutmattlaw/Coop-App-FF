import Lists from "./Lists"
import {Button, Container} from 'react-bootstrap'

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




    return (
        <>
            <Container>
                <Lists activeList={activeList} setListDetails={setListDetails}
                    listDetails={listDetails}
                    getListDetails={getListDetails}
                    currentUser={currentUser}
                    currentUserLists={currentUserLists}
                    setCurrentUserLists={setCurrentUserLists}></Lists>

            </Container>
        </>
    )
}

export default AuthenticatedApp
