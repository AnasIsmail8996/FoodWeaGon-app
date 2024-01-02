import './HowDoes.css';
import { Container, Row ,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import location from '../../assets/Iconloc.png';
import donut from '../../assets/donut.png';
import menu from '../../assets/menu.png';
import Invoice from '../../assets/Invoice.png';

const HowDoes = () => {
  return (
    <div className='HowDoes-back-color mt-5 col-lg-12 col-md-12 col-sm-6'>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
            <div className='howdoes-heading'>
              <h3>How does it work</h3>
            </div>
            </Col>
          </Row>

          <Row>
        <Col xs={12} md={6} lg={3}  className='mt-3 mb-5'>
        <Card className="custom-card">
           <div className='how-card-img'>
            <img src={location} alt="" />
           </div>
      <Card.Body>
         <div className='text-card-how'>
          <h4>Select location</h4>
          <p>Choose the location where your food will be delivered. </p>
         </div>
        
    
      </Card.Body>
    </Card>         
        </Col>
        <Col xs={12} md={6} lg={3}  className='mt-3 mb-5'>
        <Card className="custom-card">
           <div className='how-card-img'>
            <img src={donut} alt="" />
           </div>
      <Card.Body>
         <div className='text-card-how'>
          <h4>Enjoy meals</h4>
          <p>Food is made and delivered directly to your home. </p>
         </div>
        
    
      </Card.Body>
    </Card>       
        </Col>
        <Col xs={12} md={6} lg={3}  className='mt-3 mb-5'>
        <Card className="custom-card">
           <div className='how-card-img'>
            <img src={menu} alt="" />
           </div>
      <Card.Body>
         <div className='text-card-how'>
          <h4>Choose order</h4>
          <p>Check over hundreds of menus to pick your favorite food </p>
         </div>
        
    
      </Card.Body>
    </Card>       
        </Col>
        <Col xs={12} md={6} lg={3} className='mt-3 mb-5'>
        <Card className="custom-card">
           <div className='how-card-img'>
            <img src={Invoice} alt="" />
           </div>
      <Card.Body>
         <div className='text-card-how'>
          <h4>Pay advanced</h4>
          <p>Its quick, safe, and simple. Select several methods of payment </p>
         </div>
        
    
      </Card.Body>
    </Card>       
        </Col>
      </Row>
        </Container>
        
        </div>
  )
}

export default HowDoes;