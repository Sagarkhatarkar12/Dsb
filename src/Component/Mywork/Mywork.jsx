import React from "react";
import "./Mywork.css"
import img from "../image/name.jpeg"
import imgc from "../image/aus.jpg"
import imge from "../image/car.jpg"
function Mywork(){
    return (
        <>
        <div className="Mywork">

            <h1 className="h">My Work</h1>
            <div className="Card-my">
                <div className="img">
                    <img src={imge} alt="" />
                </div>
                <div className="description">
                  
                    <h1 className="des-heading">Empowering Communities through Health and Education </h1>
                    <p className="des-para">I’m Deepak Khatarkar, currently serving as a Community Health Officer (CHO) in Sirbit village, Chainpur block, Bihar. Our goal is to create a healthy and informed community through a series of health and educational interventions.

🔹 Health Initiatives: We recently conducted a session on Ayushman Arogya Mandir (AAM), raising awareness about the benefits of health schemes available to the villagers. It’s crucial that everyone understands how to access these resources for better healthcare.

🔹 Educational Guidance: Education is the key to a brighter future. I had the privilege of engaging with the children in the village, emphasizing the importance of proper documentation for schooling. We also discussed how to make informed decisions while choosing subjects in the 10th class, as these choices can significantly impact their future career paths.

Together, we can build a healthier, more informed community. #CommunityHealth #EducationAwareness #AyushmanArogyaMandir #Bihar

</p>
                </div>
            </div>
            <div className="Card-my">
                <div className="img">
                    <img src={imgc} alt="" />
                </div>
                <div className="description">
                  
                    <h1 className="des-heading">Empowering Health with ABHA Cards! 🏥</h1>
                    <p className="des-para">

I’m thrilled to share that we recently organized a camp in Sirbit village, Chainpur block, Bihar, to help residents create their ABHA (Ayushman Bharat Health Account) cards. The ABHA card is a crucial step towards building a digital health ecosystem, making healthcare more accessible and efficient for everyone.

With an ABHA card, individuals can:
<li>Access their digital health records anytime, anywhere.</li>
 <li>Avail benefits of various government healthcare schemes.</li>
<li> Easily share their health information with healthcare providers for better treatment.</li>


It's heartening to see the community come together to embrace digital health solutions. Let’s continue to spread awareness and ensure that everyone has access to quality healthcare!

#DigitalHealth #ABHACard #AyushmanBharat #HealthcareForAll #CommunityHealth </p>
                </div>
            </div> 
        </div>
        </>
    )
}
export default Mywork;