import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "../Homecomp/Home.css"
import logo from "../Assest/logo.png"
import { FaShoppingCart } from 'react-icons/fa';
import { IoLogInSharp } from 'react-icons/io5';
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


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
  return (
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
          style={{ backgroundColor: "white" }}
        >
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} width="200px" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "center", marginLeft: "150px" }}>
              <Nav className="mr-auto" >
                {/* <Collapsible trigger="Start here">
                  <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the next
                    section!
                  </p>
                </Collapsible> */}
                <Nav.Link href="/" style={{ color: "#285eab" }}>Home</Nav.Link>
                {/* <NavDropdown title="Shop" id="basic-nav-dropdown" >

                  <NavDropdown.Item data-aos="fade-up" href="/categ/bangles">Bangles</NavDropdown.Item>
                  <NavDropdown.Item data-aos="fade-up" href="/categ/necklace">Necklaces</NavDropdown.Item>
                  <NavDropdown.Item data-aos="fade-up" href="/categ/earings">Earrings</NavDropdown.Item>
                  <NavDropdown.Item data-aos="fade-up" href="/categ/earings">Gifts</NavDropdown.Item>
                  <NavDropdown.Item data-aos="fade-up" href="/categ/earings">Anklets</NavDropdown.Item>
                  <NavDropdown.Item data-aos="fade-up" href="/categ/earings">Rings</NavDropdown.Item>
                </NavDropdown> */}
                <NavDropdown title="Shop" id="basic-nav-dropdown" >

                  <div>
                    <div style={{display:"flex"}}>
                      <div style={{ width: '50%' }}>
                      <img alt="slidebar" width="100%" src="https://uma-creatives.s3.ap-south-1.amazonaws.com/uploads/shopdropdown_watch_box_banner.jpg" />
                      </div>
                      <div style={{ }}>
                        <p><a href="/categ/bangles">Bangles</a></p>
                        <p><a href="/categ/necklace">Necklaces</a></p>
                        <p><a href="/categ/earings">Earrings</a></p>
                        <p><a data-aos="fade-up" href="/categ/earings">Gifts</a></p>
                        <p><a data-aos="fade-up" href="/categ/earings">Anklets</a></p>
                        <p><a data-aos="fade-up" href="/categ/earings">Rings</a></p>
                      </div>
                    </div>
                  </div>
                </NavDropdown>
                {/* <Nav.Link > Shop</Nav.Link> */}
                <Nav.Link href="/about" style={{ color: "#285eab" }}>About Us</Nav.Link>
                <Nav.Link href="/contact" style={{ color: "#285eab" }}>Contact Us</Nav.Link>

              </Nav>
              <Nav>
                <Nav.Link href="/cart"><FaShoppingCart style={{ fontSize: "35px", marginLeft: "10px" }} /> </Nav.Link>
                <Nav.Link href="/cart"><IoLogInSharp style={{ fontSize: "35px", marginLeft: "20px" }} onClick={() => {
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










// import React from "react";
// import { useState } from "react";
// import Slider from "react-slick";
// import "../Homecomp/Home.css"
// import logo from "../Assest/logo.png"
// import { FaShoppingCart } from 'react-icons/fa';
// import { IoLogInSharp } from 'react-icons/io5';
// import { Nav,Navbar,Container,NavDropdown } from "react-bootstrap";

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();


// export default function VerticalSwipeToSlide() {
  

//     // const [showBasic, setShowBasic] = useState(false);

//     const settings = {
//     //   dots: true,    
//       infinite: true,
//       slidesToShow: 1,
//     //   fade:true,
//       slidesToScroll: 1,
//       vertical: true,
//       verticalSwiping: true,
//       swipeToSlide: true,
//       autoplay: true,
//       speed: 1000,
//       autoplaySpeed: 2000,
//       cssEase: "linear"  
//         //   beforeChange: function(currentSlide, nextSlide) {
//     //     console.log("before change", currentSlide, nextSlide);
//     //   },
//     //   afterChange: function(currentSlide) {
//     //     console.log("after change", currentSlide);
//     //   }
//     }
//     // const [showNavCentred, setShowNavCentred] = useState(false);
//   return(
//     <>
//       <div className="slickhead">
//         <Slider {...settings}>
//           <div>
//             <h3>Pure Silver Jewellery</h3>
//           </div>
//           <div>
//             <h3>Frequent Discounts</h3>
//           </div>
//           <div>
//             <h3>Support Guarantee</h3>
//           </div>
//           <div>
//             <h3>Fast Shipping</h3>
//           </div>
//         </Slider>
//       </div>

//     <div className="header" >
//       <Navbar expand="lg"
//        style={{backgroundColor:"white"}}
//       >
//   <Container>
//     <Navbar.Brand href="/"> 
//     <img src={logo} width="200px"  /> </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:"center",marginLeft:"150px"}}>
//       <Nav className="mr-auto" >
//         <Nav.Link href="/"  style={{color:"#285eab"}}>Home</Nav.Link>
//         <NavDropdown title="Shop" id="basic-nav-dropdown" >
//           <NavDropdown.Item  data-aos="fade-up" href="/categ/bangles">Bangles</NavDropdown.Item>
//           <NavDropdown.Item  data-aos="fade-up" href="/categ/necklace">Necklaces</NavDropdown.Item>
//           <NavDropdown.Item  data-aos="fade-up" href="/categ/earings">Earrings</NavDropdown.Item>
//           <NavDropdown.Item  data-aos="fade-up" href="/categ/earings">Gifts</NavDropdown.Item>
//           <NavDropdown.Item  data-aos="fade-up" href="/categ/earings">Anklets</NavDropdown.Item>
//           <NavDropdown.Item  data-aos="fade-up" href="/categ/earings">Rings</NavDropdown.Item>
//         </NavDropdown>
//         {/* <Nav.Link > Shop</Nav.Link> */}
//         <Nav.Link href="/about" style={{color:"#285eab"}}>About Us</Nav.Link>
//         <Nav.Link href="/contact" style={{color:"#285eab"}}>Contact Us</Nav.Link>

//       </Nav>
//       <Nav>
//     <Nav.Link href="/cart"><FaShoppingCart style={{fontSize:"35px",marginLeft:"10px"}} /> </Nav.Link>
//     <Nav.Link href="/cart"><IoLogInSharp style={{fontSize:"35px",marginLeft:"20px"}} onClick={() => {
//       localStorage.clear();
//       window.location.reload(`false`)
//     }} /> </Nav.Link>
//     </Nav>
//     </Navbar.Collapse>
//     <Nav>
//     </Nav>
//   </Container>
// </Navbar>
// </div>
//     </>
//   )

  
//   }
