import React, {useState} from 'react';
import { motion } from 'framer-motion'
import './index.css'
import img from "./assets/Illustration 20260803.PNG";
import About from './aboutme.jsx'
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
var arrayOfStuff = ["Welcome", "j", "my", "corner", "of", "the", "internet"]

export default function Home() {
  const [page, setPage] = useState("home")
  const [logos, isLogos] = useState(true)
  return (
  <>
  { page == "home" && 
  <div class = "overall">
        <motion.section  className="scroll left" {...scrollsettings2}>
            <h1> hey </h1>
            <h1> hey </h1>
        </motion.section>

        <motion.section  id = "header_container" className="scroll" {...scrollsettings}>
            <div style = {{textAlign:"left"}} id = "banner"> 
              <h3 style = {{padding: "0px 30px" }}> name of website</h3>
              <div className = "overall" style = {{paddingLeft:"10px", gap: "30px" }}>
                <img className = "profile_img" src = {img}/>
                <h5 style = {{padding: "0px 50px" }} > helloo welcome to my little corner of the internet! i'm jyoshita a teen that loves art & tech :P and this is my silly mascot crewshon </h5>
              </div>
            </div>
           <div className = "overall" style = {{alignItems:"center", justifyContent:"center", gap: "30px", backgroundColor: "rgb(32, 165, 88)", height: '40vh' }}>
              <button className = {logos ? 'normal' : 'normal clicked'} onClick = {() => isLogos(!logos)}> <img src = {img}/> </button>
                <a className = {logos ? 'anchor-left'  : 'anchor-left clicked' } href = "https://jyoshitanair.itch.io/">Itch.io</a>
                <a className = {logos ? 'anchor-right' : 'anchor-right clicked' } href = "https://github.com/jyoshitanair">Github</a>
                <a className = {logos ? 'anchor-up'    : 'anchor-up clicked' } href = "https://www.webtoons.com/p/community/en/u/_3bgfu">Webtoon</a>
                <a className = {logos ? 'anchor-down'  : 'anchor-down clicked' } href = "https://www.linkedin.com/in/jyoshita-nair-1917a341b/">Linkdin</a>
            </div>
        </motion.section>

        <motion.section  className="scroll right" {...scrollsettings2}>
            <h1> hey </h1>
            <h1> hey </h1>
        </motion.section>
  </div>
  }
  {page == "aboutme" && <About/>}
  </>
)};





/* 



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
*/