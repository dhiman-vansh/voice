import React from 'react';

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';
// import { ElfsightWidget } from 'react-elfsight-widget';

import b0 from "../Assest/banner/ban4.jpeg"
import b1 from "../Assest/banner/ban1.jpeg"
import b3 from "../Assest/banner/ban3.jpeg"
import b2 from "../Assest/banner/ban2.jpeg"
import "./Home.css"

export default function App() {
  return (
    <>
      {/* <ElfsightWidget widgetID="55b43f4d-7685-46d5-ad42-18318c39c3f5" /> */}
      <MDBCarousel showControls className='ban'>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src={b0} alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src={b1} alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={b2} alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={b3} alt='...' />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>

  );
}