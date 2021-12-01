import {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'
import ListDetails from './ListDetails';


function NoteForm({setCurrentUser, currentUser}) {

    const [noteFormData, setNoteFormData] = useState({note_text: ''})
    const [notes, setNotes] = useState([])


    function handleNoteChange(event) {
        setNoteFormData({
            ...noteFormData,
            [event.target.name]: event.target.value
        })
    }


    function handleNoteSubmit(event, detail, currentUser, listDetails) {
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
            ], console.log(data))

        })
    }


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
