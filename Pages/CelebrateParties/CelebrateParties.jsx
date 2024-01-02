import  './CelebrateParties.css';
import { Container , Row, Col } from 'react-bootstrap';
import celebrateparties from '../../assets/celebrateparties.png';
import CHEVRONRIGHT from '../../assets/CHEVRONRIGHT.png';
const CelebrateParties = () => {
  return (
    <>
    <Container>

       <Row className='mt-5'>
        <Col sm={8}  lg={8} md={6}   >
             <div className='celebrate-par-img'>
                <img src={celebrateparties} alt="" />
             </div>

        </Col>
        <Col sm={8} lg={4} md={6} >
                   <div className='celeb-parties-text-btn'>
                        <h2>   <span>    Celebrate  parties with  </span>   Fried Chicken</h2>
                        <p>Get the best fried chicken smeared 
                            with a lip smacking lemon chili flavor. Check out 
                                best deals for fried chicken.</p>
                        <button className='mb-5'>  Proceed to order <span><img src={CHEVRONRIGHT} alt="" /> </span>  </button>
                   </div>

        </Col>
      </Row>
    </Container>
    </>
  )
}

export default CelebrateParties;
