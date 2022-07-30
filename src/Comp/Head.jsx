import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "../Homecomp/Home.css"
import logo from "../Assest/logo.png"
import { FaShoppingCart } from 'react-icons/fa';
import { IoLogInSharp } from 'react-icons/io5';

import { Nav,Navbar,Container,NavDropdown } from "react-bootstrap";

export default function VerticalSwipeToSlide() {

    // const [showBasic, setShowBasic] = useState(false);

    const settings = {
    //   dots: true,    
      infinite: true,
      slidesToShow: 1,
    //   fade:true,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear"    //   beforeChange: function(currentSlide, nextSlide) {
    //     console.log("before change", currentSlide, nextSlide);
    //   },
    //   afterChange: function(currentSlide) {
    //     console.log("after change", currentSlide);
    //   }
    }
    // const [showNavCentred, setShowNavCentred] = useState(false);
  return(
    <>
      <div className="slickhead">
        <Slider {...settings}>
          <div>
            <h3>Pure Silver Jewellery</h3>
          </div>
          <div>
            <h3>Frequent Discounts</h3>
          </div>
          <div>
            <h3>Support Guarantee</h3>
          </div>
          <div>
            <h3>Fast Shipping</h3>
          </div>
        </Slider>
      </div>

    <div className="header" >
      <Navbar expand="lg"
       style={{backgroundColor:"white"}}
      >
  <Container>
    <Navbar.Brand href="/"> 
    <img src={logo} width="200px"  /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:"center",marginLeft:"150px"}}>
      <Nav className="mr-auto" >
        <Nav.Link href="/"  style={{color:"#285eab"}}>Home</Nav.Link>
        {/* <Nav.Link href="/about" style={{color:"#285eab"}}>Category</Nav.Link> */}
        <NavDropdown title="Category" id="basic-nav-dropdown" >
          <NavDropdown.Item href="/categ/bangles">Bangles</NavDropdown.Item>
          <NavDropdown.Item href="/categ/necklace">Necklace</NavDropdown.Item>
          <NavDropdown.Item href="/categ/earings">Earings</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/about" style={{color:"#285eab"}}>About Us</Nav.Link>
        <Nav.Link href="/contact" style={{color:"#285eab"}}>Contact Us</Nav.Link>

      </Nav>
      <Nav>
    <Nav.Link href="/cart"><FaShoppingCart style={{fontSize:"35px",marginLeft:"10px"}} /> </Nav.Link>
    <Nav.Link href="/cart"><IoLogInSharp style={{fontSize:"35px",marginLeft:"20px"}} onClick={() => {
      localStorage.clear();
      window.location.reload(`false`)
    }} /> </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <Nav>
    </Nav>
  </Container>
</Navbar>
</div>
    </>
  )

  
  }
