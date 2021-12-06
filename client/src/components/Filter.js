import {Row, Col, Form, Button} from 'react-bootstrap'





function Filter({setSearch}) {
    return (

        <Row>
        <Col>
            <Form.Group className="mb-3" controlId="formBasicListName">
                <Form.Label>
                    <h3>Find Items</h3>
                </Form.Label>
                <Form.Control type="text" id="search" placeholder="Type a name to search..."
                    onChange={
                        (e) => setSearch(e.target.value)
                }></Form.Control>
            </Form.Group>
        </Col>
        <Col>
            <Button className="mt-5" variant="primary" type="submit">Find</Button>
        </Col>
    </Row>
                  
    )
}

export default Filter
