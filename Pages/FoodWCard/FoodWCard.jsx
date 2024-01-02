import  './FoodWCard.css';
import { Container, Row ,Col } from 'react-bootstrap';

import { Card } from 'react-bootstrap';
import Imagecardone from '../../assets/Imagecardone.png';
import Imagecardtwo from '../../assets/Imagecardtwo.png';
import Imagecardthere from '../../assets/Imagecardthere.png';
import Imagecardfour from '../../assets/Imagecardfour.png';
const FoodWCard = () => {
  return (
    <>
    <Container>

    <Row className='mt-5'>
  {/* Card One */}
        <Col sm={6} md={6} lg={3} className='mt-5 p-1 '>
          <div className='card-wrapper'>

        <Card style={{ width: '17rem' }} className='card-body-c'>
       <div className='card-img'>
            <img src={Imagecardone} alt="" />
            <div className='yallow-card'>
                <div className='yallow-card-number'>
                  <p>15</p>
                </div>
                <div className='yallow-card-number-text-two'>
                  <p className='yallow-card-ratio'>% </p>
                  <p>Off</p>
                
                      

                </div>
            </div>
        </div>      
      <Card.Body>
       
        <div className='yallow-card-body-text'>
           <p> Greys Vage</p>
        </div>
          <div className='yallow-card-body-btn'>
            <button>6 Days Remaining</button>
          </div>
      </Card.Body>
    </Card>
        
          </div>
        </Col>
  {/* Card Two */}
        <Col sm={6} md={6} lg={3} className='mt-5 py-1 px-2 '>
        <div className='card-wrapper'>

<Card style={{ width: '17rem' }} className='card-body-c'>
<div className='card-img'>
    <img src={Imagecardtwo} alt="" />
    <div className='yallow-card'>
        <div className='yallow-card-number'>
          <p>20</p>
        </div>
        <div className='yallow-card-number-text-two'>
          <p className='yallow-card-ratio'>% </p>
          <p>Off</p>
        
              

        </div>
    </div>
</div>      
<Card.Body>

<div className='yallow-card-body-text'>
   <p> Greys Vage</p>
</div>
  <div className='yallow-card-body-btn'>
    <button>6 Days Remaining</button>
  </div>
</Card.Body>
</Card>

  </div>

        </Col>
  {/* Card There */}
        <Col sm={6} md={6} lg={3} className='mt-5 px-4 py-1'>
        <div className='card-wrapper'>

<Card style={{ width: '17rem' }} className='card-body-c'>
<div className='card-img'>
    <img src={Imagecardthere} alt="" />
    <div className='yallow-card'>
        <div className='yallow-card-number'>
          <p>28</p>
        </div>
        <div className='yallow-card-number-text-two'>
          <p className='yallow-card-ratio'>% </p>
          <p>Off</p>
        
              

        </div>
    </div>
</div>      
<Card.Body>

<div className='yallow-card-body-text'>
   <p> Greys Vage</p>
</div>
  <div className='yallow-card-body-btn'>
    <button>6 Days Remaining</button>
  </div>
</Card.Body>
</Card>

  </div>

        </Col>
  {/* Card Four */}
        <Col sm={6} md={6} lg={3} className='mt-5 py-1 px-4'>
        <div className='card-wrapper'>

<Card style={{ width: '17rem' }} className='card-body-c'>
<div className='card-img'>
    <img src={Imagecardfour} alt="" />
    <div className='yallow-card'>
        <div className='yallow-card-number'>
          <p>35</p>
        </div>
        <div className='yallow-card-number-text-two'>
          <p className='yallow-card-ratio'>% </p>
          <p>Off</p>
        
              

        </div>
    </div>
</div>      
<Card.Body>

<div className='yallow-card-body-text'>
   <p> Greys Vage</p>
</div>
  <div className='yallow-card-body-btn'>
    <button>6 Days Remaining</button>
  </div>
</Card.Body>
</Card>

  </div>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default FoodWCard;