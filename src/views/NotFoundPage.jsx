import { Col, Row, Container } from "react-bootstrap";

function NotFoundPage() {
    return ( 
        <Container>
            <Row>
                <Col className='text-center pt-5'>
                    <h1>Esta pagina no la hemos creado</h1>
                </Col>
            </Row>
        </Container>
     );
}

export default NotFoundPage;