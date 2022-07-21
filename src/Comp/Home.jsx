import Slideban from "../Homecomp/Slideban"
import Cardcomp from "../Homecomp/Cardcomp"
import Collection from "../Homecomp/Collection"
import Review from "../Homecomp/Review"
import Category from "../Homecomp/Category"
import Feat from "../Homecomp/Feat"
import Insta from "../Homecomp/Insta"

export default function Home() {
    return(
        <>
        <Slideban />
        <Category />
        <Collection />
        <Cardcomp />
        <Feat />
        <Insta />
        <Review />  
        </>
    )
}