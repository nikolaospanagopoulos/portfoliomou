import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";


class Home extends React.Component {
  render() {
    return (
      
      <div>
        <Navbar />
        <Header />
        <Particles 
              params={{
            		particles: {
                  number:{
                    value:45,
                    density:{
                      enable:true,
                      value_area:900
                    }

                  },
                  shape:{
                    type:"circle",
                    stroke:{
                      width:1,
                      color:"tomato"
                    }
                  },
                  size:{
                    value:8,
                    random:true,
                    anim:{
                      enable:true,
                      speed:20,
                      size_min:0.1,
                      sync:true
                    }
                  }      
                   
                               

                                
                       
            				}
            			}
            		
                
                } 
        />
        </div>
      
    );
  }
}

export default Home;
