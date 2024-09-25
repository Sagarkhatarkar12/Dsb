import React from "react";
import "./about.css"
import  im from "../image/b.jpeg"
function About(){
    return (
        <div className="about-container">
            <div className="about-left">
            <h1>About me</h1>
            <p>🌟 Reflecting on My Journey as a Gandhi Fellow with Piramal Swasthya 🌟

I am grateful for the incredible journey I have had over the past 23 months, working as a Gandhi Fellow at Piramal Swasthya (Digital Bharat Collaborative). This experience has been transformative, both personally and professionally, allowing me to contribute towards impactful change in Bihar's health sector.

🚀 Key Highlights:

Digital Capacity Building: Facilitated 25 workshops for over 500+ ASHAs and 120+ ANMs across 7 blocks, empowering them with digital tools and technology.
Community Engagement: Successfully executed district-level campaigns, resulting in the creation of 2800+ Ayushman Bharat Health Account (ABHA) cards and raising awareness among 4500+ people.
Innovation in Healthcare: Introduced the SCAN and SHARE token generation system at District Hospital Kaimur, generating 5000+ tokens in just 4 months, significantly improving the hospital's operational efficiency.
Health Awareness Camps: Organized primary health care camps in remote areas, increasing outpatient counts by 20% and NCD counts by 15% in just 3 months.
💡 This journey has equipped me with robust skills in program management, stakeholder engagement, and grassroots mobilization. I have been privileged to collaborate with district and block-level officials, frontline health workers, and community members to strengthen the health system and bring sustainable change.

🔍 I am now looking forward to new challenges where I can leverage my skills and passion for community development and healthcare innovation to make a difference.

📢 If you have any opportunities or suggestions for me, feel free to connect or reach out!

#Healthcare #GandhiFellowship #PiramalSwasthya #CommunityDevelopment #ProgramManagement #DigitalHealth #SocialImpact #Leadership

</p>
            </div>
            <div className="about-right">
                <div className="about-img">
                    <img src={im} alt="" />
                </div>
            </div>
        </div>
    )
}
export default About;
