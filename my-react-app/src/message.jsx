import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom'
import img from "./assets/Illustration 20260803.PNG";
import { motion } from 'framer-motion'

//supabase
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

import speech from "./assets/speech.PNG";
import tech from "./assets/tech.PNG";
import art from "./assets/art.PNG";

const scrollsettings = {
  initial: { opacity: 0, y: 50 }, //the start
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8, ease: "ease-in-out" }
}; 

export default function Message() {
  const imgs = [speech, tech, art]
  const[text, setText] = useState("")
  const[processing, setProcessing] = useState(false)
  const[data1, setData] = useState([])

  async function refindnodes() {
    const {data} = await supabase.from("messages").select('*').order('id', {ascending:true})
    if(data){
      setData(data)
    }else{
      setData([])
    }
  
  };
  useEffect(() => {
    refindnodes();
  },[]);

  async function addMessage(name){
    setProcessing(true)
    const randi = Math.floor(Math.random() * imgs.length)
    const value = imgs[randi]
    const {data} = await supabase.from("messages").insert(
      [{
        message: text,
        img: value,
      }]
    )
    setProcessing(false)
    refindnodes();
  }
  return (
    <div>
        <h1> Contact</h1>
        <h2> Leave a message! </h2>
        <input
        maxLength={20}
        type = "text"
        placeholder = "Enter Message"
        value = {text}
        onChange = {(e) => {setText(e.target.value)}}
        />
        <button disabled = {processing} onClick={()=> {addMessage(text)}}> done</button>
        <div className = "grid">
          {data1.map((item, key) => {
            return(
              <motion.section style = {{backgroundColor: "rgba(132, 113, 157, 0.53)", flexDirection:"column", width: "100%"}} className="scroll gridItem" key = {key} {...scrollsettings}>
                <img className = "large" src = {item.img}/>
                <div style = {{display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column", paddingLeft:"35px",paddingTop: "10px", width:"100%", textAlign:"left"}}>
                  <h2 style = {{position: "relative", fontWeight: "bold", fontSize: "20px", width:"100%", display:"block"}}> {item.message}</h2>
                </div>
              </motion.section>
            );
          })}
        </div>
        <h2> Or if you wanna contact me... </h2>
    </div>
  );
}
