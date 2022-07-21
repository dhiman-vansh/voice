import {TbTruckDelivery} from "react-icons/tb"
import {GrCertificate} from "react-icons/gr"
import {BiBox} from "react-icons/bi"

export default function Feat() {
    return(
        <>
        
        <div className="feat">
        
        <div>
        <TbTruckDelivery fontSize={"50px"}  />
        <p>Fast Delivery</p>
        </div>
        <div>
        <GrCertificate fontSize={"50px"}  />
        <p>Certified Products</p>
        </div>
        <div>
        <BiBox fontSize={"50px"}  />
        <p>Easy Exchange
        </p>
        </div>

        </div></>
    )
}