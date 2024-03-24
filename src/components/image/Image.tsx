import React, { useState, useEffect, useContext } from "react";
import { ImageObject } from "../../types";
import {
  MdFavoriteBorder,
  MdFavorite,
  MdDelete,
  MdEditNote,
} from "react-icons/md";
import "./Images.css";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import { GlobalContext } from "../../contexts/GlobalContext";
import { timeConverter } from "../../tools/TimeConverter";

interface ImageProps {
  image: ImageObject;
}

const Image = ({ image }: ImageProps) => {
  const { toggleShowOverlay, toggleEditActive, setOverlayImage, toggleFavourite, deleteImage } =
    useContext(GlobalContext);
  const [isFavourited, setIsFavourited] = useState(image.favourite);

  useEffect(() => {
    setIsFavourited(image.favourite);
  }, [image.favourite]);

  const handleAddToFavorites = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    toggleFavourite(image.timestamp);
  };

  const handleDeleteImage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    deleteImage(image.timestamp);
  };

  const openOverlay = (image: ImageObject) => {
    toggleShowOverlay();
    setOverlayImage(image);
  };

  return (
    <div className="image" onClick={() => openOverlay(image)}>
      <img src={image.src} alt={image.title} />
      <div className="image-top-hover-container">
        <button
          className="image-top-hover-container-btn-delete"
          onClick={handleDeleteImage}
        >
          <MdDelete style={{ color: "white" }} />
        </button>
        <div className="image-top-hover-container-info">
          <h2 className="image-top-hover-container-info-title">
            {image.title}
          </h2>
          <p className="image-top-hover-container-info-time">
            {timeConverter(image.timestamp)}
          </p>
        </div>
      </div>
      <div className="image-btns-container">
        <button
          className="image-low-btn image-low-btn-edit"
          onClick={toggleEditActive}
        >
          <MdEditNote style={{ color: "white" }} />
        </button>
        <button
          className={
            isFavourited
              ? "image-low-btn image-low-btn-favourite-active"
              : "image-low-btn image-low-btn-favourite"
          }
          onClick={handleAddToFavorites}
        >
          {isFavourited ? (
            <MdFavorite style={{ color: "white" }} />
          ) : (
            <MdFavoriteBorder style={{ color: "white" }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Image;
