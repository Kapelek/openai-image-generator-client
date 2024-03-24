import React from "react";
import "./AllImagesContainer.css";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import Image from "../image/Image";
import { useEffect, useState } from "react";
import { ImageObject } from "../../types";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const AllImagesContainer = () => {
  const {
    images
  } = useContext(GlobalContext);
  return (
    <div className="all-images-container">
      {images.map((image:any) => (
        <Image image={image} key={image.timestamp}></Image>
      ))}
    </div>
  );
};

export default AllImagesContainer;
