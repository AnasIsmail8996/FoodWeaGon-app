import './FoodWeagon.css';
import logoFood from '../../assets/logoFoodweagon.png';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mapIcon from '../../assets/map-marker-alt.png';
import Search from '../../assets/Search.png';
import UserIcon from '../../assets/user.png';

const Nb = () => {
  return (
    <>



    <Navbar expand="lg" className="bg-none NB">
      <Container fluid>
        <Navbar.Brand href="FoodWeagon">
           <div className='FoodWeagon'>
             <img src={logoFood} alt="" />
             <p>food<span>waGon</span></p>
           </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <div className='current-location'>
            <p>Deliver to:</p>
            <img src={mapIcon} alt="" />
            <span>Current Location</span>
               <p>Mohammadpur Bus Stand, Dhaka</p>
           </div>
          </Nav>
          <div className='form-wrapper'>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search Food"
          className=""
          aria-label="Search"
        />
        <div className='search-icon'>
          <img src={Search} alt="Search Icon" />
        </div>
        <div className='btn-input'>
          <button>
            <span>
              <img src={UserIcon} alt="User Icon" />
            </span>
            <p>Login</p>
          </button>
        </div>
      </Form>
    </div>
          
              

           
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Nb;