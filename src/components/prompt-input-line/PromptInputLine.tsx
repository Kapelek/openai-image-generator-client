import { useState } from "react";
import "./PromptInputLine.css";
import ConfirmBtn from "../confirm-btn/ConfirmBtn";

const PromptInputLine = (props:any) => {
  const [prompt, setPrompt] = useState("");

  const handleInputChange = (event:any) => {
    setPrompt(event.target.value);
  };

  const handleBtnClick = () => {
    props.generateNewImage(prompt);
    setPrompt("");
  };

  return (
    <div className="prompt-input-line">
      <input className="prompt-input" onChange={handleInputChange} value={prompt}></input>
      <ConfirmBtn onClick={handleBtnClick} prompt={prompt}></ConfirmBtn>
    </div>
  );
};

export default PromptInputLine;