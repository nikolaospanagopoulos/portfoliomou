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
import greektours from "../pictures/greektours.png";
import starwars from "../pictures/starwars.png";
import Welcometotheguitarstore from "../pictures/Welcometotheguitarstore.png";
import pictureinpicture from "../pictures/pictureinpicture.jpg";
import HandmadeGuitars from "../pictures/HandmadeGuitars1.png";
import techno from "../pictures/techno.png";
import restaurants from "../pictures/restaurants.jpg";
import greekPlayer from "../pictures/greekPlayer.PNG";
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
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea
              onClick={() => {
                openInNewTab("https://github.com/nikolaospanagopoulos/chip8");
              }}
            >
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image="https://blog.scottlogic.com/ceberhardt/assets/featured/chip8.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  C++ Chip8 emulator
                </Typography>
                <Typography variant="subtitle1">C++</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An emulator for the chip8 virtual machine of the 1970s. C++ is
                  used along with a lot of bitshifting to simulate all of the
                  instruction set. A lot of games are included like Pong,
                  invaders etc.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://github.com/nikolaospanagopoulos/chip8");
                }}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea
              onClick={() => {
                openInNewTab(
                  "https://github.com/nikolaospanagopoulos/grapeshotClone2"
                );
              }}
            >
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image="https://prod-discovery.edx-cdn.org/media/course/image/62ed92c9-22b6-43a6-a755-0f296d0f64ce-8b3c8aa8f0af.small.jpeg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  C++ grapeshot clone
                </Typography>
                <Typography variant="subtitle1">C++</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A high performance application that analyzes a website and
                  understands its content. For example war,crime, fun etc. It is
                  written completely in C++, following the best and very modern
                  practises. It includes a custom html parser. Mysql is also
                  used. For more details please visit the github link.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab(
                    "https://github.com/nikolaospanagopoulos/grapeshotClone2"
                  );
                }}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea
              onClick={() => {
                openInNewTab(
                  "https://github.com/nikolaospanagopoulos/searchengine"
                );
              }}
            >
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image="https://d1zviajkun9gxg.cloudfront.net/user/prod/2020/01/05/fastpages-892f9602-fc52-42e6-9e81-2ea8f1477f89.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Search engine
                </Typography>
                <Typography variant="subtitle1">Php</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A search engine similar to google, built upon a custom php
                  framework I created. It is fast, with analytics, including a
                  web crawler.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab(
                    "https://github.com/nikolaospanagopoulos/searchengine"
                  );
                }}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea
              onClick={() => {
                openInNewTab(
                  "https://github.com/nikolaospanagopoulos/phpFrameworkWithExtraAuth"
                );
              }}
            >
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image="https://d1zviajkun9gxg.cloudfront.net/user/prod/2020/01/05/fastpages-892f9602-fc52-42e6-9e81-2ea8f1477f89.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Custom Php Framework
                </Typography>
                <Typography variant="subtitle1">Php</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A custom PHP framework, similar to codeigniter. Very light and
                  fast, but with all the functionalities needed for a complete
                  application. User authentication, mail verification and
                  password reset are included
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab(
                    "https://github.com/nikolaospanagopoulos/phpFrameworkWithExtraAuth"
                  );
                }}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea
              onClick={() => {
                openInNewTab("https://greekplayer.netlify.app/demo2.html");
              }}
            >
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={greekPlayer}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Greek Player
                </Typography>
                <Typography variant="subtitle1">Javascript</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A video player created with pure javascript. Not even a single
                  library was used beyond esBuild. A very fast bundler written
                  in google Go. It is written in a completely OOP approach, with
                  emphasis on encapsulation. Functional programming is also used
                  (pure functions, less side effects, immutability of state).
                  The player can play any type of ad (vast, vast-vpaid) and has
                  the google IMA api fully integrated. There are all the
                  functionalities of a modern player and more are being added.
                  This project will continue being updated in the future. The
                  only thing someone needs to use it, is a div and a special Id
                  (for more details check github link).
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab("https://greekplayer.netlify.app/demo2.html");
                }}
              >
                live demo
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openInNewTab(
                    "https://github.com/nikolaospanagopoulos/player8"
                  );
                }}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
