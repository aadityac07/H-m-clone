import React from "react"
import "./hnm.css"
import Header  from './Header'
import Footer from "./Footer"

function Mens(){

    return(
       
        <div>
             <Header/>
                <div className="xyz">
                    <img className="image123" src="./shoppinga.png"/>
                    
                </div>
                <div  className="xyz">
                        <img  className="image123"  src="./shoppingb.png"/>
                </div>

             <Footer/>
        </div>
    )
}

export default Mens