import React from 'react';
import { motion } from 'framer-motion'
import './index.css'
import img from "./assets/hero.png";
const scrollsettings = {
  initial: { opacity: 0, y: 50 }, //the start
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "ease-in-out" }
};
export default function Home() {
  return (
  <>
    <div id="header_container">
      <h1> Welcome to my corner of the internet</h1>
      <h1> I'm <span> <em><b> Jyoshita </b></em></span></h1>
    </div>
    <div id="content_main">
      <motion.section className="scroll" {...scrollsettings}>
        <h1> welp. hello?</h1>
        <div className="sidebyside">
        <h6 > I'm a highschooler that loves tech, coding, art, and anime! I'm primarily a web and 
        game dev although i'm always tinkering around with new technologies. I also enjoy drawing webtoons
        and animation :3 </h6>
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
);
}