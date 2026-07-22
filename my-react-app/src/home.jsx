import React, {useState} from 'react';
import { motion } from 'framer-motion'
import './index.css'
import img from "./assets/hero.png";
import About from './aboutme.jsx'
const scrollsettings = {
  initial: { opacity: 0, y: 50 }, //the start
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "ease-in-out" }
};
var arrayOfStuff = ["Welcome", "j", "my", "corner", "of", "the", "internet"]

export default function Home() {
  const [page, setPage] = useState("home")
  return (
  <>
  { page == "home" && 
  <>
      <div id="header_container">
        <h1> I'm <span> <em><b> Jyoshita </b></em></span></h1>
        <motion.section>
          {arrayOfStuff.map((word, index) => {
              const scrollsettingsdos = {
                initial: { opacity: 0, y: 100 }, //the start
                animate: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0 },
                transition: { duration: 0.3, delay: (0.2 + index*0.2), ease: "ease-in-out" }
              };
              return(
                <>
                  <motion.span style = {{display: "inline-block", marginRight: "2em"}} {...scrollsettingsdos}>
                    <h1> {word} </h1>
                  </motion.span>
                </>
              )
          })}
        </motion.section>
      </div>
      <div id="content_main">
        <motion.section className="scroll" {...scrollsettings}>
          <h1> hihihihi</h1>
          <div className="sidebyside">
          <h6 > I'm a highschooler that loves tech, coding, art, and anime! I'm primarily a web and 
          game dev although i'm always tinkering around with new technologies. I also enjoy drawing webtoons
          and animation :3 </h6>
          <button onClick = {() => {setPage("aboutme")}}> more about me? 0////0 </button>
          <img src = {img}/>
          </div>
        </motion.section>
        <motion.section className="scroll" {...scrollsettings}>
          <h1> Tech I've worked with ~ </h1>
          <div className="sidebyside">
            <img style = {{width: 100, height: 100}}src = {img}/>
            <img style = {{width: 100, height: 100}}src = {img}/>
            <img style = {{width: 100, height: 100}}src = {img}/>
            <img style = {{width: 100, height: 100}}src = {img}/>
            <img style = {{width: 100, height: 100}}src = {img}/>
            <img style = {{width: 100, height: 100}}src = {img}/>
            <img style = {{width: 100, height: 100}}src = {img}/>
          </div>
        </motion.section>
        <motion.section className="scroll" {...scrollsettings}>
          <h2> Hi there!oooh</h2>
          <h6> yapity yap yap 3</h6>
        </motion.section>
      </div>
      </>
      }
      {page == "aboutme" && <About/>}
  </>
);
}