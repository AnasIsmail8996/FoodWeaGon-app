import './FeatRes.css';
import { Container , Row, Col } from 'react-bootstrap';
import ResImgOne from '../../assets/ResOne.png';
import ResImgTwo from '../../assets/ResTwo.png';
import ResImgThere from '../../assets/ResThere.png';
import ResImgFour from '../../assets/ResFour.png';
import ResImgFive from '../../assets/ResFive.png';
import ResImgSixth from '../../assets/ResSix.png';
import ResImgSeven from '../../assets/Resseven.png';
import ResImgEight from '../../assets/Reseight.png';
import officons from '../../assets/off-icons.png';
import Card from 'react-bootstrap/Card';
import offclock from '../../assets/offclock.png';
import firstcardimg from '../../assets/firstcardimg.png';
import Star from '../../assets/star.png';
import pizza from '../../assets/pizza.png';
import donuts from '../../assets/donuts.png';
import subway from '../../assets/subway.png';
import ruby from '../../assets/ruby.png';
import kfc from '../../assets/kfc.png';
import red from '../../assets/red.png';
import brll from '../../assets/brll.png';
import Arrow from '../../assets/Arrow.png';


const FeatRes = () => {
  return (
    <>
    <div className='FeatRes col-lg-12 col-md-12 col-sm-12 mt-5'>
        <h3>Featured Restaurants    </h3>
    </div>

    <Container>
    <Row className='mt-5' >
        <Col  sm={6} md={6} lg={3} >
        <Card className='Res-card-parent mb-5 px-2 '>
         <div className='Res-img-top'>
            <img src={ResImgOne} alt="" />
            </div>      

            <div className='icons-img-parent'>
                   <div className='off'>
                      
                       <p>  <img src={officons} alt="" /> 20 <span>%</span>  off</p>
                   </div>
                   <div className='offClock'>
                    <p> <img src={offclock} alt="" /> Fast </p>
                   </div>
            </div>
      <Card.Body>
          <div className='img-text-icon-parent'>
            <div className='img-body'>
                <img src={firstcardimg} alt="" />
            </div>

            <div className='name-and-icon'>
                <h6>Foodworld</h6>
                <p> <span> <img src={Star} alt="" /></span> 46 </p>
            </div>
          </div>
            
            <div className='foodbtn'>
              <button>Opens tomorrow</button>
            </div>
      </Card.Body>
    </Card>

        </Col>
        {/* Card two */}
        <Col sm={6} md={6} lg={3}  >
        <Card className='Res-card-parent mb-5 px-2'>
         <div className='Res-img-top'>
            <img src={ResImgTwo} alt="" />
            </div>      

            <div className='icons-img-parent'>
                   <div className='off'>
                      
                       <p>  <img src={officons} alt="" /> 10 <span>%</span>  off</p>
                   </div>
                   <div className='offClock'>
                    <p> <img src={offclock} alt="" /> Fast </p>
                   </div>
            </div>
      <Card.Body>
          <div className='img-text-icon-parent'>
            <div className='img-body'>
                <img src={pizza} alt="" />
            </div>

            <div className='name-and-icon'>
                <h6>Pizzahub</h6>
                <p> <span> <img src={Star} alt="" /></span> 20 </p>
            </div>
          </div>
            
            <div className='foodbtn'>
              <button>Opens tomorrow</button>
            </div>
      </Card.Body>
    </Card>
        </Col>
        <Col  sm={6} md={6} lg={3} >
        <Card className='Res-card-parent mb-5 px-2'>
         <div className='Res-img-top'>
            <img src={ResImgFour} alt="" />
            </div>      

            <div className='icons-img-parent'>
                   <div className='off'>
                      
                       <p>  <img src={officons} alt="" /> 15 <span>%</span>  off</p>
                   </div>
                   <div className='offClock'>
                    <p> <img src={offclock} alt="" /> Fast </p>
                   </div>
            </div>
      <Card.Body>
          <div className='img-text-icon-parent'>
            <div className='img-body'>
                <img src={donuts} alt="" />
            </div>

            <div className='name-and-icon'>
                <h6>Donuts hut</h6>
                <p> <span> <img src={Star} alt="" /></span> 20 </p>
            </div>
          </div>
            
            <div className='foodbtn-open'>
              <button>Open Now</button>
            </div>
      </Card.Body>
    </Card>

        </Col>
        <Col  sm={6} md={6} lg={3} >
        <Card className='Res-card-parent mb-5 px-2'>
         <div className='Res-img-top'>
            <img src={ResImgThere} alt="" />
            </div>      

            <div className='icons-img-parent'>
                   <div className='off'>
                      
                       <p>  <img src={officons} alt="" /> 20 <span>%</span>  off</p>
                   </div>
                   <div className='offClock'>
                    <p> <img src={offclock} alt="" /> Fast </p>
                   </div>
            </div>
      <Card.Body>
          <div className='img-text-icon-parent'>
            <div className='img-body'>
                <img src={subway} alt="" />
            </div>

            <div className='name-and-icon'>
                <h6>Donuts hut</h6>
                <p> <span> <img src={Star} alt="" /></span> 50 </p>
            </div>
          </div>
            
            <div className='foodbtn-open'>
              <button>Open Now</button>
            </div>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      {/* Second Row */}
    <Row>
        <Col sm={6} md={6} lg={3} >
        <Card className='Res-card-parent mb-5 px-2'>
         <div className='Res-img-top'>
            <img src={ResImgFive} alt="" />
            </div>      

            <div className='icons-img-parent'>
                   <div className='off'>
                      
                       <p>  <img src={officons} alt="" /> 45 <span>%</span>  off</p>
                   </div>
                   <div className='offClock'>
                    <p> <img src={offclock} alt="" /> Fast </p>
                   </div>
            </div>
      <Card.Body>
          <div className='img-text-icon-parent'>
            <div className='img-body'>
                <img src={ruby} alt="" />
            </div>

            <div className='name-and-icon'>
                <h6>Ruby Tuesday</h6>
                <p> <span> <img src={Star} alt="" /></span> 35 </p>
            </div>
          </div>
            
            <div className='foodbtn-open'>
              <button>Open Now</button>
            </div>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={6} md={6} lg={3}  >
        <Card className='Res-card-parent mb-5 px-2'>
         <div className='Res-img-top'>
            <img src={ResImgSixth} alt="" />
            </div>      

            <div className='icons-img-parent'>
                   <div className='off'>
                      
                       <p>  <img src={officons} alt="" /> 25 <span>%</span>  off</p>
                   </div>
                   <div className='offClock'>
                    <p> <img src={offclock} alt="" /> Fast </p>
                   </div>
            </div>
      <Card.Body>
          <div className='img-text-icon-parent'>
            <div className='img-body'>
                <img src={kfc} alt="" />
            </div>

            <div className='name-and-icon'>
                <h6>Kuakata Fried</h6>
                <p> <span> <img src={Star} alt="" /></span> 45.999 </p>
            </div>
          </div>
            
            <div className='foodbtn-open'>
              <button>Open Now</button>
            </div>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={6} md={6} lg={3}  >
        <Col sm={6} md={6} lg={3}  >
        <Card className='Res-card-parent mb-5 px-2'>
         <div className='Res-img-top'>
            <img src={ResImgSeven} alt="" />
            </div>      

            <div className='icons-img-parent'>
                   <div className='off'>
                      
                       <p>  <img src={officons} alt="" /> 66 <span>%</span>  off</p>
                   </div>
                   <div className='offClock'>
                    <p> <img src={offclock} alt="" /> Fast </p>
                   </div>
            </div>
      <Card.Body>
          <div className='img-text-icon-parent'>
            <div className='img-body'>
                <img src={red} alt="" />
            </div>

            <div className='name-and-icon'>
                <h6>Red Square</h6>
                <p> <span> <img src={Star} alt="" /></span> 44 </p>
            </div>
          </div>
            
            <div className='foodbtn-open'>
              <button>Open Now</button>
            </div>
      </Card.Body>
    </Card>
        </Col>
        </Col>
        <Col sm={6} md={6} lg={3}  >
        <Card className='Res-card-parent mb-5 px-2'>
         <div className='Res-img-top'>
            <img src={ResImgEight} alt="" />
            </div>      

            <div className='icons-img-parent'>
                   <div className='off'>
                      
                       <p>  <img src={officons} alt="" /> 25 <span>%</span>  off</p>
                   </div>
                   <div className='offClock'>
                    <p> <img src={offclock} alt="" /> Fast </p>
                   </div>
            </div>
      <Card.Body>
          <div className='img-text-icon-parent'>
            <div className='img-body'>
                <img src={brll} alt="" />
            </div>

            <div className='name-and-icon'>
                <h6>Red Square</h6>
                <p> <span> <img src={Star} alt="" /></span> 100 </p>
            </div>
          </div>
            
            <div className='foodbtn-open'>
              <button>Open Now</button>
            </div>
      </Card.Body>
    </Card>
        </Col>
      </Row>

      <Row >
        <Col lg={12} md={12} sm={12}>
        <div  className='viewAll'>
           <button> View All  <img src={Arrow} alt="" /></button>
        </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default FeatRes;