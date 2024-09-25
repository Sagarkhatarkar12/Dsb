import React from "react";
import "./Nav.css"
import Education from "../Education/Education";

import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";

function Nav (){
    return (
        <div className="Navigation_bar">
            <ul className="nav-left">
             <li className="heading"><a href="/" className="link-hading">Deepak Khatarkar</a></li>
            </ul>
            <ul className="nav-right">
        
           <li className="list"><a href="/education" className="link" >Education</a></li>
           <li className="list"><a href="/about" className="link">About me</a></li>
           <li className="list"><a href="/experence" className="link">Experience</a></li>
           <li className="list"><a href="/resume" className="link">Resume </a></li>
           <li className="list"><a href="/contact" className="link">Contact us</a></li>
           <li className="list"><a href="/mywork" className="link">Mywork</a></li>

            </ul>
          
        
         
        </div>
        
    )
}
export default Nav;
