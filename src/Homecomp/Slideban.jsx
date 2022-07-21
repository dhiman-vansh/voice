import React from 'react';

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';
// import { ElfsightWidget } from 'react-elfsight-widget';

import l1 from "../Assest/items/l1.jpg"
import l2 from "../Assest/items/l2.jpg"
import ln from "../Assest/items/ln.jpg"
import "./Home.css"

export default function App() {
  return (
    <>
    {/* <ElfsightWidget widgetID="55b43f4d-7685-46d5-ad42-18318c39c3f5" /> */}
    <MDBCarousel showControls>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src={l1} alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={ln} alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={l2} alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </>

  );
}