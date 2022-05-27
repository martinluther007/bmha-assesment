import React from "react";
import { Link } from "react-router-dom";

const PhotoCard = (props: {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}) => {
  return (
    <>
      <div className="card-container">
        <img src={props.url} alt="img1" />
        <div className="card-info">
          <div>Title: {props.title}</div>
          <div>
            <Link to={`/photos/${props.id}`}>more details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoCard;
