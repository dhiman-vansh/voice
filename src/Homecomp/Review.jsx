import Slider from "react-slick";
import "./Home.css"
import {BsFillChatRightQuoteFill} from "react-icons/bs"

export default function Review(){

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl:true
      };

    return(
        <>

        <div className="rev">
        <h2>REVIEWS</h2>
        <Slider {...settings}>
          <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"} />  
          </section>
          <section>
          <p>Professional behaviou. Best quality product</p>
          </section>
          <h4>Sudha Sharma</h4>
          </item>
          <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"} />  
          </section>
          <section>
          <p>Professional behaviou. Best quality product</p>
          </section>
          <h4>Sudha Sharma</h4>
          </item>
          <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"} />  
          </section>
          <section>
          <p>Professional behaviou. Best quality product</p>
          </section>
          <h4>Sudha Sharma</h4>
          </item>
          <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"} />  
          </section>
          <section>
          <p>Professional behaviou. Best quality product</p>
          </section>
          <h4>Sudha Sharma</h4>
          </item>
          <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"} />  
          </section>
          <section>
          <p>Professional behaviou. Best quality product</p>
          </section>
          <h4>Sudha Sharma</h4>
          </item>
          <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"}  />  
          </section>
          <section>
          <p>Professional behaviou. Best quality product</p>
          </section>
          <h4>Sudha Sharma</h4>
          </item>
        </Slider>
        </div>
        </>
    )
}