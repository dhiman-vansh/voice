import './Comp/App.css';
import{ Routes, Route} from "react-router-dom"
import Home from './Comp/Home';
import Head from "./Comp/Head";
import Foot from "./Comp/Foot"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Product from "./Comp/Product"
import About from "./Comp/About"

function App() {
  return (
    <>
    <Head />
    <a href="https://wa.me/8755381346" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/pro' element={<Product />} />
    <Route path='/about' element={<About />} />
    </Routes>
    <Foot />
    </>
  );
}

export default App;
