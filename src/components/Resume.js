import React from "react";
import Navbar from "./Navbar";
import "./Resume.css";

  

const Resume = () => {
  return (
   
    <div className="resume">
      <div>
        <Navbar />
        <div className="text" >
        <br/>
        <br/>
        <br/>
          <div className="box">
            
          <h1 className="title">Resume</h1>
          </div>
          <br/>
          <h2 className="subtitle">2011</h2>
          <h2 className="subtitle1">Enrolled in the school of humanities in the University of Patras<br/>Department of Philology</h2>
          <h2 className="subtitle">2016</h2>
          <h2 className="subtitle1">B.A in classics and literature,<br/>Linguistics</h2>
          <h2 className="subtitle"> Computer Languages:</h2>
          <h2 className="subtitle1">Javascript, Typescript<br/>Python</h2>
          <h2 className="subtitle"> Skills:</h2>
          <h2 className="subtitle1">HTML , CSS , React, Redux, Vue ,Vuex <br/> Node.js, express, MongoDB <br/> Photoshop</h2>
          <h2 className="subtitle">Languages:</h2>
          <h2 className="subtitle1">Professional English, B2 level of spanish, Basic Russian<br/>Native Greek</h2>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>
    
  );
};

export default Resume;
