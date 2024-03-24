import './GeneratedPhotoContainer.css';
import { Bars } from 'react-loading-icons'
import { useEffect, useState } from 'react';

const GeneratedPhotoContainer = (props:any) => {
  const [showLoading, setShowLoading] = useState<Boolean>(false);

  useEffect(()=>{
    setShowLoading(props.isImgGenerating);
  },[props.isImgGenerating])

  return (
    <div className="generated-photo-container">
      {showLoading ? <Bars stroke='#000000' width={200}></Bars> : (props.imgSrc ? <img src={props.imgSrc} alt="Generated Image"></img> : '')}
    </div>
  );
}

export default GeneratedPhotoContainer;