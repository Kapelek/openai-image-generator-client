import { ImageObject } from "../../types";
import { MdFavoriteBorder } from "react-icons/md";
import "./Images.css";

interface ImageContainerProps {
  key: number;
  image: ImageObject;
}

const Image = (props: ImageContainerProps) => {
  return (
    <div className="image">
      <img src={props.image.src} alt={props.image.prompt} />
      <button><MdFavoriteBorder style={{color:"white"}}/></button>
    </div>
  );
};

export default Image;
