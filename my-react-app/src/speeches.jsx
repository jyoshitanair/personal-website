import React from 'react';

export default function Navbar() {
  return (
    <div>
        <h1> Speeches</h1>
        <h2> So uh...you want to read my speeches?</h2>
        <h2> Infos: </h2>
        <div>
            <h2> Our Best Friends </h2>
            <iframe className = "googledoc" src = "https://docs.google.com/document/d/1wdrWfXJx7WgoMEotWyQkp0_91Pcc21zNbXXCTMa2R94/preview" title = "Speech" allowFullScreen></iframe>
        </div>
    </div>
    );
}