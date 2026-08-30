import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import './index.css'
const scrollsettings = {
  initial: { opacity: 0, y: 100 }, //the start
  animate: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "ease-in-out" }
};
const scrollsettings2 = {
  initial: { opacity: 0, y: 100 }, //the start
  animate: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay: 0.6, ease: "ease-in-out" }
};
function App() {
  return (
    <BrowserRouter>
      <div class = "overall">
          <motion.section  className="scroll left" {...scrollsettings2}>
              <h1> hey </h1>
              <h1> hey </h1>
          </motion.section>

          <motion.section  id = "header_container" className="scroll" {...scrollsettings}>
            <div className = "allPgs">
              <Routes>
                  <Route path = "/" element = {<Home/>}/>
                  <Route path = "/projects" element = {<Projects/>}/>
                  <Route path = "/cool-stuff" element = {<Cool/>}/>
                  <Route path = "/about-me" element = {<About/>}/>
                  <Route path = "/speeches" element = {<Speeches/>}/>
                  <Route path = "/art" element = {<Art/>}/>
                  <Route path = "/silly-notes" element = {<Blog/>}/>
              </Routes>
            </div>
          </motion.section>

          <motion.section  className="scroll right" {...scrollsettings2}>
                <Navbar/>
          </motion.section>
    </div>
  </BrowserRouter> 
);
}

createRoot(document.getElementById('root')).render(
  <App />
);
