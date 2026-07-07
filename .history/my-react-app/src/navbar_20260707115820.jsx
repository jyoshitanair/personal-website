import React from 'react';
import {Link } from 'react-router-dom'


export default function Navbar() {
  return (
  <nav>
    <div className = "logo">
        <p> hii</p>
    </div>
    {//unordered list and list item}
    <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/about">Home</Link></li>
    </ul>
  </nav>
);
}
