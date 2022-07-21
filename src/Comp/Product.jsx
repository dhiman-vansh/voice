import "../Comp/App.css"
import s1 from "../Assest/items/s1.jpg"


export default function Product(){
    return(
        <>
        <div className="product" >
            <section id="first">
                <img src={s1} width="100%" height={"100%"} />
            </section>
            <section id="second">
                <h2 ><strong>Golden Earings</strong></h2>
                <h4>one of the best of our collections</h4>
                <h3>PRICE : ₹3000</h3>
                <button> Buy Now</button>
                <h4>Features - <br></br></h4>
                <li>Light Weight</li>
                <li>Durable</li>
                <li>Long Lasting</li>
                
            </section>
        </div>
        </>
    )
}