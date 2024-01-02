import './Pizza.css';
import { Container, Row, Col } from 'react-bootstrap';
import CHEVRONRIGHT from '../../assets/CHEVRONRIGHT.png';
import bestdeals from '../../assets/Pizzalarge.png';
const Pizza = () => {
  return (
    <>
  
          <Container>

          <Row>
        <Col sm={4} lg={4} md={6} >
           <div className='best-heading-text-btn' >
           <h2>  Wanna eat hot & spicy  <span> Pizza?  </span></h2>
           <p>Pair up with a friend and
             enjoy the hot and crispy 
             pizza pops. Try it 
            with the best deals.</p>
             
             <button>    Proceed to order     <span> <img src={CHEVRONRIGHT} alt="" /></span> </button>
           </div>

        </Col>
        <Col sm={8} lg={8} md={6}  >
            <div className='bestdeals-img'>
              <img src={bestdeals} alt="" />
            </div>
        </Col>
      </Row>
          </Container>


  
    </>
  )
}

export default Pizza;