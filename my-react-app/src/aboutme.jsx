import React, {useState} from 'react';
import img from "./assets/Illustration 20260803.PNG";
import speech from "./assets/speech.PNG";
import me from "./assets/me.PNG";
import art from "./assets/art.PNG";
import tech from "./assets/tech.PNG";
export default function aboutme() {
    const [buttonT, setButtonSideT] = useState(true)
    const [buttonF, setButtonSideF] = useState(true)
    const [buttonA, setButtonSideA] = useState(true)
    return (
    <div>
        <h1> heyy! </h1>
        <div className = "button_holder">
            <button style = {{fontSize: `${buttonT ? "larger": "3cqw"}`, textAlign: `${buttonT ? "center": "left"}` }} className = "button_img" onClick = {() => setButtonSideT(!buttonT)}> {buttonT? "Speech" : "Certified Yapper! I do Info and Spar mainly - and I've even got up to the state level and won multiple online and TCFL competitions! Check out my"} {buttonT? "": <a href = "">Speeches Page</a>} {!buttonT? "": <img src = {speech}/>} </button>
            <button style = {{fontSize: `${buttonF ? "larger": "3cqw"}`, textAlign: `${buttonF ? "center": "left"}` }} className = "button_img" onClick = {() => setButtonSideF(!buttonF)}> {buttonF? "Art" : "I love to draw and animate my ocs! I have an art yt channel and sometimes draw webtoons! Check out my "} {buttonF? "": <a href = "">Art Page</a>}  {!buttonF? "": <img src = {art}/>}</button>
            <button style = {{fontSize: `${buttonA? "larger": "3cqw"}`, textAlign: `${buttonA ? "center": "left"}` }} className = "button_img" onClick = {() => setButtonSideA(!buttonA)}> {buttonA? "Tech!" : "I use Godot, React, Arduino, and Supabase! also! I'm member of Hack Club! Check out my"} {buttonA? "": <a href = "">Projects Page!</a>} {!buttonA? "": <img src = {tech}/>} </button>
        </div>
        <h2> Helloo ~ </h2>
        <div className = "content_main" style = {{flexDirection: "row", alignItems:"center", justifyContent:"center", gap: "30px", backgroundColor: "rgb(32, 165, 88)" }}>
            <div>
                <h2> Hellooo~ I'm <span> <b> Jyoshita </b></span></h2>
                <h2> Im a teen who loves <span> <b> tech </b></span></h2>
                <h2> Want to leave a message? <span> <b> Click me! </b></span> </h2>
            </div>
            <img className = "change" src = {me}/>
        </div>
    </div>
);
}