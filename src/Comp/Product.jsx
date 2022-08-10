import "../Comp/App.css"
import s1 from "../Assest/items/s1.jpg"
// import { tab } from "@testing-library/user-event/dist/tab"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';

// this.props.params.id = 1
//qyery call with data (id)

// addCart () {
//     post query to add data in cart tab;else..

// .then ()
// {
//     get call from <</Cart>
//     uupdate state count of cart vbased on data
// }
// }
export default function Product() {

  const [count, setCount] = useState([])

  const savelocal = x => () => {
    var id = JSON.parse(localStorage.getItem('id') || '[]')
    var newid = {
      key: x.id,
    }
    id.push(newid)

    localStorage.setItem('id', JSON.stringify(id))
  }

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

  useEffect(() => {
    makeAPICall();
  }, [])

  //   useEffect(()=>{

  //     axios.get("https://v1.nocodeapi.com/vansh_dhiman/instagram/tUkHyBGGZKbQuwxW")
  //     .then((response)=>{
  //         console.log(response.data.data)
  //         setValue(response.data.data)
  //     })

  // },[])
  const { id } = useParams()
  // console.log(id)
  return (
    <>

      {value.map(x => {
        if (x.id == id) {
          return (
            <div className="product" >
              <section id="first">
                <img src={x.url} width="100%" height={"100%"} />
              </section>
              <section id="second">
                <h2 ><strong>{x.name}</strong></h2>
                <h4>Category: {x.category}</h4>
                <h4>one of the best of our collections</h4>
                <h3 style={{borderTop:"2px solid black", paddingTop:"4%"}}>PRICE : {x.price}</h3>
                <MDBBtn color='success' onClick={savelocal(x)}>Add to Cart</MDBBtn>
                <h4>{x.descr}</h4>
                <li>Light Weight</li>
                <li>Durable</li>
                <li>Long Lasting</li>

              </section>
            </div>
          )
        }
      })
      }
    </>
  )
}