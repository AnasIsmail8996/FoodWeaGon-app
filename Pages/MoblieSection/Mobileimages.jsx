import { Container, Row, Col } from 'react-bootstrap';
import './MobileSection.css';
import installImageOne from '../../assets/AppStoreDownloadButton.png';
import installImageTwo from '../../assets/GooglePlayDownload.png';
import helfImgOne from '../../assets/helffrontwo.png';
import helfImgtwo from '../../assets/helffrontthere.png';
import helfImgthere from '../../assets/mobilefour.png';
import cardClock from '../../assets/card-clock.png';
import SpeakerCamera from '../../assets/SpeakerCamera.png';
import Camera from '../../assets/Camera.png';
import mobilebtnicon from '../../assets/mobile-btn-icon.png';
import mobileSearch from '../../assets/mobile-search.png';
import itemsone from '../../assets/itemsone.png';
import itemsotwo from '../../assets/itemsthere.png';
import itemsthere from '../../assets/itemsfour.png';
import itemsfour from '../../assets/itemstwo.png';
import luch from '../../assets/luch.png';
import smileicon from '../../assets/smileicon.png';
const Mobileimages = () => {
  return (
    <>
    <Container>
    <Row>
        {/* mobile portion */}
        <Col  lg={7} sm={12} md={8} >
            <div className="mobile-first">
                <div className="mobile-helf-back">
                 <img src={helfImgOne} alt="" />
                </div>
                <div className='mobile-helf-backimg-top'>
                   <img src={helfImgtwo} alt="" />
                </div>
                <div className='white-back-text'>
                      <h4>Your Order</h4>

                    <div className='yallow-portion'>
                       <div className='yallow-portion-text-one'> 
                       <h6>624 Maple Ave</h6>
                       <p>Edit Address
                       </p>
                        </div>
                       
                       <div className='yallow-portion-text-two'>
                            <h6> <span> <img src={cardClock} alt="" /></span>  30 mins</h6>
                            <p>Choose time </p>
                       </div>
                    </div>
                
                <div className='text-there'>
                    <img src={helfImgthere} alt="" />
                    <h6> Chicken, Cashew, <br /> and Avocado Salad <br /> <span> The Plant Cafe</span></h6>
                     <p>$15.00</p>
                </div>
                </div>

            {/* mobile full  */}

            <div className='mobileFull-back-color'>
                   <div className='camera'>
                    <img src={SpeakerCamera} alt="" />
                   </div>
                   <div className='cameraDots'>
                   <img src={Camera} alt="" />
                   </div>
                    
                   <div className='mobile-heading-icon-text'>
                          
                          <div className='full-mobile-heading'>
                            <h3>What do you have a taste for?</h3>
                          </div>
                             <div className='btn-mobile-round'>
                               <button> <span> <img src={mobilebtnicon} alt="" /></span> 2</button>
                             </div>
                             </div>
                               <div className='avail-para'>
                                <p>1240 Restaraunts available</p>
                                 </div>      
                              
                                 <div className='input-portion'>
                                 <input type="text"  placeholder='Search for a restaraunt' />
                                 <div className='input-icon'> 
                                 <img src={mobileSearch} alt="" />
                                 </div>
                                </div>


                 <div className='items-portion'>
                    <Row>
                   {/* One */}
                  <Col  >
                    <div className='items-one'>
                        <button> <span><img src={itemsone} alt="" /> </span> </button>
                       
                        <p>Dinner</p>

                        
                    </div>
                  </Col>
                    {/* Two */}
                  <Col >
                  <div className='items-two'>
                        <button> <span><img src={itemsotwo} alt="" /> </span> </button>
                       
                        <p>Dessert</p>
                        </div>
                  </Col>
                  {/* There*/}
                  <Col >
                  <div className='items-there'>
                        <button> <span><img src={itemsthere} alt="" /> </span> </button>
                       
                        <p>Breakfast</p>
                        </div>
                  </Col>
                  {/* Four */}
                  <Col >
                  

                  <div className='items-four'>
                        <button> <span><img src={itemsfour} alt="" /> </span> </button>
                       
                        <p>Lunch</p>
                        </div>
                   
                  </Col>
                    </Row>
                 </div>
         

                  <div className='lunch-near-you'>
                      <div className='lunch-near-you-one' >
                        <h3>Lunch Restaraunts Near You</h3>
                        <img src={luch} alt="" />
                      </div>
                          
                          <div className='btn-miles'>
                            <button>10 miles</button>
                          </div>

                          <div className='food-Name'>
                            <h6>Noah’s Bagels</h6>
                                 <p>Lunch American $$</p>
                                 <span><img src={smileicon} alt="" />   97%</span> 
                          </div>
                  </div>






            </div>
            </div>
        </Col>
        {/*  Install the app portion */}
        <Col  lg={5}  sm={12}  md={4}  >
            <div className='install-app-parent'>
                 <div className='install-text-heading'>
                    <h1>Install the app</h1>
                    <p>It's never been easier to order food.
                         Look for the finest discounts and you'll be lost in a world of delectable food.</p>

                 </div>

                 <div className='install-images'>
                    <img src={installImageOne}  alt="" />
                    <img src={installImageTwo}   alt="" />
                 </div>
            </div>

        </Col>
      </Row>

   
    </Container>
    </>
  )
}

export default Mobileimages;