import React from "react";
import "./GenerationContainer.css";
import GeneratedPhotoContainer from "../../components/generated-photo-container/GeneratedPhotoContainer";
import PromptInputLine from "../../components/prompt-input-line/PromptInputLine";

const GenerationContainer = (props:any) => {
  return (
    <div className="generation-container">
      <div className="container-title"><p className="container-title-up">OpenAI Image Generator</p><p className="container-title-down">Generation</p></div>
      <PromptInputLine generateNewImage={props.generateNewImage} isImgGenerating={props.isImgGenerating} errorMessage={props.errorMessage}></PromptInputLine>
      <GeneratedPhotoContainer imgSrc={props.imgSrc} isImgGenerating={props.isImgGenerating}></GeneratedPhotoContainer>
    </div>
  );
};

export default GenerationContainer;
