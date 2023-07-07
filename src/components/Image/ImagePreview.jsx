import React, {useEffect, useContext, useRef, useState} from "react";

import CardMedia from '@mui/material/CardMedia';
import AppContext from '../AppContext';
import Draggable from 'react-draggable';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

export default function ImagePreview() {

  const myContext = useContext(AppContext);
 const myCanvas = useRef();
 const [points, setPoints] = useState([])
 const [dragColor, setDragColor] = useState()
 
  useEffect(() => {
    setPoints(myContext?.countPalette)
    const context = myCanvas.current.getContext("2d");
    const image = new Image();
    image.src =
    myContext.imagePreview ? myContext.imagePreview :'https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png'
    image.crossOrigin = "Anonymous";
    
    image.onload = () => {
      context.drawImage(image, 0, 0);
      image.style.display = "none";
    };

    myContext.setPreviewObj(myCanvas)

    // myCanvas.current.addEventListener('click', function(e) {

    //   const bounding = myCanvas.current.getBoundingClientRect();

    //   var x = e.clientX - bounding.left;
    //   var y = e.clientY - bounding.top;
    //   console.log(x,y);

    //     var pixels = context.getImageData(x, y, 1, 1);
    //     const data = pixels.data;
    //     const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;

    //     console.log(rgba);
    //     myContext.setPalatte(rgba)
    // });

  }, [myContext]);

  const getColor = (e, value) => {

    const context = myCanvas.current.getContext("2d");
    const bounding = myCanvas.current.getBoundingClientRect();

      var x = e.clientX - bounding.left;
      var y = e.clientY - bounding.top;

        var pixels = context.getImageData(x, y, 1, 1);
        const data = pixels.data;
        const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;

        const objIndex = points.findIndex((obj => obj.id == value.id));
        console.log(value.id,"objIndex", points[objIndex].id);
        points[objIndex].color = rgba
        setDragColor()
        console.log(points[4]);
        myContext.setPalatte(rgba)
}

  
  return (
    
    <>

      <div className="box" style={{height: '500px', width: '500px',  position: 'relative',  padding: '0'}}>
        <CardMedia
        component="canvas"
        ref={myCanvas} 
        width={500} height={500}
        sm={{ position:'absolute'}}
      />
      {
         points.map((hero, index)=>(
          <Draggable onDrag={(e)=>getColor(e,hero)} key={hero.id}  bounds="parent">
              <div style={{position:'absolute',marginTop:hero.top,marginLeft:hero.left}}><PanoramaFishEyeIcon/> </div>
            </Draggable>
         ))
      }            
          {/* {[...Array(points)].map((elementInArray, index) => (  
            <Draggable key={elementInArray}  bounds="parent">
              <div style={{position:'absolute'}}><PanoramaFishEyeIcon/> </div>
            </Draggable>
            ))}  */}
        </div>

            
      </>
          
        );
  }