import { Container, Row , Col} from 'react-bootstrap';
import  './MobileSection.css';
import mobileIconOne from '../../assets/mobileone.png';
import mobileIconTwo from '../../assets/mobiletwo.png';
import mobileIconThere from '../../assets/mobilethere.png';
import HR from '../../assets/HR.png';
import Mobileimages from './Mobileimages';
const MobileSection = () => {
  return (
    <>
    <div className='mobile-color-one mt-5 col-lg-12 col-md-12 col-sm-12'>  
    <div className=' mobile-color-two  col-lg-12 col-md-12 col-sm-12'>

   <Container>
    <Row>
        <div className='icons-mobile-parent col-lg-12 col-md-12 col-sm-6'>
        <Col lg={3} md={6} sm={4}>
            <div className='mobile-icons-one'>
            <img src={mobileIconOne} alt="" />
            <h5>Daily <br /> Discounts</h5>
            <div className='line-h'>
            <img src={HR} alt="" />
            </div>
            </div>
        </Col>
        <Col lg={3} md={6} sm={4}>
        <div  className='mobile-icons-two'>
            <img src={mobileIconTwo} alt="" />
            <h5>Live <br /> Tracing</h5>
            <div className='line-h-two'>
            <img src={HR} alt="" />
            </div>
             </div>
        </Col>
        <Col lg={3} md={6} sm={4}>

        <div  className='mobile-icons-there'>
            <img src={mobileIconThere} alt="" />
            <h5>Quick <br /> Delivery</h5>
            
             </div>
        </Col>
        </div>
    </Row>

    <Row>
      <Col lg={12} md={8} sm={6}  className='mt-5'>
        <Mobileimages/>
      </Col>
    </Row>
   </Container>








    </div>
    </div>
    </>
  )
}

export default MobileSection;
