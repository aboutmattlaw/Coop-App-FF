import {useState, useEffect} from 'react';
import {Form, Button, ListGroup} from "react-bootstrap"
import {Routes, Route} from 'react-router-dom'
import ListDetails from './ListDetails'

function Lists({currentUser, currentUserLists, setCurrentUserLists, getListDetails, setListDetails, listDetails}) { // State

    const [listFormData, setListFormData] = useState({list_name: ''})
  

    const [allItems, setAllItems] = useState([])
    // const [listDetails, setListDetails] = useState([])


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







  useEffect(() => {
    fetch('/items')
    .then(response => response.json())
    .then(response => setAllItems(response));
}, [])



    const lists = currentUserLists.map(list => {
        return <>
            <ListGroup.Item onClick={() => getListDetails(list.id)}>
                {
                list.list_name
            }</ListGroup.Item>
        </>
    })
  


    // const items = listDetails.list_items.map(list => {
    //     return  <>
    //           <li>{list.item_name}</li>
    //             </>
    // })


    return (
        <>
    

    
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



        <ListGroup>
        {lists}
        </ListGroup>
     

            <div><ListDetails setListDetails={setListDetails} currentUser={currentUser} allItems={allItems} setAllItems={setAllItems} listDetails={listDetails}></ListDetails></div>
        </>
    )
}

export default Lists
