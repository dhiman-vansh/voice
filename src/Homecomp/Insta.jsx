import React from "react"
import axios from "axios"
import { useState,useEffect } from "react"
import "./Home.css"


export default function Insta(){
    const [user,setUser] = useState([])

    
    // useEffect(()=>{
        
    //         axios.get("https://v1.nocodeapi.com/vansh_dhiman/instagram/tUkHyBGGZKbQuwxW")
    //         .then((response)=>{
    //             console.log(response.data.data)
    //             setUser(response.data.data)
    //         })
        
    // },[])

    

    return(
        <>
        
        <h1 style={{textAlign:"center",marginTop:"2%"}}>Our Instagram : </h1>

        <div className="ig" data-aos="fade-up"
            data-aos-duration="1000"
            >

        {/* {user.map((value) =>{
            return(
                <>
                <section>
                <a href="https://www.instagram.com/umasilvergifts/" target={"_blank"}>
                <img src={value.media_url} width="100%" />
                </a>
                </section>

                </>
            )
        })
        } */}
        </div>

        </>
    )
}