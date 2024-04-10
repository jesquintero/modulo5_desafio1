import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function ContactPage() {
    return ( 
        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>Cuentanos, ¿en que podemos ayudarte?</h1>
                    <Form>
                        <Form.Group controlId="Email">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group controlId="Mensage">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        
                        <Button variant="dark" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
     );
}

export default ContactPage;