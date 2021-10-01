import "./imageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const image = props.images.map((data) => {
    return <ImageCard src={data} key={data.id} />;
  });
  return <div className="image-list">{image}</div>;
};

export default ImageList;
