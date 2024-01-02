import  './ReadyToOrder.css';
import ReadytoOrderimg from '../../assets/readyorder.png';
import CHEVRONRIGHT from '../../assets/CHEVRONRIGHT.png';
import {  Row, Col } from 'react-bootstrap';
const ReadyToOrder = () => {
  return (
    <>
    <Row>
<Col lg={12} md={12} sm={12}>
    <div className='ReadyToOrder-back mt-5 col-lg-12 col-md-12 col-sm-12'>
        <img src={ReadytoOrderimg} alt="" className='col-lg-12 col-md-12 col-sm-12' />
    <div className='ReadyToOrder-text-btn'>
       <h2>Are you ready to order with the best deals?</h2>
       <button> Proceed to order <span> <img src={CHEVRONRIGHT} alt="" /></span> </button>
    </div>
    </div>
</Col>
    </Row>
    </>
  )
}

export default ReadyToOrder;