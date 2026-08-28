import React, {useState} from 'react';
import img from "./assets/Illustration 20260803.PNG";
import speech from "./assets/speech.PNG";
import me from "./assets/me.PNG";
import art from "./assets/art.PNG";
export default function aboutme() {
    const [buttonT, setButtonSideT] = useState(true)
    const [buttonF, setButtonSideF] = useState(true)
    const [buttonA, setButtonSideA] = useState(true)
    return (
    <div>
        <h1> heyy! </h1>
        <div className = "button_holder">
            <button style = {{fontSize: `${buttonT ? "larger": "smaller"}` }} className = "button_img" onClick = {() => setButtonSideT(!buttonT)}> {buttonT? "Speech" : "Certified Yapper. :P I like to do Informative Speaking(main) which is like yapping + artistic boards and SPAR(side) which is spontaneous speaking argumentation. I've even got up to the state level and won multiple online and TCFL competitions!"} {!buttonT? "": <img src = {speech}/>} </button>
            <button style = {{fontSize: `${buttonF ? "larger": "smaller"}` }} className = "button_img" onClick = {() => setButtonSideF(!buttonF)}> {buttonF? "Art" : "I love to doodle and animate - especially my ocs! Feel free to reach out if you ever want something drawn. I have an art yt channel and back in the day I used to write/draw webtoons! Check out my "} {buttonF? "": <a href = "">Art Page</a>}  {!buttonF? "": <img src = {art}/>}</button>
            <button style = {{fontSize: `${buttonA? "larger": "smaller"}` }} className = "button_img" onClick = {() => setButtonSideA(!buttonA)}> {buttonA? "Tech!" : "I'm pretty good with Godot Games, React, and Supabase! I also enjoy making hardware with arduino and I'm a member of Hack Club!"} {buttonA? "": <a href = ""> Check out my Projects Page! </a>} {!buttonA? "": <img src = {art}/>} </button>
        </div>
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