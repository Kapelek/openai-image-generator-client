import { useState } from "react";
import { ImageObject } from "../types";

const UseLocalStorage = () => {
  const localStorageData = localStorage.getItem("images");
  const initial: ImageObject[] = localStorageData
    ? JSON.parse(localStorageData)
    : [];
  const [images, setImages] = useState(initial);

  const appendImages = (image: ImageObject): void => {
    const updatedImages = [...images, image];
    updateImages(updatedImages);
  };

  const addToFavourites = (imageId: number) => {};
  const remove = (imageId: number) => {};

  const updateImages = (updatedImages: ImageObject[]): void => {
    setImages(updatedImages);
    localStorage.setItem("images", JSON.stringify(updatedImages));
  };

  return { images, appendImages, addToFavourites, remove };
};

export default UseLocalStorage;
