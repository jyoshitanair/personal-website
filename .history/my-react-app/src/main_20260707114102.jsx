import { createRoot } from 'react-dom/client'
import { Navvar
import './index.css'
const scrollsettings = {
  initial: { opacity: 0, y: 50 }, //the start
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "ease-in-out" }
};
function App() {
  return (
  <>
    <div id="header_container">
      <h1> Welcome to my Website!</h1>
    </div>
    <div id="content_main">
      <motion.section className="scroll" {...scrollsettings}>
        <h2> Hi there!</h2>
        <h6> yapity yap yap 1</h6>
      </motion.section>
      <motion.section className="scroll" {...scrollsettings}>
        <h2> Hi there!boohhh</h2>
        <h6> yapity yap yap 2</h6>
      </motion.section>
      <motion.section className="scroll" {...scrollsettings}>
        <h2> Hi there!oooh</h2>
        <h6> yapity yap yap 3</h6>
      </motion.section>
    </div>
  </>
);
}

createRoot(document.getElementById('root')).render(
  <App />
);
