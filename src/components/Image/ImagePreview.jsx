import React, {useEffect, useContext, useRef} from "react";

import CardMedia from '@mui/material/CardMedia';
import AppContext from '../AppContext';


export default function ImagePreview() {

  const myContext = useContext(AppContext);
 const myCanvas = useRef();


  useEffect(() => {
    const context = myCanvas.current.getContext("2d");
    const image = new Image();
    image.src =
    myContext.imagePreview ? myContext.imagePreview :'https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png'
    image.onload = () => {
      context.drawImage(image, 0, 0, 500, 500);
    };
    myContext.setPreviewObj(myCanvas)
  }, [myContext]);
  
  return (
    <>
      <CardMedia
        component="canvas"
        ref={myCanvas} width={500} height={500}
      />
      </>
        );
  }