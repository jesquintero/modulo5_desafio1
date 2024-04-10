import { Row, Col, Container } from 'react-bootstrap';
import chocoCake from '../assets/chocoCake.png'

function HomePage() {
    return ( 
        <Container>
        <Row>
            <Col className='text-center'>
                <h1>Bienvenido a <b>Happy Cake</b></h1>
                <p>El lugar de los pasteles felices</p>
                <img src={chocoCake} alt="" />
            </Col>
        </Row>
        </Container>
     );
}

export default HomePage;