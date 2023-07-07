import React,{useState, useEffect, useContext} from "react";
import Box from '@mui/material/Box';
import {ItemButton} from './index'
import Button from '@mui/material/Button';
import AppContext from "../AppContext";

const imageData = [
  {
    id:1,
    color:'rgba(240, 240, 240, 1)',
    top:'-200px',
    left:'20px',
    
  },
  {
    id:2,
    color:'rgba(240, 240, 240, 1)',
    top:'-190px',
    left:'50px'
  },
  {
    id:3,
    color:'rgba(1, 22, 39, 1)',
    top:'-110px',
    left:'70px'
  },
  {
    id:4,
    color:'rgba(240, 240, 240, 1)',
    top:'-280px',
    left:'170px'
  },
  {
    id:5,
    color:'rgba(240, 240, 240, 1)',
    top:'-370px',
    left:'300px'
  }

]

export default function ButtonIcon() {

  const myContext = useContext(AppContext);

  const [num, setNum]=useState(6)
  const [updateArr, setUpdateArr]=useState({ })

  const [numArr, setNumArr]=useState(imageData)


  const incrementClicked=(e)=>{
// console.log(num)
    if(num<=10){
      console.log(numArr)
      const topVal =-100+num
      const leftVal =15*num
      setUpdateArr({
        id:num,
        color:'rgba(240, 240, 240, 1)',
        top: topVal + 'px',
        left: leftVal+ 'px'
      }) 

      // console.log("updateArr",updateArr)

// console.log("updateArr",updateArr)
  updateArr.id && numArr.push(updateArr)
      setNum(num+1)
    }
    // console.log("updateArr",numArr)
     myContext.setCount([...numArr]);

  }

  const decrementClicked=(e)=>{

    if(numArr.length!=2){
      numArr.pop( num)
      setNum(num-1)
    }
    myContext.setCount([...numArr]);

  }

  useEffect(() => {
    setNumArr(myContext?.countPalette)
    myContext.setCount([...numArr]);

  },[])


    return (
      <Box
        sx={{
          color:'#0000',
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ItemButton
          orientation="vertical"
          size = 'small'
          color='inherit'
        >
           <Button sx={{height:20, }} onClick={incrementClicked}  key="one">+</Button>
           <Button sx={{height:20, }} onClick={decrementClicked} key="two">-</Button>
        </ItemButton>
      </Box>
    );
  }