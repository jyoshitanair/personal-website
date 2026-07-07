import { createRoot } from 'react-dom/client'
import {Link } from 'react-router-dom'


function App() {
  return (
  <<BrowserRouter>
  <Navbar/>
  <div className = "allPgs">
    <Routes>
      <Route path = "/" element = {<Home/>}/>
    </Routes>
  </div>
  
  </BrowserRouter>>
);
}

createRoot(document.getElementById('root')).render(
  <App />
);
