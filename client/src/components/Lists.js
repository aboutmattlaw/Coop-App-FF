import {useState, useEffect} from 'react';
import {Form, Button} from "react-bootstrap"
import {Routes, Route} from 'react-router-dom'
import ListDetails from './ListDetails'

function Lists({currentUser, currentUserLists, setCurrentUserLists}){
    const [listFormData, setListFormData] = useState({list_name: ''})
    const [listDetails, setListDetails] = useState([])


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
            console.log()
        })
    }

    
    function handleListChange(event) {
        setListFormData({
            ...listFormData,
            [event.target.name]: event.target.value
        })
    }



    function getListDetails(id) {
        fetch(`lists/${id}`)
        .then(resp => resp.json())
        .then(data => setListDetails(data))
        .then(console.log(ListDetails))
    }


    
    const lists = currentUserLists.map(list => {
        return  <>
              <li onClick={() => getListDetails(list.id)}>{list.list_name}</li>
                </>
    })


    // const items = listDetails.map(list => {
    //     return  <>
    //           <li>{list.item_name}</li>
    //             </>
    // })

    
   
    return(
  <>
        <ul>
        {lists}
        </ul>


<Routes>
<Route path="/" element={<ListDetails/>} />

</Routes>
        



        <p></p>

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