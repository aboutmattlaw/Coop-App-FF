import {Button, Form, Container} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'


// Sign In Form

function Signin({setCurrentUser}) {
    function handleSubmit(e) {
        e.preventDefault()
        const obj = {
            "email": e.target[0].value,
            "password": e.target[1].value
        }

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(resp => {
            if (resp.ok) {
                resp.json().then(user => setCurrentUser(user))

            } else {
                resp.json().then(alert(resp.statusText))
                
            }
        })
    }

    return (
<>

<Container className="w-50 p-3 mt-5">


            <Form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>

                <Button variant="primary" type="submit" className="m-5">
                    Submit
                </Button>

                <div><Link to="/">Don't have an account yet? Sign up now!</Link></div>

            </Form>
 </Container>
        </>
    )
}

export default Signin;
