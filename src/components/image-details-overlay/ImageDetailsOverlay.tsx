import "./ImageDetailsOverlay.css";
import { IoMdClose } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { timeConverter } from "../../tools/TimeConverter";
import { useState, useEffect } from "react";

const ImageDetailsOverlay = () => {
  const {
    showOverlay,
    toggleShowOverlay,
    editActive,
    toggleEditActive,
    setEditActiveToFalse,
    image,
    handleTitleChange,
    handleDescriptionChange,
    title,
    description,
    handleConfirm,
    toggleFavourite,
    deleteImage,
    isFavourited,
    setIsFavourite,
  } = useContext(GlobalContext);

  const handleToggleFavorites = () => {
    toggleFavourite(image.timestamp);
    setIsFavourite(() => !isFavourited);
  };

  const handleDelete = () => {
    deleteImage(image.timestamp);
    closeOverlay();
  };

  const closeOverlay = () => {
    setEditActiveToFalse();
    toggleShowOverlay();
  };

  const confirmChanges = () => {
    toggleEditActive();
    handleConfirm();
  };

  return (
    <div
      className={
        showOverlay
          ? "image-details-overlay image-details-overlay-shown fade-in"
          : "image-details-overlay image-details-overlay-hidden"
      }
    >
      <div className="image-details-main-container">
        <div className="image-details-close-line">
          <button
            className="image-details-close-line-btn"
            onClick={closeOverlay}
          >
            <IoMdClose style={{ color: "#666666", fontSize: 20 }}></IoMdClose>
          </button>
        </div>
        <div className="image-details-options-line">
          <button className="image-details-options-line-btn-delete image-details-options-line-btn" onClick={handleDelete}>
            <MdDelete style={{ color: "white" }} />
          </button>
          <div className="image-details-options-line-right">
            <button
              onClick={confirmChanges}
              className={
                editActive
                  ? "image-details-options-line-right-btn-confirm image-details-options-line-btn"
                  : "image-details-options-line-right-btn-confirm image-details-options-line-btn display-none"
              }
            >
              <MdCheck style={{ color: "white" }} />
            </button>
            <button
              onClick={toggleEditActive}
              className={
                editActive
                  ? "image-details-options-line-right-btn-edit image-details-options-line-btn display-none"
                  : "image-details-options-line-right-btn-edit image-details-options-line-btn"
              }
            >
              <MdEditNote style={{ color: "white" }} />
            </button>
            <button
              onClick={handleToggleFavorites}
              className={
                isFavourited
                  ? "image-details-options-line-right-btn-favourite-active image-details-options-line-btn"
                  : "image-details-options-line-right-btn-favourite image-details-options-line-btn"
              }
            >
              {isFavourited ? (
                <MdFavorite style={{ color: "white" }} />
              ) : (
                <MdFavoriteBorder style={{ color: "white" }} />
              )}
            </button>
          </div>
        </div>
        <div className="image-details">
          <div className="image-details-image-container">
            <img src={image?.src} alt={image?.title}></img>
          </div>
          <div className="image-details-details">
            <div className="image-details-details-field line-generated-at">
              <p>
                <span className="field-label">GENERATED AT:</span>{" "}
                {timeConverter(image?.timestamp)}
              </p>
            </div>
            {/* <div className="image-details-details-field line-title"></div> */}
            <div className="image-details-details-field line-title">
              <p className="field-label">TITLE:</p>
              <textarea
                onChange={handleTitleChange}
                disabled={editActive ? false : true}
                className={
                  editActive ? "field-content edit-active" : "field-content"
                }
                value={title}
              ></textarea>
            </div>
            <div className="image-details-details-field line-prompt">
              <p className="field-label">PROMPT:</p>
              <p className="field-content">{image?.prompt}</p>
            </div>
            {/* <div className="image-details-details-field line-description"></div> */}
            <div className="image-details-details-field line-description">
              <p className="field-label">DESCRIPTION:</p>
              <textarea
                onChange={handleDescriptionChange}
                disabled={editActive ? false : true}
                value={description}
                className={
                  editActive ? "edit-active field-content" : "field-content"
                }
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailsOverlay;
