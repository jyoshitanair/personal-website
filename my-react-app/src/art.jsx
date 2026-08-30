import React from 'react';
import star from "./assets/star.PNG";
import { motion } from 'framer-motion'
//SUPABASE
//supabase
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const scrollsettings = {
  initial: { opacity: 0, y: 50 }, //the start
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8, ease: "ease-in-out" }
};
export default function Navbar() {
  var art_projects = [
    {
      name: "STAR THEIF!",
      description: "game des!",
      img: star
    },
    {
      name: "STAR THEIF!",
      description: "game des!",
      img: star
    },
    {
      name: "STAR THEIF!",
      description: "game des!",
      img: star
    },
    {
      name: "STAR THEIF!",
      description: "game des!",
      img: star
    },
  ]
    function refindnodes() {
    const nodes = art_projects.map((item, key) => {
      let even = false
      if (key % 2 === 0){
        even = true
      }else{
      even = false
      }
      return (
        <motion.section style = {{backgroundColor: "rgba(132, 113, 157, 0.53)", flexDirection: even? "column" : "column-reverse", width: "100%"}} className="scroll gridItem" key = {key} {...scrollsettings}>
          <img className = "large" src = {item.img}/>
          <div style = {{display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column", paddingLeft:"35px",paddingTop: "10px", width:"100%", textAlign:"left"}}>
            <h2 style = {{position: "relative", fontWeight: "bold", fontSize: "20px", width:"100%", display:"block"}}> {item.name}</h2>
            <h6> {item.description}</h6>
            <button onClick={updateSupa()}> I like this :D </button>
          </div>
        </motion.section>
      )
    });
    return nodes;
  }
  return (
    <div>
      <h1> Art!</h1>
      <div className = "grid">
        {refindnodes()}
      </div>
    </div>
  );
}