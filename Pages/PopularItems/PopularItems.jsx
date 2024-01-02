import './PopularItems.css';
import { Container, Row, Col, } from 'react-bootstrap';

const PopularItems = () => {
  return (

   <>
   <Container>
    <Row>
        <Col>
        <div className='popular-heading mt-5 mb-5'>
           <h4>Popular items</h4>
        </div>
        </Col>
    </Row>


   </Container>
   </>
  )
}

export default PopularItems;