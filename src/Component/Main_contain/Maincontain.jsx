import React from "react";
import "./MainContain.css"
import img from "../image/name.jpeg"
function Maincontain(){
    return (
        <div className="container">
         <div className="left-container">
         <div className="Main-heading">
        <h1 className="heading">Hi , I' am Deepak</h1>
        <p className="para">Social Work</p>
        <p className="para-2">Passionate professional with a B.Tech and 23 months of Gandhi Fellowship experience in program management, mobilization, and facilitation. Skilled in digital health solutions, community engagement, and driving impactful change.






</p>
       </div>
         </div>
         <div className="right-container">

            <div className="img">
                <img src={img} alt="" />
            </div>
         </div>
        </div>
    )
}
export default Maincontain;