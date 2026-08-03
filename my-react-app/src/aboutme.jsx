import React, {useState} from 'react';
import img from "./assets/Illustration 20260803.PNG";
export default function aboutme() {
    const [buttonT, setButtonSideT] = useState(true)
    const [buttonF, setButtonSideF] = useState(true)
    const [buttonA, setButtonSideA] = useState(true)
    return (
    <div>
        <h1> heyy! </h1>
        <button onClick = {() => setButtonSideT(!buttonT)}> {buttonT? "tech" : "sjfkdl"} </button>
        <button onClick = {() => setButtonSideF(!buttonF)}> {buttonF? "fandom" : "sjfkdl"} </button>
        <button onClick = {() => setButtonSideA(!buttonA)}> {buttonA? "art" : "sjfkdl"} </button>
        <h2> Helloo ~ </h2>
        <div className = "content_main" style = {{alignItems:"center", justifyContent:"center", gap: "30px", backgroundColor: "rgb(32, 165, 88)" }}>
            <h2> Name: <span> <b> Jyoshita </b></span></h2>
            <h2> Age: <span> <b> 16 </b></span></h2>
            <h2> Likes: <span> <b> ??? </b></span> </h2>
            <img className = "profile_img"src = {img}/>
        </div>
    </div>
);
}