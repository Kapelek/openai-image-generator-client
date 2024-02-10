import './GeneratedPhotoContainer.css';
import { Bars } from 'react-loading-icons'

const GeneratedPhotoContainer = (props:any) => {
  return (
    <div className="generated-photo-container">
      {props.imgSrc ? <img src={props.imgSrc}></img> : "" /*<Bars stroke='#000000' width={200}*/}
    </div>
  );
}

export default GeneratedPhotoContainer;