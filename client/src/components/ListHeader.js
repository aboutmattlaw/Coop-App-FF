import {Container, Navbar} from 'react-bootstrap'


function ListHeader() {
    return(
<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">List Name</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
    )
}

export default ListHeader