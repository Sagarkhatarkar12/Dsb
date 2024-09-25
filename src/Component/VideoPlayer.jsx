import React from "react";
 
import "./vid.css"
function VideoPlayer(){
    return (
     <div className="VideoPlayer">
        <video width="600"controls>
            {/* <source src= {} type="video/mp4" /> */}
        </video>

     </div>   
    )
}
export default VideoPlayer;
