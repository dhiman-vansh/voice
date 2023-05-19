import './Comp/App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Comp/Home';
import Head from "./Comp/Head";
import Foot from "./Comp/Foot"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Product from "./Comp/Product"
import About from "./Comp/About"
import Contact from './Comp/Contact';
import Categ from './Comp/Categ';
import Cart from './Comp/Cart';
import Verify from './Comp/Verify';
import Privacy from './Comp/Policy/Privacy';
import Terms from './Comp/Policy/Terms';
import Return from './Comp/Policy/Return';
import Ship from './Comp/Policy/Ship';
import Transcript from './Comp/Transcript';

function App() {
  return (
    <>
      <Head />
      {/* <div style={{ position: "absolute", backgroundColor: "pink" , width:"30vh", height:"60vh" }}> */}
        {/* <h1>hi</h1> */}
        <Transcript />
      {/* </div> */}

      {/* <a href="https://wa.me/8755381346" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pro/:id' element={<Product />} />
        <Route path='/categ/:opt' element={<Categ />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/return' element={<Return />} />
        <Route path='/ship' element={<Ship />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;
