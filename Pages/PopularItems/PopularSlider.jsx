import './PopularItems.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Container, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImgone from '../../assets/sliderimageone.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card } from 'react-bootstrap';
import sliderlocation from '../../assets/slider-location.png';
import sliderImgtwo from '../../assets/sliderimagetwo.png';
import sliderImgthere from '../../assets/sliderimagethere.png';
import sliderImgfour from '../../assets/sliderimagefour.png';
import sliderImgfive from '../../assets/sliderimagefive.png';

const PopularSlider = () => {
  return (
    <>
    <Container >
 <Row>
<Col lg={12} md={12} sm={12}>
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      <SwiperSlide>
      <Row>

<Col   className=''  lg={12} md={12} sm={12}>
  <Card className='card-parent col-lg-12 col-md-12 col-sm-12'>
      <div className='slider-img'>
        <img src={sliderImgone} alt="" />
      </div>
<Card.Body>
  <div className='slider-card-text'>
      <h5>Toffe’s Cake</h5>
      <p> <span> <img src={sliderlocation} alt="" /> </span> Top Sticks</p>
      <h5>$3.88</h5>
  </div>

<div className='slider-btn'>
 <button>Order Now</button>
</div>
</Card.Body>
</Card>
  </Col>
  </Row>
      </SwiperSlide>
      <SwiperSlide>
        <Row>

      <Col   className=''  lg={12} md={12} sm={12}>
        <Card className='card-parent col-lg-12 col-md-12 col-sm-12'>
            <div className='slider-img'>
              <img src={sliderImgone} alt="" />
            </div>
      <Card.Body>
        <div className='slider-card-text'>
            <h5>Toffe’s Cake</h5>
            <p> <span> <img src={sliderlocation} alt="" /> </span> Top Sticks</p>
            <h5>$3.88</h5>
        </div>
      
      <div className='slider-btn'>
       <button>Order Now</button>
      </div>
      </Card.Body>
    </Card>
        </Col>
        </Row>
      </SwiperSlide>

      {/* Card Two */}
      <SwiperSlide>
       <Row>
       <Col      className='' lg={12} md={12} sm={12}>
        <Card className='card-parent col-lg-12 col-md-12 col-sm-12'>
            <div className='slider-img'>
              <img src={sliderImgtwo} alt="" />
            </div>
      <Card.Body>
        <div className='slider-card-text'>
            <h5>Dancake</h5>
            <p> <span> <img src={sliderlocation} alt="" /> </span> Cake World</p>
            <h5>$1.99</h5>
        </div>
      
      <div className='slider-btn'>
       <button>Order Now</button>
      </div>
      </Card.Body>
    </Card>
        </Col>
       


       </Row>

      </SwiperSlide>
    {/* card There */}
      <SwiperSlide>
 <Row>


       
    <Col   className='' lg={12} md={12} sm={12}>
        <Card className='card-parent col-lg-12 col-md-12 col-sm-12'>
            <div className='slider-img'>
              <img src={sliderImgthere} alt="" />
            </div>
      <Card.Body>
        <div className='slider-card-text'>
            <h5>CrispySand</h5>
            <p> <span> <img src={sliderlocation} alt="" /> </span> Fastfood Dine</p>
            <h5>$3.00</h5>
        </div>
      
      <div className='slider-btn'>
       <button>Order Now</button>
      </div>
      </Card.Body>
    </Card>
        </Col>
       
 </Row>

      </SwiperSlide>

            {/* card Four */}
      <SwiperSlide>
        <Row>
       
        <Col      className='' lg={12} md={12} sm={12}>
        <Card className='card-parent col-lg-12 col-md-12 col-sm-12'>
            <div className='slider-img'>
              <img src={sliderImgfour} alt="" />
            </div>
      <Card.Body>
        <div className='slider-card-text'>
            <h5>Thai  Soup</h5>
            <p> <span> <img src={sliderlocation} alt="" /> </span> Foody man</p>
            <h5>$2.79</h5>
        </div>
      
      <div className='slider-btn'>
       <button>Order Now</button>
      </div>
      </Card.Body>
    </Card>
        </Col>
        </Row>
      </SwiperSlide>
      <SwiperSlide>
        <Row>
            {/* card Five */}
       
        <Col    className='' lg={12} md={12} sm={12}>
        <Card className='card-parent col-lg-12 col-md-12 col-sm-12'>
            <div className='slider-img'>
              <img src={sliderImgfive} alt="" />
            </div>
      <Card.Body>
        <div className='slider-card-text'>
            <h5>Cheese Burger</h5>
            <p> <span> <img src={sliderlocation} alt="" /> </span> Burger Arena</p>
            <h5>$1.99</h5>
        </div>
      
      <div className='slider-btn'>
       <button>Order Now</button>
      </div>
      </Card.Body>
    </Card>
        </Col>
        </Row>
      </SwiperSlide>
      {/* Six Card */}
      <SwiperSlide>
        {/* card Five */}
       
        <Col   className='' lg={12} md={12} sm={12}>
        <Card className='card-parent  col-lg-12 col-md-12 col-sm-12 '>
            <div className='slider-img'>
              <img src={sliderImgfive} alt="" />
            </div>
      <Card.Body>
        <div className='slider-card-text'>
            <h5>Cheese Burger</h5>
            <p> <span> <img src={sliderlocation} alt="" /> </span> Burger Arena</p>
            <h5>$1.99</h5>
        </div>
      
      <div className='slider-btn'>
       <button>Order Now</button>
      </div>
      </Card.Body>
    </Card>
        </Col>
      </SwiperSlide>
     
    </Swiper>
          </Col>
          </Row>
        </Container>
    </>
  )
}

export default PopularSlider;