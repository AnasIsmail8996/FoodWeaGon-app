import  './Search.css';
import Arrow from '../../assets/Arrow.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from 'react-bootstrap/Card';
import foodItemOne from '../../assets/fooditemone.png';
import foodItemTwo from '../../assets/fooditemtwo.png';
import foodItemThere from '../../assets/fooditemthere.png';
import foodItemFour from '../../assets/fooditemfour.png';
import foodItemFive from '../../assets/fooditemfive.png';
import foodItemSixth from '../../assets/fooditemsix.png';
import foodItemSeven from '../../assets/fooditemseven.png';


const SearchFood = () => {
  return (
    <>
    <div className='search-food-back col-lg-12 col-md-12 col-sm-12'>
       <Container>
        <Row >

              <Col sm={5} className='mt-5' >
                <div className='search-food-heading'>
                   <h3>Search by Food</h3>
                </div>
              </Col>
             <Col sm={4} className='mt-5' >
                <div className='search-food-top-btn'>
                    <button> View All <span><img src={Arrow} alt="" /></span></button>
                </div>
             </Col>
        </Row>



        {/* slider starting from here */}
    <Row>
    <Col lg={12} md={12} sm={12}>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {/* Card one  */}
      <SwiperSlide>
      <Card className='food-card-parent mt-5'>
      <div className='food-card'>
        <img src={foodItemOne} alt="" />
      </div>
      <Card.Body>
         <div className='food-items-names'>
            <h6>Pizza</h6>
         </div>
       
        
      </Card.Body>
    </Card>
      </SwiperSlide>
        {/* Card Two  */}
      <SwiperSlide>
      <Card className='food-card-parent mt-5'>
      <div className='food-card'>
        <img src={foodItemTwo} alt="" />
      </div>
      <Card.Body>
         <div className='food-items-names'>
            <h6>Burger</h6>
         </div>
       
      </Card.Body>
    </Card>
      </SwiperSlide>
        {/* Card There  */}
      <SwiperSlide>
      <Card className='food-card-parent mt-5'>
      <div className='food-card'>
        <img src={foodItemThere} alt="" />
      </div>
      <Card.Body>
         <div className='food-items-names'>
            <h6>Noodles</h6>
         </div>
       
      </Card.Body>
    </Card>
      </SwiperSlide>
        {/* Card Four  */}
      <SwiperSlide>
      <Card className='food-card-parent mt-5'>
      <div className='food-card'>
        <img src={foodItemFour} alt="" />
      </div>
      <Card.Body>
         <div className='food-items-names'>
            <h6>Sub-sandiwch</h6>
         </div>
       
      </Card.Body>
    </Card>
      </SwiperSlide>
        {/* Card Five  */}
      <SwiperSlide>
      <Card className='food-card-parent mt-5'>
      <div className='food-card'>
        <img src={foodItemFive} alt="" />
      </div>
      <Card.Body>
         <div className='food-items-names'>
            <h6>Chowmein</h6>
         </div>
       
      </Card.Body>
    </Card>
      </SwiperSlide>
        {/* Card six  */}
      <SwiperSlide>
      <Card className='food-card-parent mt-5'>
      <div className='food-card'>
        <img src={foodItemSixth} alt="" />
      </div>
      <Card.Body>
         <div className='food-items-names'>
            <h6>Tikka</h6>
         </div>
       
      </Card.Body>
    </Card>
      </SwiperSlide>
        {/* Card seven  */}
      <SwiperSlide>
      <Card className='food-card-parent mt-5'>
      <div className='food-card'>
        <img src={foodItemSeven} alt="" />
      </div>
      <Card.Body>
         <div className='food-items-names'>
            <h6>Club</h6>
         </div>
       
      </Card.Body>
    </Card>
      </SwiperSlide>
        {/* Card eight  */}
      <SwiperSlide>
      <Card className='food-card-parent mt-5'>
      <div className='food-card'>
        <img src={foodItemOne} alt="" />
      </div>
      <Card.Body>
         <div className='food-items-names'>
            <h6>Fajita</h6>
         </div>
       
      </Card.Body>
    </Card>
      </SwiperSlide>
    
    </Swiper>


    </Col>
    </Row>

        </Container>   


    </div>
    </>
  )
}

export default SearchFood;