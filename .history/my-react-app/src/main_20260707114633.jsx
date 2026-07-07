import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
  
  <div className = "allPgs">
    <Routes>
      <Route path = "/" element = {<Home/>}/>
    </Routes>
  </div>
  
  </BrowserRouter>
);
}

createRoot(document.getElementById('root')).render(
  <App />
);
