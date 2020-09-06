import React from "react";

import Navbar from "../components/Navbar";

class Contacts extends React.Component {
  render() {
    return (
      <div style={{background:'#233',height:'100vh'}}>
        <Navbar />
        <br />
        <br />

        <h1
          style={{
            color: "orangered",
            fontSize: "50px",
            textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          Contact information:
        </h1>
        <br/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{margin:"auto" ,width:"50%",border:"1px solid" ,color:"darkorange",height:"auto",justifyItems:"center"}}>
        <h3 style={{
            color: "tan",
             textAlign:"center",           
            
            fontSize:"40px",
            
          }}>Email:nikos4222@outlook.com.gr</h3>
          <br/>
          <h3 style={{
            textTransform:"capitalize",
            color: "tan",            
            textAlign: "center",
            fontSize:"40px",
            

          }}>phone number: +306942640822</h3>
          
          </div>
        </div>
        <footer style={{textAlign:'center',position:'absolute',bottom:0,color:'tan'}}>This website was created with React,React-Router,Material ui <br/> created by Nikolaos Panagopoulos 2020</footer>
        </div>
    );
  }
}
export default Contacts;
