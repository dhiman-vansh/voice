import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { Nav } from "react-bootstrap";

export default function Categ() {

  const [value, setValue] = useState([]);
  const makeAPICall = async () => {
    try {
      const response = await fetch('https://uma-zeb.herokuapp.com/dataget');
      const data = await response.json();
      // console.log({ data })
      setValue(data);
    }
    catch (e) {
      console.log(e)
    }
  }


  const { opt } = useParams()


  useEffect(() => {
    makeAPICall();
  }, [])


  return (
    <>
    <div className="prodhead">
      <span>Category</span>
      <span>: {opt}</span>
    </div>
      <div className="prodcat">
        {value.map(x => {
          if (x.category == opt) {
            return (
            <section>
              <img src={x.url} alt={x.category} width="100%" />
              <h4>{x.name}</h4>
              <h5>{x.category}</h5>
              <Nav.Link href={`/pro/${x.id}`} >
              <MDBBtn color='primary'>₹ {x.price}</MDBBtn>
              </Nav.Link>
            </section>
          )
          }
        })
        }
      </div>
    </>
  )
}