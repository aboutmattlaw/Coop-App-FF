import {Button, Form, Container} from 'react-bootstrap'
import { Link } from "react-router-dom"

function Signup({setCurrentUser}) {

    function handleSubmit(event) {
        event.preventDefault()
        const obj = {
            "first_name": event.target[0].value,
            "last_name": event.target[1].value,
            "email": event.target[2].value,
            "password": event.target[3].value,
            "confirm_password": event.target[3].value
        }
        console.log('Body Object', obj)
        fetch('/signup', {
            method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(obj)
        })
        .then(resp => {
            if(resp.ok) {
                console.log('user signup resp ok', resp)
                resp.json().then(data => setCurrentUser(data))
            } else {
                console.log('user signup resp not ok', resp)
            }
        })
        
    }
    
    return(
        <Container className="w-50 p-3 mt-5">
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirst">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="first" placeholder="Enter First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLast">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="last" placeholder="Enter Last Name" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="m-5">
                Submit
            </Button>
       
            
            <Link to="/">Login</Link>
        </Form>
        </Container>
    )
}

export default Signup;