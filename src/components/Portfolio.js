import React from "react";
import Navbar from "./Navbar";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import greektours from '../pictures/greektours.png'
import starwars from '../pictures/starwars.png'
import Welcometotheguitarstore from '../pictures/Welcometotheguitarstore.png';
import crownClothing from '../pictures/crownClothing.png';
import Bookstore from "../pictures/Bookstore.jpg";
import pictureinpicture from "../pictures/pictureinpicture.jpg";
import HandmadeGuitars from "../pictures/HandmadeGuitars1.png";
import musicplayer from '../pictures/musicplayer.png'
import gold from '../pictures/gold.png'
import pong from '../pictures/pong.png'
import bookmark from '../pictures/bookmark.png'
import techno from '../pictures/techno.png'
import restaurants from '../pictures/restaurants.jpg'
const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,

    margin: "5rem auto",
  },
});

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">


           {/*project 1*/ }
           <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
          <CardActionArea   onClick={() => {
                  openInNewTab("https://greekrestaurantsapp.herokuapp.com/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={restaurants}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Restaurants App
                </Typography>
                <Typography variant='subtitle1'>MERN STACK</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 A real world food delivery application. It uses advanced authentication with cookies , geojson to find restaurants near the users prefered location, registration and password recovery emails and different actions that can be performed according to the users role. There is fully functional admin and owner managing dashboard. The api is very extensive and postman was used to test it. The frontend was created using React and Redux for state managment. Styled components were also used, along with advanced css like flexbox. Redux thunk was used for asynchronous requests. Also most of the backend middleware is custom.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://greekrestaurantsapp.herokuapp.com/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>


        {/*project1*/}
        
        
    <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={() => {
                  openInNewTab("https://greektours.herokuapp.com/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={greektours}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  GreekTours 
                </Typography>
                <Typography variant='subtitle1'>MERN STACK</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An app created using React for the front-end and Redux for state managment along with Node.js Express and MongoDB for the back-end. It uses native CSS and CSS-grid. Postman was also used for API testing. It also uses the PayPal API for online payments, and Redux-thunk for asynchronous requests. There are also advanced API sorting. The website offers a complete and interactive user experience. The user can browse and buy tours and also check some interesting services. There is (admin/manager) functionality. The admin can create tours, delete or edit registered users and mark orders as completed. The website is completely mobile responsive.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://greektours.herokuapp.com/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>


      {/*project1*/ }
   <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={() => {
                  openInNewTab("https://guitarshop2.herokuapp.com/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={Welcometotheguitarstore}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Guitarstore 
                </Typography>
                <Typography variant='subtitle1'>MERN STACK</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A full-stack application using the React for the front-end, Redux for state managment, Node.js and express for the back-end , and MongoDB as a database. It also uses the PayPal api and bootstrap. It has real world functionality. The customer can buy products that are in stock, he can leave reviews and see the top  products through the carousel component. When the website manager enters with his credentials, he can add new products, he can update existing ones and add them to stock , he can complete orders with shipping and he can manage users.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://guitarshop2.herokuapp.com/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>




   {/*project1*/ }
   <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={() => {
                  openInNewTab("https://hardcore-villani-eda63f.netlify.app/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={crownClothing}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Crown Clothing Ltd
                </Typography>
                <Typography variant='subtitle1'>REACT REDUX FIREBASE</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A fully functionall fullstack store website , using react, redux, redux thunk ,styled-components,firebase,stripe for online payments, local storage and firestore. 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://hardcore-villani-eda63f.netlify.app/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>




{/*project 2*/}
<Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={() => {
                  openInNewTab("http://swapitestapp2.herokuapp.com/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={starwars}
              />
              <CardContent>
              
                <Typography gutterBottom variant="h5">
                  Star Wars
                </Typography>
                <Typography variant='subtitle1'>REACT, REDUX, CSS grid</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application created because of my love for Star Wars! It uses Redux for state managment and Redux thunk for asynchronous requests.
                  The styling is done with native CSS and CSS grid. It uses hooks for component level state. It also creates CSV files that the users can download. It has many interesting animations.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("http://swapitestapp2.herokuapp.com/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>



      {/*project 2*/}
      <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={() => {
                  openInNewTab("https://reverent-newton-5fa4e4.netlify.app/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={techno}
              />
              <CardContent>
              
                <Typography gutterBottom variant="h5">
                  Animated Techno Website
                </Typography>
                <Typography variant='subtitle1'>REACT</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A company landing page coded with React, React-Hooks and particle.js . It uses animations and interactions to provide a unique user experience. 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://reverent-newton-5fa4e4.netlify.app/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        





















      


        {/*project2*/ }
      <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea  onClick={() => {
                  openInNewTab("https://pedantic-yonath-9ab1fb.netlify.app/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={musicplayer}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Music Player
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A fully functional music player, fully mobile responsive. You can click on the progress bar to listen to a certain part of the specific song.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://pedantic-yonath-9ab1fb.netlify.app/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        
        
        
        
        
        
        {/*project 3*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={() => {
                  openInNewTab("https://lucid-nobel-679b32.netlify.app/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={gold}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Precious Metals value calculator and currency converter
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An app that uses two APIs. It has double functionality. It calculates the current value of gold,silver,platinum and paladium per oz, and it also contains a currency converter with realtime values.Fully mobile responsive.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://lucid-nobel-679b32.netlify.app/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        
        
        {/*project 4*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={() => {
                  openInNewTab(
                    "https://reverent-ardinghelli-f1d6f8.netlify.app/"
                  );
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={Bookstore}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  E-commerce bookstore site
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An fully functional e-commerse store that has front end and back end. It uses local storage to store the users preferences and contentful so a lot more products can be added easily. The cart calculates prices and the user can add and remove products.
                  <br />
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab(
                    "https://reverent-ardinghelli-f1d6f8.netlify.app/"
                  );
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        
        {/*project 5*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} onClick={() => {
                  openInNewTab("https://angry-varahamihira-869d72.netlify.app/");
                }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={HandmadeGuitars}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Handmade guitars e-commerce site
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A fully mobile responsive site, with animations and light mode-dark mode functionality. It uses local storage so the user's preferences will be saved even if the page is refreshed or the browser closed.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://angry-varahamihira-869d72.netlify.app/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        
            {/*project 6*/}
            <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea  onClick={() => {
                  openInNewTab("https://trusting-mestorf-0d8713.netlify.app/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={pong}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  pong game
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A simple pong game with a simple computer A.I. The game starts once the player moves. If the player reaches a score of 7 before the computer, he wins!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://trusting-mestorf-0d8713.netlify.app/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        
        
  
        
        {/*project 8*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea  onClick={() => {
                  openInNewTab("https://inspiring-bartik-b8df68.netlify.app/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={bookmark}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Bookmark App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An App that allows the user to save the bookmarks he wants. Every bookmark will have its own favicon. The user can just click on the bookmark to visit the corresponding website and he can also delete the bookmark very simply. Everything is saved to local storage so the user's choices will remain available to him even if he refreshes or closes the browser.Fully mobile responsive.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://inspiring-bartik-b8df68.netlify.app/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/*project 9*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea   onClick={() => {
                  openInNewTab("https://suspicious-shaw-2c6d3f.netlify.app/");
                }}>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={pictureinpicture}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Locked on screen
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An App that allows the user to have a picture in picture
                  possiblity by saving a screen.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://suspicious-shaw-2c6d3f.netlify.app/");
                }}
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        
        
        
       
        
        
        
        
     
      </Grid>
    </Box>
  );
};

export default Portfolio;
