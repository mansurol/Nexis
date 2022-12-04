import React from 'react';
import './Navs.css'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Logo from '../Img/logo.png'


const Navs = () => {
    return (
      <div className='bgColor'>
      <Navbar expand="lg">
<Container>
<Navbar.Brand as={Link} to="/home"><img src={Logo} alt="logo" /></Navbar.Brand>
 <Navbar.Toggle aria-controls="navbarScroll" />
 <Navbar.Collapse id="navbarScroll">
   <Nav className="ms-auto my-2 my-lg-0"> 
   <Nav.Link as={Link} to="/home"><span className="MenuBarContent">HOME</span></Nav.Link>
   <Nav.Link as={Link} to="/attendance "><span className="MenuBarContent">ATTENDANCE </span></Nav.Link>
   <Nav.Link as={Link} to="/login"><span className="MenuBarContent">LOGIN</span></Nav.Link>
   

 
  

   
   
   </Nav>
 </Navbar.Collapse>
</Container>
</Navbar>
   </div>
    );
};

export default Navs;
