import React, { createContext, useState } from "react";
import { ImageObject } from "../types";
import UseLocalStorage from "../hooks/UseLocalStorage";
import { useEffect } from "react";

export const GlobalContext = createContext<any | undefined>(undefined);

export const GlobalContextProvider = ({ children }: any) => {
  const { updateImages } = UseLocalStorage();

  let localStorageData = localStorage.getItem("images");

  const initial: ImageObject[] = localStorageData
    ? JSON.parse(localStorageData)
    : [];

  const [images, setImages] = useState(initial);

  const appendToImages = (imageToAppend: ImageObject) => {
    const updatedImages = [...images, imageToAppend];
    setImages(updatedImages);
    updateImages(updatedImages);
  };

  const toggleFavourite = (id: number) => {
    const updatedImages = images.map((image) => {
      if (image.timestamp === id) {
        return { ...image, favourite: !image.favourite };
      }
      return image;
    });
    setImages(updatedImages);
    updateImages(updatedImages);
  };

  const deleteImage = (id: number) => {
    const updatedImages = images.filter((image) => image.timestamp !== id);
    setImages(updatedImages);
    updateImages(updatedImages);
  };

  const handleConfirm = () => {
    if (image) {
      let updatedImages = images.map((elem) => {
        if (elem.timestamp === image.timestamp) {
          elem.title = title;
          elem.description = description;
        }
        return elem;
      });
      updateImages(updatedImages);
    }
  };

  const [image, setImage] = useState<ImageObject | undefined>(undefined);
  const [isFavourited, setIsFavourite] = useState(image?.favourite);

  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [editActive, setEditActive] = useState<boolean>(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const toggleShowOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  const toggleEditActive = () => {
    setEditActive(!editActive);
  };
  const setEditActiveToFalse = () => {
    setEditActive(false);
  };

  const setOverlayImage = (image: ImageObject) => {
    setImage(image);
    setIsFavourite(image.favourite)
    setTitle(image.title);
    setDescription(image.description);
  };

  return (
    <GlobalContext.Provider
      value={{
        showOverlay,
        toggleShowOverlay,
        editActive,
        toggleEditActive,
        setEditActiveToFalse,
        image,
        setOverlayImage,
        handleTitleChange,
        handleDescriptionChange,
        title,
        description,
        handleConfirm,
        images,
        appendToImages,
        toggleFavourite,
        deleteImage,
        isFavourited,
        setIsFavourite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
