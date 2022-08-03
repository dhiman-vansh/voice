import s1 from "../Assest/items/s1.jpg"
import s6 from "../Assest/items/s6.jpg"
import l4 from "../Assest/items/l4.jpg"
import l5 from "../Assest/items/l5.jpg"
import vid from "../Assest/items/vid.mp4"
import ln from "../Assest/items/smol/ln.jpg"
import s8 from "../Assest/items/smol/02.jpg"


export default function Collection() {
    return(
        <>

        
        <div className="collect">
        {/* <h1>GALLERY</h1> */}
        <video
        // controls
         width={"100%"} 
         autoPlay muted
         loop
         src={vid}></video>

         
        <div>

        <section data-aos="fade-right"
    data-aos-duration="1000"
    >   
        <img src={l5} width="100%" style={{height:"800px"}} />
        </section>
        <section data-aos="fade-left"
    data-aos-duration="1000"
    >
        <img src={s1} width={"50%"} style={{maxHeight:"400px"}} />
        <img src={s6} width={"50%"} style={{maxHeight:"400px"}} />
        <img src={ln} width={"50%"} style={{maxHeight:"400px"}} />
        <img src={s8} width={"50%"} style={{maxHeight:"400px"}} />


        {/* <img src={s6} width = {"400px"} /> */}
        </section>
        </div>
        </div>

        </>
    )
}