import React from 'react';

export default function Navbar() {
  return (
    <div>
        <h1> Speeches</h1>
        <h2> So uh...you want to read my speeches?</h2>
        <h2> Infos: </h2>
        <div>
            <h6> Our Best Friends </h6>
            <iframe className = "googledoc" src = "https://docs.google.com/document/d/1wdrWfXJx7WgoMEotWyQkp0_91Pcc21zNbXXCTMa2R94/preview" title = "Speech" allowFullScreen></iframe>
        </div>
        <div>
            <h6> The Genetic Lottery </h6>
            <iframe className = "googledoc" src = "https://docs.google.com/document/d/1-HL2rsIvg_ogTtzAwKj_HBaROKQBBIJqY8xSG4vxUOc/preview" title = "Speech" allowFullScreen></iframe>
        </div>
        <h2> Humerous Interpretation: </h2>
        <div>
            <h6> The Other Guys </h6>
            <iframe className = "googledoc" src = "https://docs.google.com/document/d/1gzawcD-6c6YeugKKpCHdD_6adosTczOQ5xwbU-iuyMw/preview" title = "Speech" allowFullScreen></iframe>
        </div>
    </div>
    );
}