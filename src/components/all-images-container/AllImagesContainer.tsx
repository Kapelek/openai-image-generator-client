import React from "react";
import "./AllImagesContainer.css";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import Image from "../image/Image";

const AllImagesContainer = () => {
  const { images } = UseLocalStorage();

  return (
    <div className="all-images-container">
      {images.map((image, index) => (
        <Image key={index} image={image}></Image>
      ))}
    </div>
  );
};

export default AllImagesContainer;
