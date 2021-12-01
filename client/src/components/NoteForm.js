import {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'
import ListDetails from './ListDetails';


// form state and notes state

function NoteForm({setCurrentUser, currentUser, notes, setNotes, detail}) {

    const [noteFormData, setNoteFormData] = useState({note_text: ''})
  


    function handleNoteChange(event) {
        setNoteFormData({
            ...noteFormData,
            [event.target.name]: event.target.value
        })
    }

// user_id is hardcoded as is list_item_id
// TypeError: Cannot read properties of undefined (reading 'id') when trying currentUser.id



    function handleNoteSubmit(event) {
        event.preventDefault()
        setNoteFormData({note_text: ''})
        const obj = {
            "note_text": event.target[0].value,
            "user_id": currentUser.id,
            "list_item_id": detail.id
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
            ], console.log(data))

        })
    }
    console.log("DEEET", detail);


    return (
        <>


            <Form onSubmit={handleNoteSubmit}>
                <Form.Group className="mb-3" controlId="formBasicNoteText">
                    <Form.Label></Form.Label>
                    <Form.Control onChange={handleNoteChange}
                        name="note_text"
                        value={
                            noteFormData.note_text
                        }
                        placeholder="Make a note"/>
                </Form.Group>
                <Button variant="primary" type="submit">Add Note</Button>
            </Form>


        </>
    )
}

export default NoteForm
