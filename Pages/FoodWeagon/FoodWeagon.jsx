import './FoodWeagon.css';
import Nb from './Nb';
import { Container, Row, Col } from 'react-bootstrap';
import motorbike from '../../assets/Light iPhone/motorsmall.png';
import pickup from '../../assets/pickup.png';
import locationIcon from '../../assets/locationIcon.png';
import findSearch from '../../assets/find-search.png';
import ImageBase from '../../assets/ImageBase.png';
import FoodWCard from '../FoodWCard/FoodWCard';


const FoodWeagon = () => {
  return (
    <>
    <header>
<Nb/>
    </header>

    <div className='FoodWeagon-back-img'>
    
    <Container>
    <Row>
        <Col sm={4} md={5} lg={8}    className='mt-5'  >
           <div className='starving'>
            <h1>Are you starving?</h1>
            <p>Within a few clicks, find meals that are accessible near you</p>
           </div>
       
        <Col  lg={8} md={5} sm={3} >
        <div className='btn-input-section'>
             <div className='btns-order'>
              <button><span> <img src={motorbike} alt="" /></span>  Delivery</button>
              <button> <span><img src={pickup} alt="" /></span>  Pickup</button>
             </div>



             <Col  lg={12}  md={5} sm={2}>
          

              <div className='input-address'>
           <input type="text" placeholder='Enter Your Address' /> 
               
               <div className='location-icon'>
                 <img src={locationIcon} alt="" />
               </div>
                  
          </div>
          <div className='find-btn'>
            <button>  <span> <img src={findSearch} alt="" /></span>  Find Food</button>
          </div>

          
              </Col>
              
        </div>
        </Col>
        
       
             
        

        </Col>
        {/* image column */}
        <Col sm={10} md={8} lg={4} className='mt-5' >
             <div className='ImageBase'>
              <img src={ImageBase} alt="" />
             </div>
        </Col>
      </Row>


{/* card section starting from here */}



    
      </Container>  
    


    </div>
    </>
  )
}

export default FoodWeagon;
