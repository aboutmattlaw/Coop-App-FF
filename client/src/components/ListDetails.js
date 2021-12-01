import ListHeader from "./ListHeader"
import {ListGroup, Button, Form, Badge} from 'react-bootstrap'
import {useState, useEffect} from 'react';
import NoteForm from "./NoteForm";


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
    setNoteFormData
}) {


    
// Display All Items so they can be put on list 

    console.log("all items:", allItems)

    const all_items = allItems.map(item => {
        return <>
            <ListGroup.Item>
                <Button onClick={
                    () => addItemButton(item.id, item.list_id)
                }>Add</Button>
                {
                item.item_name
            }</ListGroup.Item>

        </>
    })


// Allow for item to be made into a ListItem, aka a thing on a specific list
// list_id is hardcoded 

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
            fetch(`/lists/${activeList.id}`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }



// delete a listitem, thus removing it from a list ... here dynamic list_id works. 

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
// list_id is hardcoded 


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
            fetch(`/lists/${activeList.id}`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }


// changes default FALSE to TRUE to indicate an item has been acquired/added to physical basket
// list_id is hardcoded 

    function acquiredItem(id, acquired) {
        console.log("acq", acquired)
        const obj = {
            "item_id": id,
            "acquired": !acquired
        }
        fetch(`list_items/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(resp => {
            fetch(`/lists/${activeList.id}`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }


    console.log("listdetails:", listDetails)
    console.log("notes:", notes)


    const displayNotes = (notes) => {
        return notes.map(note => {
            return (
                <ListGroup.Item>
                    {note.note_text}
                </ListGroup.Item>
            )
        })
    } 




// maps listDetails to get the list_items that make up the meat of a list. 
// returns a delete button, a quant increaser, its name, the acquired true/false and a comment form

    const det = listDetails.map(detail => {
        return (
            <>
                <ListGroup.Item>
                    <Button variant="outline-secondary" className="m-1"
                        onClick={
                            () => deleteListItem(detail.id, detail.list_id)
                    }>x</Button>
                    <Button variant="secondary"
                        onClick={
                            () => increaseQuantity(detail.id, detail.list_id, detail.quantity)
                    }>
                        {
                        detail.quantity
                    }</Button>
                    {
                    detail.item.item_name} 
                    <Button variant="outline-primary" className="m-1"
                        onClick={
                            () => acquiredItem(detail.id, detail.acquired)
                    }>
                        {
                        detail.acquired.toString()
                    }</Button>

                <>
                    <ListGroup>
                        {displayNotes(detail.notes)}
                    </ ListGroup>
                </>
                    {/* {detail.notes.map(note => {
                       return  <li>{note.note_text}</li>
                    })}
             */}
                    <NoteForm currentUser={currentUser} notes={notes} setNotes={setNotes} detail={detail}></NoteForm>

                </ListGroup.Item>
            </>
        )

    })






// shows both the list_items (det) and the items (all_items)

    return (
        <>

            <ListHeader listDetails={listDetails} activeList={activeList}></ListHeader>

            <ListGroup>
                <ListGroup.Item>{det}</ListGroup.Item>
                <ListGroup.Item>{all_items}</ListGroup.Item>
            </ListGroup>


        </>
    )
}

export default ListDetails
