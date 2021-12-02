import {useState, useEffect} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap'
import ListDetails from './ListDetails';


// form state and notes state

function NoteForm({
    setCurrentUser,
    activeList,
    currentUser,
    notes,
    setNotes,
    detail,
    setListDetails
}) {

    const [noteFormData, setNoteFormData] = useState({note_text: ''})


    function handleNoteChange(event) {
        setNoteFormData({
            ...noteFormData,
            [event.target.name]: event.target.value
        })
    }


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
            fetch(`/lists/${
                activeList.id
            }`).then(resp => resp.json()).then(data => setListDetails(data))
        })
    }


    return (
        <>
<Form onSubmit={handleNoteSubmit}>
            <Row>
                <Col>
                    
                        <Form.Group className="mb-3" controlId="formBasicNoteText">
                            <Form.Label></Form.Label>
                            <Form.Control onChange={handleNoteChange}
                                name="note_text"
                                value={
                                    noteFormData.note_text
                                }
                                placeholder="Make a note"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button className="mt-4" variant="primary" type="submit">Add Note</Button>
                    </Col>
              

            </Row>
            </Form>


        </>
    )
}

export default NoteForm
