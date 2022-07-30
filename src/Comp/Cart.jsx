import { useEffect, useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import img from "../Assest/pattern.jpg"
import axios from "axios";


export default function Cart() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('id')) || [0]);
  const [value, setValue] = useState([]);



  const makeAPICall = async () => {
    try {
      const response = await fetch('https://uma-zeb.herokuapp.com/dataget');
      const data = await response.json();
      setValue(data);
    }
    catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    makeAPICall();
  }, []);

  const [amount, setamount] = useState('');

  const checkoutHandler = async (amount) => {
    // console.log('amount is ',amount)
    const { data: { order } } = await axios.post("https://uma-zeb.herokuapp.com/pay", {
      amount
    })

    console.log(order.amount, " is the amount")


    const options = {
      key: "rzp_test_8CciN8r2gST2Zr", // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Vansh ",
      description: "Test Transaction",
      image: {img},
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `http://localhost:8000/verify`,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999"
      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color": "#3399cc"
      }
    };
    const razor = new window.Razorpay(options);
    // document.getElementById('rzp-button1').onclick = function (e) {
    razor.open();
    // e.preventDefault();
    // }

  }


  var num = 0

  return (
    <>
      {/* {savevar()} */}
      {/* {console.log(items, " is the number")} */}
      {console.log(items, " is the numver")}
      <div className="cartcont" >
        <h1 >Products ordered :</h1>
        <div className="cart">
          {/* {var num =0} */}
          {value.map(x => {
              if (x.id == items[0].key) {
                num = x.price + num;
                return (
                  <section>
                    {/* {console.log(x.id, ' is x')} */}
                    <img src={x.url} alt={x.category} width="100%" />
                    <a href={`/pro/${x.id}`}>
                    <h4>{x.name}</h4>
                    </a>
                    <a href={`/categ/${x.category}`}>
                    <h4>{x.category}</h4>
                    </a>
                    <h4>₹ {x.price}</h4>
                  </section>
                )
              }
            })
          }

        </div>
        <MDBBtn color='success' href="/" onClick={() => {
          localStorage.clear();
          window.location.reload(`false`)
        }}>Clear Cart</MDBBtn>
        {/* {console.log(num)} */}
        <MDBBtn color='primary'
          onClick={() => checkoutHandler(num)}
        >Checkout</MDBBtn>
      </div>
    </>
  )
}