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
    setAllItems,
    noteFormData,
    setNoteFormData
}) {


    function addItemButton(id, list_id) {
        console.log(id)
        const obj = {
            "list_id": 23,
            "item_id": id
        }
        fetch('/list_items', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(resp => {
            fetch(`/lists/23`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }


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


    function increaseQuantity(id, list_id, quantity) {
        const obj = {
            "list_id": 23,
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
            fetch(`/lists/23`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }


    function acquiredItem(id, list_id, acquired) {
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
            fetch(`/lists/23`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }


    console.log("listdetails:", listDetails)
    console.log("notes:", listDetails.notes)


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
                    detail.item.item_name
                }
                    <Button variant="outline-primary" className="m-1"
                        onClick={
                            () => acquiredItem(detail.id, detail.list_id)
                    }>
                        {
                        detail.acquired.toString()
                    }</Button>
                    <NoteForm currentUser={currentUser}></NoteForm>

                </ListGroup.Item>
            </>
        )

    })


    return (
        <>

            <ListHeader listDetails={listDetails}></ListHeader>

            <ListGroup>
                <ListGroup.Item>{det}</ListGroup.Item>
                <ListGroup.Item>{all_items}</ListGroup.Item>
            </ListGroup>


        </>
    )
}

export default ListDetails
