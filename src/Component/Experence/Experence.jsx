import React from "react";
import "./experence.css"
import img from "../image/exe.jpeg"
import VideoPlayer from "../VideoPlayer";
function Experence(){
    return (
        <>
        <div className="exp-container">
<div className="gandhi">
    <div className="left-gandhi">
           <div className="expimg">
            <img src={img} alt="" />
           </div>
    </div>
    <div className="right-gandhi">
          <h1 className="p-heading">Pirmal Foundation</h1>
          <p className="t-r">Gandhi Fellow (2022-2024)</p>
          <p className="p-h"> Gandhi Fellow
Piramal Swasthya (Digital Bharat Collaborative)
July 2022 – June 2024
Bihar, India

Coordinated with district and block-level officials of the Bihar government to implement various health projects and programs.
Led and inspired changemakers by fostering a growth mindset and strengthening systems within marginalized communities.
Designed and facilitated 25+ workshops for digital capacity building of health Front Line Workers (FLWs) and block officials, training over 500 ASHAs and 120 ANMs across 7 blocks.
Empowered FLWs in adopting digital tools like ABDM, ANMOL, and U-Win through behavioral change practices and problem-solving approaches.
Supported initiatives such as the District Hospital Monthly Review Meeting (DHSMRM) and Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) to enhance service delivery and quality.
Planned and executed awareness campaigns and community health camps, addressing issues like ABHA card creation and primary healthcare, benefiting over 2800 individuals.
Contributed to the Kayakalp assessment and NQAS evaluation in 5 CHCs and 40+ HWCs, leading to recognition for quality improvement.
Initiated the SCAN and SHARE token generation system at District Hospital Kaimur, resulting in 5000+ tokens generated in 4 months, improving patient flow and digital literacy.
Key Achievements:

Successfully led a district-level campaign, resulting in the creation of 2800+ ABHA cards and training 40+ volunteers in 3 months.
Increased health awareness and OPD visits by 20%, and NCD counts by 15% in remote areas through targeted healthcare interventions.
Played a key role in placing the District Hospital and a CHC on the Kayakalp Award list by addressing quality gaps and implementing action plans.</p>
    </div>
</div>
<div className="journey">
        <h1>journey in Gandhi Fellow</h1>
        <VideoPlayer/>
        </div>
        </div>
        </>
    )
}
export default Experence;