import axios from "axios";
import { useState } from "react";
import { ImageObject } from "../../types";
import AllImagesContainer from "../../components/all-images-container/AllImagesContainer";
import GenerationContainer from "../../components/generation-container/GenerationContainer";
import ImageDetailsOverlay from "../../components/image-details-overlay/ImageDetailsOverlay";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

const Generation = () => {
  const { appendToImages } = useContext(GlobalContext);
  const [imgSrc, setImgSrc] = useState<String>("");
  const [errorMessage, setErrorMessage] = useState<String>("");
  const [isImgGenerating, setIsImgGenerating] = useState<Boolean>(false);

  const imgSrcBase = "data:image/jpg;base64,";

  const generateNewImage = (prompt: string): any => {
    setIsImgGenerating(true);
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
          title: prompt,
          description: "No description",
        };
        setImgSrc(src);
        appendToImages(newImage);
        setIsImgGenerating(false);
      })
      .catch((error) => {
        setErrorMessage("Something went wrong! Try again!");
        setIsImgGenerating(false);
      });
  };

  return (
    <>
      <GenerationContainer
        generateNewImage={generateNewImage}
        errorMessage={errorMessage}
        imgSrc={imgSrc}
        isImgGenerating={isImgGenerating}
      ></GenerationContainer>
      <AllImagesContainer></AllImagesContainer>
      <ImageDetailsOverlay></ImageDetailsOverlay>
    </>
  );
};

export default Generation;
