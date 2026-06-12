import { createRoot } from 'react-dom/client'
import './index.css'
const element = (
  <div id = "header_container">
    <h1> Welcome to my Website!</h1>
  </div>
);

createRoot(document.getElementById('root')).render(
  element
);
