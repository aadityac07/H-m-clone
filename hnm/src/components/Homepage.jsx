// import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
// import img from "./images/hnm.png.jpeg"
// import proper from "./proper"
// import img from"./public/hmgoepprod.jpeg'
function Homepage() {
    // const route = useNavigate()
    return (
        <div>
            <Header />
            <div id="content">

                <div className="image-content">
                    <div className="abc">
                        <img src="./hnm.png.jpeg" />
                    </div>

                    <div className="abc" >
                        <img src="./hm-coupons.jpg" />
                    </div>
                </div>





            </div>
            <div id="content-2">
                <img className="abc2" src="hnm2.png" />
                <div className="abc-3">
                    <img src="hnmimp.jpeg" />
                </div>
                <div className="abcd-img">
                    <img src="abcd.png"/>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Homepage