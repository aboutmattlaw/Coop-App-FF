import ListHeader from "./ListHeader"
import {
    ListGroup,
    Button,
    Table,
    Badge,
    Container
} from 'react-bootstrap'
import NoteForm from "./NoteForm";
import Filter from "./Filter";




function ListDetails({
    notes,
    setNotes,
    currentUser,
    setCurrentUser,
    setListDetails,
    listDetails,
    allItems,
    activeList,
    setAllItems,
    noteFormData,
    setNoteFormData,
    search,
    setSearch,
    filtered
}) { // Display All Items so they can be put on list

    console.log("all items:", allItems)
    


    const all_items = filtered.map(item => {
        return <> 

            <tr>
                <td>
                    <Button onClick={
                        () => addItemButton(item.id, item.list_id)
                    }>Add</Button>
                </td>
                <td>{
                    item.item_name
                }</td>
                <td>{
                    item.price
                }</td>
                <td>{
                    item.organic
                }</td>
                <td>{
                    item.origin
                }</td>
            </tr>


        </>
    })


    // Allow for item to be made into a ListItem, aka a thing on a specific list

    function addItemButton(id, list_id) {
        console.log(id)
        const obj = {
            "list_id": activeList.id,
            "item_id": id
        }
        fetch('/list_items', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(resp => {
            fetch(`/lists/${
                activeList.id
            }`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }


    // delete a listitem, thus removing it from a list 

    function deleteListItem(id, list_id) {

        fetch(`list_items/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => {
            fetch(`lists/${list_id}`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }


    // Allow for list_item_quantity to be increased from the default of 1



    function increaseQuantity(id, list_id, quantity) {
        const obj = {
            "list_id": activeList.id,
            "item_id": id,
            "quantity": quantity + 1
        }
        fetch(`list_items/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(resp => {
            fetch(`/lists/${
                activeList.id
            }`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }

    
    // Indicates that an item has been grabbed from shelf and put in cart

    function acquiredItem(id, acquired) {
        const obj = {
            "item_id": id,
            "acquired": ! acquired
        }
        fetch(`list_items/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(resp => {
            fetch(`/lists/${
                activeList.id
            }`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }


 // shows notes

    const displayNotes = (notes) => {
        return notes.map(note => {
            return (
                <ListGroup.Item> {
                    note.note_text
                } </ListGroup.Item>
            )
        })
    }


    // returns a delete button, a quant increaser, its name, the acquired true/false, item details and a comment form

    const det = listDetails.map(detail => {
        return (
            <>
                <ListGroup.Item>

                    <h4>
                        <Button className="m-3" variant="primary"
                            onClick={
                                () => increaseQuantity(detail.id, detail.list_id, detail.quantity)
                        }>
                            {
                            detail.quantity
                        }</Button>

                        
                        {
                        detail.acquired ?  <strike>{detail.item.item_name}</strike>: detail.item.item_name
                    }</h4>





                    <Button variant="outline-primary" className="m-1"
                        onClick={
                            () => acquiredItem(detail.id, detail.acquired)
                    }>
                        {
                        detail.acquired ? 'in cart' : 'still need it'
                    } </Button>



                    <Button variant="outline-secondary" className="m-1"
                        onClick={
                            () => deleteListItem(detail.id, detail.list_id)
                    }>remove from list</Button>
                    <>



                    <h5><div className="mt-3"><Badge pill bg="secondary">
    {detail.item.price}
  </Badge>{' '}
  <Badge pill bg="secondary">
    {detail.item.organic}
  </Badge>{' '}
  <Badge pill bg="secondary">
    {detail.item.origin}
  </Badge>{' '}</div></h5>


                        <ListGroup className="mt-3">
                            {
                            displayNotes(detail.notes)
                        } </ListGroup>
                    </>
              
                    <NoteForm currentUser={currentUser}
                        notes={notes}
                        setNotes={setNotes}
                        detail={detail}
                        activeList={activeList}
                        setListDetails={setListDetails}></NoteForm>

                </ListGroup.Item>
            </>
        )

    })

    console.log("item count:", listDetails.length)

    // shows the ListHeder list_items (det) and the items (all_items)

    return (
        <>



            
            {activeList ? <ListHeader listDetails={listDetails}
                activeList={activeList}></ListHeader> : null}
              

            <ListGroup>
                {activeList ? <ListGroup.Item>{det}</ListGroup.Item> : null}   
                
                {activeList ? <Filter setSearch={setSearch} search={search}/> : null}
            </ListGroup>

        

            <Container>
                <Table className="mb-5" striped bordered hover responsive>
             
                    <tbody>{
                        activeList ? all_items : null
                    }</tbody>
                </Table>
            </Container>

        </>
    )
}

export default ListDetails
