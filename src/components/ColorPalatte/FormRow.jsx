import React,{useEffect, useContext, useState} from "react";
import Grid from '@mui/material/Grid';
// import { Item } from "./index";
import AppContext from "../AppContext";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme,color }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : color,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:30,
}));



export default function FormRow() {
  const myContext = useContext(AppContext);
  

 
  const grids = myContext.countPalette.map((hero, index)=>
  <Grid style={{backgroundColor: hero.color}} key={index} item xs={2}><Item color={hero.color}/></Grid>)
  return (
    <React.Fragment>
      {grids}
    </React.Fragment>
  );
}