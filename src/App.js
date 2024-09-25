import Contact from "./Component/Contact/Contact";
import Education from "./Component/Education/Education";
import Experence from "./Component/Experence/Experence";
import Maincontain from "./Component/Main_contain/Maincontain";
import Main_contain from "./Component/Main_contain/Maincontain";
import Mywork from "./Component/Mywork/Mywork";
import Nav from "./Component/Nav_bar/Nav";
import Resume from "./Component/Resume/Resume";
import About from "../src/Component/About/About"

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
 
 

function App() {
  return (
     <>   
      <Nav/>
   {/* <Education/> */}
   {/* <Main_contain/> */}
   {/* <Education/> */}
   {/* <Contact/> */}
    
   {/* <Resume /> */}
   {/* <Mywork/> */}
   <Router>
            <Routes>
                 {/* <Route path="/" element={<Home/>} /> */}
                <Route path ="/" element={<Main_contain/>}/>
                <Route path ="/education" element={<Education/>}/>

                
                <Route path ="/contact" element={<Contact/>}/>
                <Route path ="/resume" element={<Resume/>}/>
                <Route path="/mywork" element={<Mywork/>}/>
                <Route path="/experence" element={<Experence/>}/>
               <Route path="/about" element={<About/>}/>

            </Routes>


         </Router>
    </>
 
  );
}

export default App;
