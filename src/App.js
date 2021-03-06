import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Route} from "react-router-dom";
import "./App.css";
import Home from "./components/index.js";
import Resume from "./components/Resume.js";
import Portfolio from "./components/Portfolio.js";
import Contacts from "./components/Contacts.js";


function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route  path="/resume" component={Resume}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/contacts" component={Contacts}/>
    </>
  );
}

export default App;
