import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Landing.css";
import image from "../../assets/cinema.jpg";

const Landing = () => {
  return (
    <>
      <div
        className="kenburns-bottom-right"
        style={{
          backgroundImage: `url(${image})`,
          height: "40rem",
          width: "auto",
          backgroundSize: "cover",
          position: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <div className="description">
          <h1
            style={{
              color: "#fff",
            }}
          >
            The Movie recommendation app
          </h1>

          <Typography
            component="p"
            variant="body1"
            sx={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            What do you want to watch today?<br></br> This application contains
            information about movies, TV shows. As well as trailers for them.
          </Typography>
          <Link
            to="/entertainment/trending"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              variant="text"
              sx={{
                mt: 3,
                mb: 2,
                ml: 1,
                display: "inline",
                height: "50px",
                backgroundColor: "rgb(0, 0, 0)",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgb(250, 158, 0)",
                },
              }}
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
