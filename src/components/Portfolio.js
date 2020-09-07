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
import Goldcurrency from "../Goldcurrency.jpg";
import Bookstore from "../Bookstore.jpg";
import pictureinpicture from "../pictureinpicture.jpg";
import funnyrobots from "../funnyrobots.jpg";
import landingpage from "../landingpage.jpg";

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
        {/*project 1*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={Goldcurrency}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Precious Metals value calculator and currency converter
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A project I created using two seperate APIs. All the values
                  are in realtime.
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
        {/*project 2*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
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
                  A fully functional e-commerce site using
                  javascipt,contentful,netlify and local Storage.
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
        {/*project 3*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
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
        {/*project 4*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={funnyrobots}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Funny robots and programmer jokes
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An app that uses two APIs. One that provides programmer jokes and one that 
                  makes that text input into voice
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary"
              onClick={() => {
                openInNewTab("https://mystifying-mirzakhani-7569d0.netlify.app/")}}>
                live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*project 5*/ }
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={landingpage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Landing page
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A company landing page with many complex animations. 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://heuristic-murdock-15e38d.netlify.app/");
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
