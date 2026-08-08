import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './index.css'
import github from "./assets/github.png";
import itch from "./assets/itch.png";

///FOR IMGS!!
import star from "./assets/star.PNG";
import cold from "./assets/cold.png";
import cat from "./assets/cover.png";
import ren from "./assets/ren.png";

const scrollsettings = {
  initial: { opacity: 0, y: 50 }, //the start
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "ease-in-out" }
};
var game_projects = [
  {
    git: "https://github.com/jyoshitanair/star-theif",
    itch: "https://jyoshitanair.itch.io/star-theif",
    name: "STAR THEIF!",
    description: "game des!",
    img: star,
    categories: ["Godot"]
  },
  {
    git: "https://github.com/jyoshitanair/text-game",
    itch: "https://jyoshitanair.itch.io/cat-mayhem",
    name: "Cat Mayhem",
    description: "game des!",
    img: cat
  },
  {
    git: "https://github.com/jyoshitanair/visual-novel",
    itch: "https://jyoshitanair.itch.io/love-on-the-menu",
    name: "Love on The Menu",
    description: "game des!",
    img: ren
  },
  {
    git: "https://github.com/jyoshitanair/duck_waddle",
    itch: "https://jyoshitanair.itch.io/duck-waddle",
    name: "Duck Waddle",
    description: "game des!",
    img: cold
  },
   {
    git: "https://github.com/jyoshitanair/fish-game",
    itch: "https://jyoshitanair.itch.io/fish",
    name: "Fish",
    description: "game des!",
    img: cold
  },
  {
    git: "https://github.com/jyoshitanair/escape_room",
    itch: "https://jyoshitanair.itch.io/escape-the-school",
    name: "Escape The School",
    description: "game des!",
    img: star
  },
  {
    git: "https://github.com/jyoshitanair/MonsterManor",
    itch: "https://jyoshitanair.itch.io/monster-manor",
    name: "Monster Manor",
    description: "game des!",
    img: star
  },
]

export default function Projects() {
  const [search, setSearch] = useState("");
  useEffect(() => {
    
  }, [search])
  function refindnodes(search) {
    const filtered = game_projects.
    var them = search.trim().toLowerCase()
    const nodes = game_projects.map((item, key) => {
      if ((search.trim() !== "") && !item.name.trim().toLowerCase().includes(them) || item.description.trim().toLowerCase().includes(them)){
        console.log("RETURNING")
        return
      }
      console.log("MAKE IT")
      let even = false
      if (key % 2 === 0){
        even = true
      }else{
      even = false
      }
      return (
        <motion.section style = {{backgroundColor: "rgb(132, 113, 157)", flexDirection: even? "row" : "row-reverse"}}className="scroll" key = {key} {...scrollsettings}>
          <img className = "large" src = {item.img}/>
          <div style = {{display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column", padding: "30px 50px", width:"100%", textAlign:"left"}}>
            <h2 style = {{position: "relative", fontWeight: "bold", fontSize: "40px", width:"100%", display:"block"}}> {item.name}</h2>
            <h6> {item.description}</h6>
            <div style = {{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", gap : "40px"}}>
              <a href = {item.git}> <img className = "small" src = {github}/> </a>
              <a href = {item.itch}> <img className = "small" src = {itch}/> </a>
            </div>
          </div>
        </motion.section>
      )
    });
    return nodes;
  }
  return (
    <>
      <h1> projects</h1>
      <input
      type = "text"
      placeholder = "Search Project by title..."
      value = {search}
      onChange = {(e) => {setSearch(e.target.value)}}
      />
      <div className = "projects">
        {refindnodes(search)}
      </div>
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
  </>
);
}