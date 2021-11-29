import {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'




function NoteForm({setCurrentUser}) {

    const [noteFormData, setNoteFormData] = useState({note_text: ''})
    const [notes, setNotes] = useState([])
    

    function handleNoteChange(event) {
        setNoteFormData({
            ...noteFormData,
            [event.target.name]: event.target.value
        })
      }
      function handleNoteSubmit(event, detail, currentUser) {
        event.preventDefault()
        setNoteFormData({note_text: ''})
        const obj = {
            "note_text": event.target[0].value,
            "user_id": 1,
            "list_item_id": 1
        }
      
      
        fetch('/notes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(data => {
            setNotes(value => value = [
                ...notes,
                data
            ])
          
        })
      }
      
      console.log("notes:", notes)


    return(
  <>



<Form onSubmit={handleNoteSubmit}>
<Form.Group className="mb-3" controlId="formBasicNoteText">
    <Form.Label>Eneter note</Form.Label>
    <Form.Control onChange={handleNoteChange}
        name="note_text"
        value={
            noteFormData.note_text
        }
        placeholder="Enter Note Text"/>
</Form.Group>
<Button variant="primary" type="submit">Submit</Button>
</Form>


    
    </>   
    )
}

export default NoteForm


