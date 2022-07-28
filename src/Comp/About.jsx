import { MDBIcon } from 'mdb-react-ui-kit';
import Review from "../Homecomp/Review"

export default function About() {
  return ( 
    <>
    <div className='aboutcont'>
      <div className="about">
        <h1>About Us</h1>
        <div>
          {/* <section> */}
            {/* <h2>Welcome To Uma Creatives!</h2><br></br> */}
            <h6>Uma was conceptualized in 2016 with a vision to bring handmade silver jewellery in vogue again. With carefully selected products and a few designed in store, each customer is assured exclusivity and individuality in whatever they buy. We run a boutique store in the quaint city of Dehradun and would love for you to visit us if you’re in town.
              We, at Uma, want to make your shopping experience enjoyable and gratifying in store and online. To make this happen, we ask you to take a moment out of your busy lives and appreciate not just the beauty but also the craftmanship of each earring, necklace, toe-ring or bangle that you look at. Take your time to find the harmony between your
              personality and the designs and feel the therapeutic powers of the semi-precious stones calm your mind, while we guarantee the purity of the metal and stones. All the jewellery at Uma is crafted in 92.5% pure silver and high grade semi-precious stones.
              Go on, start picking out the designs and adding them to your cart. Only pay for the ones that bring out the feel-good factor! We’ll safely ship the jewellery to you.</h6>
          {/* </section> */}
          <section>
            <figure>
              {/* <img src="https://umacreatives.com/static/media/product.81261f6e.jpeg" width={"100%"} alt="img" /> */}
            </figure>
          </section>
        </div>
      </div>
      <div className="why">
        <h3> Why Choose Us</h3>
        <div>
          <section>
            <h1><MDBIcon fas icon="cogs" /></h1>
            <h4>what do we do</h4>
            <p>We, at Uma, bring handmade silver jewellery & guarantee the purity of the metal and stones. All the jewellery at Uma is crafted in 92.5% pure silver and high grade semi-precious stones.</p>
          </section>
          <section>
            <h1><MDBIcon fas icon="bullseye" /></h1>
            <h4>Our Mission</h4>
            <p>With carefully selected products and a few designed in store, each customer is assured exclusivity and individuality in whatever they buy.</p>
          </section>
          <section>
            <h1><MDBIcon fas icon="history" /></h1>
            <h4>History of Us</h4>
            <p>Uma was conceptualized in 2016 with a vision to bring handmade silver jewellery in vogue again. We run a boutique store in the quaint city of Dehradun and would love for you to visit us if you’re in town.</p>
          </section>
        </div>
      </div>

    {/* <Review /> */}

    </div>
    </>
  )
}