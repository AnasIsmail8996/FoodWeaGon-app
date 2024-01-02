import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import Envelope from '../../assets/Envelope.png';
const Footer = () => {
  return (
    <>
    <div className='Footer-parent col-lg-12 col-md-12 col-sm-12 '>
     <Container>
        <Row  className='mt-5'>
        <Col sm={4} lg={2} md={3} >
             <div className='footer-heading'>
              <h6 >Our top cities</h6>
              <ul>
                <li className='mt-5'>San Francisco</li>
                <li>Miami</li>
                <li>San Diego</li>
                <li>East Bay</li>
                <li>Long Beach</li>
              </ul>

             </div>
        </Col>
        <Col sm={4} lg={3} md={3} >
            <div className='footer-text-two'>
                <ul>
                    <li>Los Angeles</li>
                    <li>Washington DC</li>
                    <li>Seattle</li>
                    <li>Portland</li>
                    <li>Nashville</li>

                </ul>
            </div>
        </Col>
        <Col sm={4} lg={2} md={3} >
        <div className='footer-text-there'>
                <ul>
                    <li>New York City</li>
                    <li>Orange County</li>
                    <li>Atlanta</li>
                    <li>Charlotte</li>
                    <li>Denver</li>

                </ul>
            </div>
        </Col>
        <Col sm={4} lg={3} md={3} >

        <div className='footer-text-four'>
                <ul>
                    <li>Chicago</li>
                    <li>Phoenix</li>
                    <li>Las Vegas</li>
                    <li>Sacramento</li>
                    <li>Oklahoma City</li>

                </ul>
            </div>
        </Col>
        <Col sm={4} lg={2} md={3} >

            
        <div className='footer-text-five'>
                <ul>
                    <li>Chicago</li>
                    <li>Phoenix</li>
                    <li>Las Vegas</li>
                    <li>Sacramento</li>
                    <li>Oklahoma City</li>

                </ul>
            </div>
        </Col>
        
        </Row>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='horozontel-line'  ></div>
                </Col>
            </Row>
        

           
           <Row className='mt-5'>
            <Col  lg={2} md={4} sm={4} className='mt-5'>
                <div className='company'>
                    <h6>Company</h6>
                    <ul>
                        <li>About us </li>
                        <li>Team</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </Col>
            <Col  lg={2} md={4} sm={4} className='mt-5'>
            <div className='Contact'>
                    <h6>Contact</h6>
                    <ul>
                        <li>Help & Support</li>
                        <li>Partner with us </li>
                        <li>Ride with us</li>
                      
                    </ul>
                </div>
            </Col>
            <Col  lg={2} md={4} sm={4} className='mt-5'>
            <div className='Legal'>
                    <h6>Legal</h6>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Refund & Cancellation</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                      
                    </ul>
                </div>
            </Col>
            <Col  lg={6} md={10} sm={12} className='mt-5'>
                  <div className='follow-parent'>
                     <h6>Follow Us</h6>

                     <div className='social-icons'>
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                     </div>

                     <div className='mail-text'>
                         <h6>Receive exclusive offers in your mailbox</h6>
                         </div>
                         <div className='input-btn'>
                            <input type="text" placeholder='Enter Your email' />

                            <button>Subscribe</button>
                         </div>
                         <div className='mail-img'>
                            <img src={Envelope} alt="" />
                         </div>
                  </div>

            
            </Col>
           </Row>
 
           <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='horozontel-line'  ></div>
                </Col>
            </Row>
         

         <Row>
            <Col lg={12} md={12} sm={12}>
            <div className='my-data'>
                <h5>made by Anas Ismail </h5>
            </div>
            </Col>
         </Row>
     </Container>
    </div>
    </>
  )
}

export default Footer