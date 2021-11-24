import {useState, useEffect} from 'react';
import {Form, Button} from "react-bootstrap"

function Lists({currentUser, currentUserLists, setCurrentUserLists}){
    const [listFormData, setListFormData] = useState({list_name: ''})





    function handleSubmit(event) {
        event.preventDefault()
        setListFormData({list_name: ''})
        const obj = {
            "list_name": event.target[0].value,
            "user_id": currentUser.id 
        }
       
        fetch('/lists', {
            method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
            setCurrentUserLists(value => value = [...currentUserLists, data])
        })
    }

    
    function handleListChange(event) {
        setListFormData({
            ...listFormData,
            [event.target.name]: event.target.value
        })
    }


    const lists = currentUserLists.map(list => {
        return  <>
              <li>{list.list_name}</li>
                </>
    })
    
   
    return(
  <>
        <ul>
        {lists}
        </ul>

        <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicListName">
                        <Form.Label>List Name</Form.Label>
                        <Form.Control onChange={handleListChange} name="list_name" value={listFormData.list_name} placeholder="Enter List Name" />
                    </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                </Form>



    </>   
    )
}

export default Lists