import './BestDeals.css';
import { Container, Row, Col } from 'react-bootstrap';
import CHEVRONRIGHT from '../../assets/CHEVRONRIGHT.png';
import bestdeals from '../../assets/bestdeals.png';
const BestDeals = () => {
  return (
    <>
    <div className='bestdeals-parent'>
          <Container>

          <Row>
        <Col sm={4} lg={4} md={6} >
           <div className='best-heading-text-btn' >
           <h2> <span>Best deals</span>   Crispy Sandwiches </h2>
           <p>Enjoy the large size of sandwiches. Complete 
                perfect slice of sandwiches.</p>
             
             <button>    Proceed to order     <span> <img src={CHEVRONRIGHT} alt="" /></span> </button>
           </div>

        </Col>
        <Col sm={8} lg={8} md={6} >
            <div className='bestdeals-img'>
              <img src={bestdeals} alt="" />
            </div>
        </Col>
      </Row>
          </Container>


    </div>
    </>
  )
}

export default BestDeals;