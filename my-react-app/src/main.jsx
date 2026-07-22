import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pgs

import Navbar from './navbar.jsx'
import Home from './home.jsx'
import Projects from './projects.jsx'
import Cool from './cool-stuff.jsx'
import About from './aboutme.jsx'
import './index.css'
const scrollsettings = {
  initial: { opacity: 0, y: 50 }, //the start
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "ease-in-out" }
};
function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <div className = "allPgs">
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/projects" element = {<Projects/>}/>
      <Route path = "/cool-stuff" element = {<Cool/>}/>
      <Route path = "/about-me" element = {<About/>}/>
    </Routes>
  </div>
  
  </BrowserRouter>
);
}

createRoot(document.getElementById('root')).render(
  <App />
);
