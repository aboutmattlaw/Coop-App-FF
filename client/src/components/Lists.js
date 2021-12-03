import {useState, useEffect} from 'react';
import {
    Form,
    Button,
    ListGroup,
    Container,
    Row,
    Col,
    Table
} from "react-bootstrap"
import ListDetails from './ListDetails'

function Lists({
    currentUser,
    currentUserLists,
    activeList,
    setCurrentUserLists,
    getListDetails,
    setListDetails,
    listDetails
}) { // State / listFormData for form / allItems for items to add to lists

    const [listFormData, setListFormData] = useState({list_name: ''})
    const [allItems, setAllItems] = useState([])
    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState("")
    // const [listDetails, setListDetails] = useState([])

    const filtered = allItems.filter((item) => item.item_name.toLowerCase().includes(search.toLowerCase()))
    console.log(filtered)
    // form

    function handleListChange(event) {
        setListFormData({
            ...listFormData,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        setListFormData({list_name: ''})
        const obj = {
            "list_name": event.target[0].value,
            "user_id": currentUser.id
        }

        fetch('/lists', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(data => {
            setCurrentUserLists(value => value = [
                ...currentUserLists,
                data
            ])
            console.log()
        })
    }


    // Gets and displays items that can be added to lists

    useEffect(() => {
        fetch('/items').then(response => response.json()).then(response => setAllItems(response));
    }, [])


    const lists = currentUserLists.map(list => {
        return <>
            <tr>
                <td onClick={
                    () => getListDetails(list)
                }>
                    <h4>{
                    list.list_name
                }</h4></td>
            </tr>

        </>


    })


    return (
        <>


            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicListName">
                            <Form.Label>
                                <h3>Create a new list name</h3>
                            </Form.Label>
                            <Form.Control onChange={handleListChange}
                                name="list_name"
                                value={
                                    listFormData.list_name
                                }
                                placeholder="Enter List Name"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button className="mt-5" variant="primary" type="submit">Add New List</Button>
                    </Col>
                </Row>
            </Form>

<Container>
            <Table striped bordered hover>
                <tbody>{lists}</tbody>
            </Table>
            </Container>


            <div>
                <ListDetails filtered={filtered}
                    search={search}
                    setSearch={setSearch}
                    setListDetails={setListDetails}
                    currentUser={currentUser}
                    allItems={allItems}
                    activeList={activeList}
                    setAllItems={setAllItems}
                    listDetails={listDetails}
                    notes={notes}
                    setNotes={setNotes}></ListDetails>
            </div>
        </>
    )
}

export default Lists
