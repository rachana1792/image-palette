import React, {useEffect, useContext, useRef, useState} from "react";

import CardMedia from '@mui/material/CardMedia';
import AppContext from '../AppContext';
import Draggable from 'react-draggable';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

export default function ImagePreview() {

  const myContext = useContext(AppContext);
 const myCanvas = useRef();
 const [points, setPoints] = useState(1)
 
  useEffect(() => {
    setPoints(myContext?.countPalette?.length)
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

      <div className="box" style={{height: '500px', width: '500px',  position: 'relative',  padding: '0'}}>
        <CardMedia
        component="canvas"
        ref={myCanvas} 
        width={500} height={500}
        sm={{ position:'absolute'}}
      />
          {/* {points.map((hero, index)=> { <div key={hero}> */}
            
          {/* </div>})} */}
          {[...Array(points)].map((elementInArray, index) => (  
            <div key= {elementInArray} style={{marginTop: '-100px'}}>
            <Draggable bounds="parent">
              <PanoramaFishEyeIcon/>
            </Draggable>
            </div>
           ))}
        </div>

            
      </>
          
        );
  }