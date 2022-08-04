import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import "./App.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();


export default function App() {
  return (
    <div style={{ backgroundColor: "#3366b0", color: "white", fontWeight: "normal" }}>
      <MDBFooter className='text-center'
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/umacreatives' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='https://www.google.com/search?client=opera-gx&q=umacreatives&sourceid=opera&ie=UTF-8&oe=UTF-8' role='button'>
              <MDBIcon fab icon='google' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/umasilvergifts/' role='button'>
              <MDBIcon fab icon='instagram' />
            </a>
          </section>

          {/* <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section> */}

          {/* <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section> */}

          <section className=''>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>About Us</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='/about#why' className='text-white'>
                      UMA
                    </a>
                  </li>
                  <li>
                    <a href='/about#why' className='text-white'>
                      What We Do
                    </a>
                  </li>
                  <li>
                    <a href='/about#why' className='text-white'>
                      Mission
                    </a>
                  </li>
                  <li>
                    <a href='/about#why' className='text-white'>
                      History
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Policies</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='/privacy' className='text-white'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href='/terms' className='text-white'>
                      Terms And Conditions
                    </a>
                  </li>
                  <li>
                    <a href='/return' className='text-white'>
                      Return & Exchange Policy
                    </a>
                  </li>
                  <li>
                    <a href='/ship' className='text-white'>
                      Shipping Policy
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Customer Services</h5>

                <ul className='list-unstyled mb-0'>
                <br></br>

                  <li>
                    <a href='/contact' className='text-white'>
                      India +91 97600247481
                      <br></br>
                      (10 am - 06 pm, 6 days a week)
                    </a>
                  </li>
                  {/* <br></br> */}
                  <li>
                    <a href='/contact' className='text-white'>
                      onlinesales.umacreatives@gmail.com
                    </a>
                  </li>
                  
                </ul>
              </MDBCol>

              {/* <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol> */}
            </MDBRow>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright :
          <a className='text-white' href='https://zebrians.in'>
            "Zebrians"
          </a>
        </div>
      </MDBFooter>
    </div>

  );
}