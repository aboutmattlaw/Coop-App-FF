import {Container, Navbar} from 'react-bootstrap'




// {listDetails.list.list_name} in theory could dynamically populate List Name.

function ListHeader({listDetails, activeList}) {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">{activeList?.list_name}</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

export default ListHeader
