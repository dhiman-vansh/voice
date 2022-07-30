import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.css"
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import s1 from "../Assest/items/s1.jpg"
import { useState, useEffect } from "react";


export default function Cardfunc() {

  const makeAPICall = async () => {
    try {
      const response = await fetch('https://uma-zeb.herokuapp.com/dataget'
      );
      const data = await response.json();
      // console.log({ data })
      setValue(data.slice(-6));
      // setCertain(value.slice(0,6))
      // console.log( "Certain is ",certain)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall();
  }, [])

  const [value, setValue] = useState([]);
  // const [certain,setCertain] = useState([])


  // const cetain  = value.slice(-1,-7)
  // console.log(cetain  )          

  // const printpro = () =>{
  //   return(
  //     // console.log
  //     value.map((x)=> {
  //       return (<div>
  //         <MDBCard style={{ maxWidth: '22rem' }}>
  //           <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
  //             <MDBCardImage src={s1} fluid alt='...' />
  //             <a>
  //               <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
  //             </a>
  //           </MDBRipple>
  //           <MDBCardBody>
  //             <MDBCardTitle>{x.name}</MDBCardTitle>
  //             <MDBCardText>
  //               {x.description}
  //             </MDBCardText>
  //             <MDBBtn href={`/pro/${x.id}`}>Buy Now</MDBBtn>
  //           </MDBCardBody>
  //         </MDBCard>
  //       </div>)
  //     })
  //   )
  // }
  // const cetain  = 0


  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    swipeToSlide: true,
    // autoplay:true,
    // autoplaySpeed:2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // focusOnSelect: true,
    // centerMode:true,

    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      <div className="cardcomp" data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="cardcont">
          <h2> LATEST COLLECTIONS : </h2><br></br>
          {/* { cetain = value.slice(-1, -7)} */}
          {/* {console.log(certain)} */}
          {/* {console.log(`data is ${value[0].name}`)} */}
          <Slider {...settings}>
            {value.map((x) => {
              return (<div>
                <section>
                  <fig className='fig'><img src={x.url} width="90%" /></fig>
                  <h4>{x.name}</h4>
                  <h6>Category: {x.category}</h6>
                  {/* <h5>{x.description}</h5> */}
                  <a href={`/pro/${x.id}`}>
                    <MDBBtn color='primary'>₹ {x.price}</MDBBtn>
                  </a>
                </section>
              </div>)
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}