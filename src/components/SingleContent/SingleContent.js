import React from "react";
import { img_300 } from "../../config/config";
import "./SingleContent.css";
import Badge from "@mui/material/Badge";

const SingleContent = ({ poster, title, date, media_type, vote_average }) => {
  return (
    <div className="media">
      <Badge
        badgeContent={vote_average}
        color={vote_average > 7 ? "primary" : "secondary"}
      />
      <img className="poster" src={`${img_300}${poster}`} alt={title} />

      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
