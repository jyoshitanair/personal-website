import React from 'react';
import {Link } from 'react-router-dom'
import logo from "./assets/logo.PNG";
import clipboard from "./assets/clipboard.PNG";
export default function Navbar() {
  return (
  <nav className = "navbar">
    <div className = "logo">
        <h3 style = {{paddingTop: "20cqw", fontWeight: "bold", fontSize: "15cqw",color: "brown", width:"100%", display:"block", fontFamily: "math"}}> crewshon </h3>
        <img src = {logo}/>
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
        <li><Link to = "/contact">Contact</Link></li>
    </ul>
  </nav>
);
}
