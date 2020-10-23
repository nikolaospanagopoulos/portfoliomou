import React, {useState} from "react";
import me2 from '../me2.jpg';

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon
} from "@material-ui/core";
import {
  
  
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import DehazeIcon from '@material-ui/icons/Dehaze';


import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {Link} from "react-router-dom";

//css styles
//helps us change material ui default styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem:{
    color:"tan"
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath:"/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath:"/contacts"
  },
];

const Navbar = () => {
  const [state,setState]=useState({
    right:false
  })
  const toggleSlider=(slider,open)=>()=>{
    setState({...state,[slider]:open})
  }
  const sideList=slider=>(
    <Box className={classes.menuSliderContainer} component="div"
    onClick={toggleSlider(slider,false)}
    >
        <Avatar
          className={classes.avatar}
          src={me2}
          alt="Nikolaos Panagopoulos"
        />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
              <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
              </ListItemIcon >
              <ListItemText primary={lsItem.listText} className={classes.listItem} />
            </ListItem>
          ))}
        </List>
      </Box>
  )
  const classes = useStyles();
  return (
    <>
      
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton  onClick={toggleSlider("right",true)}>
              <DehazeIcon style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobilRightMenuSlider 
            anchor="right"
            open={state.right}
            onClose={toggleSlider("right",false)} >
            
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
