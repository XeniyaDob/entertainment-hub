import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <h1>The Movie recommendation app</h1>

        <Typography component="p" variant="body1">
          What do you want to watch today? This application contains information
          about movies, TV shows. As well as trailers for them.
        </Typography>
        <Link to="/Trending" style={{ textDecoration: "none", color: "white" }}>
          <Button
            variant="text"
            sx={{
              mt: 3,
              mb: 2,
              ml: 1,
              display: "inline",
              height: "50px",
              backgroundColor: "rgb(250, 158, 0)",
              color: "white",
              "&:hover": {
                backgroundColor: "#5a5a5a",
              },
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Landing;
