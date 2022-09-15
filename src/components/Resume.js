import React from "react";
import Navbar from "./Navbar";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div>
        <Navbar />
        <div className="text">
          <h1 className="subtitle">Skills</h1>
          <h2 className="subtitle1"></h2>
          <h2 className="subtitle">Systems Programming</h2>
          <h2 className="subtitle1">Languages: C, C++</h2>
          <h2 className="subtitle1">
            operating systems, Kernel development, bit manupulation
          </h2>
          <h2 className="subtitle">Web Programming</h2>
          <h2 className="subtitle1">Languages: php, Javascript</h2>
          <h2 className="subtitle1">Javascript: vanilla, React</h2>
          <h2 className="subtitle1">Php: vanilla, code igniter</h2>
          <h2 className="subtitle">Databases</h2>
          <h2 className="subtitle1">SQL: mysql, postgress</h2>
          <h2 className="subtitle1">NoSQL: mongoDB</h2>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Resume;
