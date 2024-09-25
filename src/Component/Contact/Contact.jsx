import React from "react";
import Gmail from "./Gmail";
import "./contact.css"
function Contact(){
    return (
        <>
        <div className="contact-cotainer">
                     <h1>Contact Us </h1>
                       <p>Gmail : <input type="text" value={"deepakkhatarkar6@gmail.com"}/></p>
                       <p>Phone no : <input type="text" value={"7898566728"} /> </p>
                       <p>Linkdin Profile : <a href="https://www.linkedin.com/in/deepak-kumar-khatarkar-a4302a263" target="_black">https://www.linkedin.com/in/deepak-kumar-khatarkar-a4302a263</a></p>
                      <p>Address : <input type="text" value={"Betul Madhya Pradesh "} /></p>
        </div>
        
        </>
    )
}
export default Contact;