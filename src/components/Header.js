import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import me from "../me.jpg";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

//css styles
const useStyles=makeStyles(theme=>({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(1)
    },
    title:{
        color:"tomato"
    },
    subtitle:{
        color:"orangered"
    },
    extrasubtitle:{
        color:"darkorange",
        fontSize:50
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1
    }
}))



const Header = () => {
  const classes=useStyles();
  return (
    <Box className={classes.typedContainer}>
        <Grid container justify="center">
      
      <Avatar
        className={classes.avatar}
        src={me}
        alt="Nikolaos Panagopoulos"
      />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Nikolaos Panagopoulos"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web Designer", "Web Developer","Python Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <br />
      <Typography   className={classes.extrasubtitle} variant="h5">
        <Typed
          strings={["HTML", "CSS", "Javascript", "Python", "React","Photoshop",'Flask']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
