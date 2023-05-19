import React, { useState } from "react"
import Voice from "./Voice"

export default function Transcript() {
    var [show, setShow] = useState(false);
    return (
        <>
            <div className="transcript">
               {/* {show?} */}
                {
                    show?<><div><Voice /></div><p><button onClick={() => setShow(!show)}>↓</button></p> </>:
                    <><span>Click on arrow to open speech recognition</span><p>
                    <button onClick={() => setShow(!show)}>↑</button>
                </p> </>
                }

                

                
            </div>
        </>
    )
}