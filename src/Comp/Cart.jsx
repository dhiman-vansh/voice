import { useEffect, useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';


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




  return (
    <>
      {/* {savevar()} */}
      {console.log(items, " is the number")}
      {/* {console.log(items[0].key, " is the numver")} */}
      <div className="cartcont" >
        <h1 >Products ordered :</h1>
        <div className="cart">
          
          {value.map(x => {
            if (x.id == items[0].key) {
              return (
                <section>
                  {console.log(x.id, ' is x')}
                  <img src={x.url} alt={x.category} width="100%" />
                  <h4>{x.name}</h4>
                  <h4>{x.category}</h4>
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
        <MDBBtn color='primary' onClick={localStorage.clear}>Buy Now</MDBBtn>
      </div>
    </>
  )
}