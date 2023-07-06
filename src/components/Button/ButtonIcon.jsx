import React from "react";
import Box from '@mui/material/Box';
import {ItemButton} from './index'
import Button from '@mui/material/Button';


const buttons = [
    <Button sx={{height:20, }}  key="one">+</Button>,
    <Button sx={{height:20, }}  key="two">-</Button>,
  ];

export default function ButtonIcon() {
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
          {buttons}
        </ItemButton>
      </Box>
    );
  }