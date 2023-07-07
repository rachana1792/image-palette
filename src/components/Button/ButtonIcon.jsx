import React,{useState, useEffect, useContext} from "react";
import Box from '@mui/material/Box';
import {ItemButton} from './index'
import Button from '@mui/material/Button';
import AppContext from "../AppContext";

// const buttons = [
//     <Button sx={{height:20, }} onClick={incrementClicked}  key="one">+</Button>,
//     <Button sx={{height:20, }}  key="two">-</Button>,
//   ];

export default function ButtonIcon() {

  const myContext = useContext(AppContext);

  const [num, setNum]=useState(6)
  const [numArr]=useState([1, 2, 3, 4, 5])


  const incrementClicked=(e)=>{

    if(num<=10){
      numArr.push(num)
      setNum(num+1)
    }
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
           <Button sx={{height:20, }} onClick={decrementClicked} key="two">-</Button>,
        </ItemButton>
      </Box>
    );
  }