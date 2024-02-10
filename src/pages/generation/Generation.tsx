import GeneratedPhotoContainer from "../../components/generated-photo-container/GeneratedPhotoContainer";
import PromptInputLine from "../../components/prompt-input-line/PromptInputLine";
import axios from "axios";
import { useState } from "react";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import { ImageObject } from "../../types";
import AllImagesContainer from "../../components/all-images-container/AllImagesContainer";

const Generation = () => {
  const [imgSrc, setImgSrc] = useState<String>("");
  const [errorMessage, setErrorMessage] = useState<String>("");
  const { appendImages } = UseLocalStorage();

  const imgSrcBase = "data:image/jpg;base64,";

  const generateNewImage = (prompt: string): any => {
    setErrorMessage("");
    axios
      .get("/image-generation?prompt=" + prompt)
      .then((res) => {
        const src = imgSrcBase + res.data.data[0].b64_json;
        const newImage: ImageObject = {
          timestamp: res.data.created,
          src: src,
          prompt: prompt,
          favourite: false,
        };
        setImgSrc(src);
        appendImages(newImage);
      })
      .catch((error) => {
        setErrorMessage("Something went wrong!");
      });
  };

  return (
    <>
      <h1>Generation</h1>
      <PromptInputLine generateNewImage={generateNewImage}></PromptInputLine>
      {errorMessage ? errorMessage : ""}
      <GeneratedPhotoContainer imgSrc={imgSrc}></GeneratedPhotoContainer>
      <AllImagesContainer></AllImagesContainer>
    </>
  );
};

export default Generation;
