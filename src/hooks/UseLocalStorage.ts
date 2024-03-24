import { ImageObject } from "../types";

const UseLocalStorage = () => {
  const updateImages = (updatedImages: ImageObject[]): void => {
    localStorage.setItem("images", JSON.stringify(updatedImages));
  };

  return { updateImages };
};

export default UseLocalStorage;
