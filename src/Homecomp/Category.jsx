import men from "../Assest/items/men.jpg"
import women from "../Assest/items/woman.jpg"
import kids from "../Assest/items/kids.jpg"
import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Category() {
    return(
        <>
        <div className="categ">
        {/* <h1>
            SHOP BY GENDER
        </h1>
        <div data-aos="fade-up"
    data-aos-duration="1000"
    >
            <section>
            
            <img src={men} width={"100%"}/> <p>Gifts</p>
            </section>
            
            <section>
            <img src={women} width={"100%"}/> <p>Women</p>
            </section>

            <section>
            <img src={kids} width={"100%"}/> <p>Kids</p>
            </section>


        </div> */}
        </div>
        </>
    )
}