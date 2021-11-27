import {useState, useEffect} from 'react';
import {Form, Button, ListGroup} from "react-bootstrap"
import {Routes, Route} from 'react-router-dom'
import ListDetails from './ListDetails'

function Lists({currentUser, currentUserLists, setCurrentUserLists, getListDetails}) { // State

    const [listFormData, setListFormData] = useState({list_name: ''})
    const [listDetails, setListDetails] = useState()


    // adds and shows new list

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




    const lists = currentUserLists.map(list => {
        return <>
            <ListGroup.Item onClick={() => getListDetails(list.id)}>
                {
                list.list_name
            }</ListGroup.Item>
        </>
    })

  




    return (
        <>
      


        <ListGroup>
        {lists}
        </ListGroup>

            <p></p>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicListName">
                    <Form.Label>Eneter a new list name</Form.Label>
                    <Form.Control onChange={handleListChange}
                        name="list_name"
                        value={
                            listFormData.list_name
                        }
                        placeholder="Enter List Name"/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            <div><ListDetails listDetails={listDetails}></ListDetails></div>
        </>
    )
}

export default Lists
