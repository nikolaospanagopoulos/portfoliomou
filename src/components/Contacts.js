
import React from "react";
import "./Contacts.css";
import Navbar from "../components/Navbar";

import { FaLinkedin,FaGithub,FaFacebookSquare} from 'react-icons/fa'
class Contacts extends React.Component {
  openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  render() {
    return (
      <div className="wallpaper">
        <Navbar />
        <br />

        <div className="box">
          <h1 id='title'>Contact information:</h1>
          <br />

          <div>
            <h3 id='subtitle'>Email:nikos4222@outlook.com.gr</h3>

            <h3 id='subtitle'>phone number: +306942640822</h3>
          </div>
        </div>
        <div className='social-icons'>
          <h3>Social Media:</h3>
        <FaFacebookSquare className='fb' onClick={() => {
                  this.openInNewTab("https://www.facebook.com/nick.panagopoulos1/");
                }}/>
        <FaLinkedin className='linkdin'/>
        <FaGithub className='git'/>
        </div>
        <footer>
          This website was created with React, React-Router, Material UI
          created by Nikolaos Panagopoulos 2020
        </footer>
      </div>
    );
  }
}
export default Contacts;
