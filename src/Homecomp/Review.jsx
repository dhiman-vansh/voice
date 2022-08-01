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
          <p>A piece that you want to acquire at the first sight…which would transform your whole persona into an amalgamation of retro yet with the times</p>
          </section>
          <h4>Meenu Bhandari</h4>
          </item>
          <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"} />  
          </section>
          <section>
          <p>I loved the quality and finish of the earrings I had bought. “Uma is the place to visit for exquisite jewellery and silver gift products.</p>
          </section>
          <h4>Pooja Marwah</h4>
          </item>
          <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"} />  
          </section>
          <section>
          <p>I am forever confused as to buy which piece as most of the designs are exquisite! Happy Customer </p>
          </section>
          <h4>Shikha Chopda</h4>
          </item>
          <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"} />  
          </section>
          <section>
          <p>Uma offers a wide product base at quite reasonable prices. A must visit store in the town. The person who runs the place knows a great deal about their trade which reflects in their great service.</p>
          </section>
          <h4>Renu Goyal</h4>
          </item>
          <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"} />  
          </section>
          <section>
          <p>  Extremely elegant designs. Even as a 70-year-old, I enjoyed wearing the lightweight jhumkis with my linen sari and was extensively complimented!</p>
          </section>
          <h4>Meera Gupta</h4>
          </item>
          {/* <item>
          <section>
          <BsFillChatRightQuoteFill fontSize={"40px"}  />  
          </section>
          <section>
          <p>Professional behaviou. Best quality product</p>
          </section>
          <h4>Sudha Sharma</h4>
          </item> */}
        </Slider>
        </div>
        </>
    )
}