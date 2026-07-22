import React from 'react';
import {Link } from 'react-router-dom'


export default function Navbar() {
  return (
  <nav>
    <div className = "logo">
        <p> hii</p>
    </div>
    {/*unordered list and list item*/}
    <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/projects">Projects</Link></li>
        <li><Link to = "/cool-stuff">Cool Stuff</Link></li>
        <li><Link to = "/about-me">About me!</Link></li>
    </ul>
  </nav>
);
}
