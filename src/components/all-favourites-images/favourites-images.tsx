import React from "react";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import Image from "../image/Image";
import "./favourites-images.css";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ImageObject } from "../../types"; // import typu ImageObject

const AllFavouritesImage = () => {
  const { images } = useContext(GlobalContext);
  const favouriteImages = images.filter(
    (image: ImageObject) => image.favourite
  );

  return (
    <div className="all-fimages-container">
      {favouriteImages.map((image: ImageObject) => (
        <Image image={image} key={image.timestamp} />
      ))}
    </div>
  );
};

export default AllFavouritesImage;
