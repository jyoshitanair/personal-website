import React from 'react';
import {Link } from 'react-router-dom'
import img from "./assets/Illustration 20260803.PNG";

export default function Navbar() {
  return (
  <nav className = "navbar">
    <div className = "logo">
        <h3 style = {{fontWeight: "bold", fontSize: "30px", width:"100%", display:"block", fontFamily: "math"}}> crewshon </h3>
        <img src = {img}/>
    </div>
    {/*unordered list and list item*/}
    <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/projects">Projects</Link></li>
        <li><Link to = "/cool-stuff">Cool Stuff</Link></li>
        <li><Link to = "/about-me">About me!</Link></li>
        <li><Link to = "/speeches">Speeches</Link></li>
        <li><Link to = "/art">Art</Link></li>
        <li><Link to = "/silly-notes">Silly notes</Link></li>
        <li><Link to = "/message">Message</Link></li>
    </ul>
  </nav>
);
}
