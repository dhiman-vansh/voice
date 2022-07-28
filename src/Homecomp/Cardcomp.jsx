import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.css"
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import s1 from "../Assest/items/s1.jpg"
import s6 from "../Assest/items/smol/05.jpg"
import s7 from "../Assest/items/smol/04.jpg"
import s8 from "../Assest/items/smol/02.jpg"



export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
      productPage: [{
        id: 1,
        note: '1 Some quick example text to build on the card title and make up the bulk of the cards content.',
        cardTitle: 'testing Card Title1'
      },
      {
        id: 2,
        note: '2 Some quick example text to build on the card title and make up the bulk of the cards content.',
        cardTitle: 'testing Card Title2'
      },
      {
        id: 3,
        note: '3 Some quick example text to build on the card title and make up the bulk of the cards content.',
        cardTitle: 'testing Card Title3'
      },
      {
        id: 4,
        note: '4 Some quick example text to build on the card title and make up the bulk of the cards content.',
        cardTitle: 'testing Card Title4'
      },
      {
        id: 5,
        note: '5 Some quick example text to build on the card title and make up the bulk of the cards content.',
        cardTitle: 'testing Card Title5'
      }]
    }
  }
  compomnentDidMount() {
    //query call
    //results holds data
    // const productData = {
    //   cardTitle: 'testing Card Title'
    // }
    // this.setState({
    //   ...this.state,
    //   productPage: productData
    // })
  }

  clickFromChild = () => {
    console.log('clicked from child componet')
  }
  render() {
    console.log('total data', this.state.productPage);
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      swipeToSlide: true,
      // autoplay:true,
      // autoplaySpeed:2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      // centerMode:true,

      initialSlide: 0,
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
    };
    return (
      // <div>
      //   <p>Test Data </p>
      // {this.state.productPage.map((x, i) => {
      //   return(
      //   <div>
      //     <p>{this.state.productPage[i].cardTitle}</p>
      //   </div>)
      // })}
      // </div>
      <div className="cardcomp" data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="cardcont">
          <h2> TOP COLLECTIONS : </h2>
          <Slider {...settings}>
            {this.state.productPage.map(x => {
              return (<div>
                <MDBCard style={{ maxWidth: '22rem' }}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={s1} fluid alt='...' />
                    <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{x.cardTitle}</MDBCardTitle>
                    <MDBCardText>
                      {x.note}
                    </MDBCardText>
                    <MDBBtn href={`/pro/${x.id}`}>Buy Now</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>)
            })}
          </Slider>
        </div>
      </div>


    );
  }
}