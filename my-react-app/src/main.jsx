import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import { motion } from 'framer-motion'

//pgs

import Navbar from './navbar.jsx'
import Home from './home.jsx'
import Projects from './projects.jsx'
import Cool from './cool-stuff.jsx'
import About from './aboutme.jsx'
import Speeches from './speeches.jsx'
import Blog from './blog.jsx'
import Art from './art.jsx'
import Message from './message.jsx'
import './index.css'
import speech from "./assets/speech.PNG";
import tech from "./assets/tech.PNG";
import art from "./assets/art.PNG";
const scrollsettings = {
  initial: { opacity: 0, y: 100 }, //the start
  animate: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8, ease: "ease-in-out" }
};
const scrollsettings2 = {
  initial: { opacity: 0, y: 100 }, //the start
  animate: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8, delay: 0.6, ease: "ease-in-out" }
};
function Rerender(){
  const location = useLocation();
  return(
    <div class = "overall">
            <motion.section  key = {`left-${location.pathname}`} className="scroll left" {...scrollsettings2}>
                <img className = "side_img" src ={speech} />
                <img className = "side_img" src ={art} />
                <img className = "side_img" src ={tech} />
                <h2> you've made it this far </h2>
                <h2> ... </h2>
                <h2> don't give up now </h2>
                <h2>  </h2>
                <h2> the end is near </h2>
                <h2> wow. what a waste of time. </h2>
            </motion.section>

            <motion.section  key = {`middle-${location.pathname}`} id = "header_container" className="scroll" {...scrollsettings}>
              <div className = "allPgs">
                <Routes>
                    <Route path = "/" element = {<Home/>}/>
                    <Route path = "/projects" element = {<Projects/>}/>
                    <Route path = "/cool-stuff" element = {<Cool/>}/>
                    <Route path = "/about-me" element = {<About/>}/>
                    <Route path = "/speeches" element = {<Speeches/>}/>
                    <Route path = "/art" element = {<Art/>}/>
                    <Route path = "/silly-notes" element = {<Blog/>}/>
                    <Route path = "/contact" element = {<Message/>}/>
                </Routes>
              </div>
            </motion.section>

            <motion.section  key = {`right-${location.pathname}`} className="scroll right" {...scrollsettings2}>
                  <Navbar/>
            </motion.section>
      </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Rerender/>
    </BrowserRouter> 
);
}

createRoot(document.getElementById('root')).render(
  <App />
);
