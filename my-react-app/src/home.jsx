import React, {useState} from 'react';
import { motion } from 'framer-motion'
import './index.css'
import img from "./assets/Illustration 20260803.PNG";
import github from "./assets/github.png";
import webtoon from "./assets/web.png";
import link from "./assets/link.webp";
import itch from "./assets/itch.png";
import About from './aboutme.jsx'
const scrollsettings = {
  initial: { opacity: 0, y: 100 }, //the start
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "ease-in-out" }
};
const scrollsettings2 = {
  initial: { opacity: 0, y: 100 }, //the start
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay: 0.6, ease: "ease-in-out" }
};
var arrayOfStuff = ["Welcome", "to", "my", "website!"]

export default function Home() {
  const [page, setPage] = useState("home")
  const [logos, isLogos] = useState(true)
  return (
  <>
  { page == "home" && 
  <div>
    <div style = {{textAlign:"left"}} id = "banner"> 
      <motion.section style = {{padding: "0px 30px" }}>
          {arrayOfStuff.map((word, index) => {
              const scrollsettingsdos = {
                initial: { opacity: 0, y: 100 }, //the start
                animate: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0 },
                transition: { duration: 0.3, delay: (0.7 + index*0.2), ease: "ease-in-out" }
              };
              return(
                <>
                  <motion.span style = {{display: "inline-block", marginRight: "1em"}} {...scrollsettingsdos}>
                    <h3> {word} </h3>
                  </motion.span>
                </>
              )
          })}
        </motion.section>
      <div className = "overall" style = {{paddingLeft:"10px", gap: "30px" }}>
      <img className = "profile_img" src = {img}/>
      <h5 style = {{padding: "0px 50px" }} > helloo welcome to my little corner of the internet! i'm jyoshita a teen that loves art & tech :P </h5>
    </div>
    </div>
      <h2> Click this...</h2>
      <div className = "overall" style = {{alignItems:"center", justifyContent:"center", gap: "30px", backgroundColor: "rgb(32, 165, 88)", height: '40vh' }}>
      <button className = {logos ? 'normal' : 'normal clicked'} onClick = {() => isLogos(!logos)}> <img src = {img}/> </button>
      <button className = {logos ? 'anchor-left'  : 'anchor-left clicked' } href = "https://jyoshitanair.itch.io/"> <img src = {itch}/></button>
      <button className = {logos ? 'anchor-right' : 'anchor-right clicked' } href = "https://github.com/jyoshitanair"> <img src = {github}/></button>
      <button className = {logos ? 'anchor-up'    : 'anchor-up clicked' } href = "https://www.webtoons.com/p/community/en/u/_3bgfu">  <img src = {webtoon}/> </button>
      <button className = {logos ? 'anchor-down'  : 'anchor-down clicked' } href = "https://www.linkedin.com/in/jyoshita-nair-1917a341b/"> <img src = {link}/></button>
    </div>
    <motion.section {...scrollsettings}>
        <h2> hi!</h2>
    </motion.section>
    {/*<div>
      <motion.section {...scrollsettings}>
        <h1> a little about me :P </h1>
        <div className="sidebyside">
          <h6 > I'm a highschooler that loves tech, coding, art, and anime! I'm primarily a web and 
          game dev although i'm always tinkering around with new technologies. I also enjoy drawing webtoons
          and animation :3 </h6>
          <button onClick = {() => {setPage("aboutme")}}> more about me? 0////0 </button>
          <img src = {img}/>
        </div>
      </motion.section>
      <motion.section {...scrollsettings}>
        <h1> Tech I've worked with ~ </h1>
        <div className="sidebyside">
          <img style = {{width: 100, height: 100}} src = {img}/>
          <img style = {{width: 100, height: 100}} src = {img}/>
          <img style = {{width: 100, height: 100}} src = {img}/>
          <img style = {{width: 100, height: 100}} src = {img}/>
          <img style = {{width: 100, height: 100}} src = {img}/>
          <img style = {{width: 100, height: 100}} src = {img}/>
          <img style = {{width: 100, height: 100}} src = {img}/>
        </div>
      </motion.section>
      <motion.section {...scrollsettings}>
            <h2> Hi there!oooh</h2>
            <h6> yapity yap yap 3</h6>
      </motion.section>
    </div> */}
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