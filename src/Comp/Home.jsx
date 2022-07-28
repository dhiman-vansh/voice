import Slideban from "../Homecomp/Slideban"
import Cardcomp from "../Homecomp/Cardcomp"
import Cardfunc from "../Homecomp/Cardfunc"
import Collection from "../Homecomp/Collection"
import Review from "../Homecomp/Review"
import Category from "../Homecomp/Category"
import Feat from "../Homecomp/Feat"
import Insta from "../Homecomp/Insta"
import "./App.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <Slideban />
        <Category />
        <Collection />
        {/* <Cardcomp /> */}
        <Cardfunc />
        <Feat />
        <Insta />
        <Review />
      </div>

    </>
  )
}