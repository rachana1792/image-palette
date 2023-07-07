import React,{useEffect, useContext, useState} from "react";
import Grid from '@mui/material/Grid';
import { Item } from "./index";
import AppContext from "../AppContext";


export default function FormRow() {
  const myContext = useContext(AppContext);
  const [numbers, setNumbers] = useState([])
  const [color, setcolor] = useState()

  useEffect(() => {
    setNumbers(myContext.countPalette)
    setcolor(myContext.imagePalatte)

  },[myContext])

 
  const headings = numbers.map((hero, index)=>
  <Grid style={{backgroundColor: hero.color}} key={index} item xs={2}><Item color={hero.color}/></Grid>)
  return (
    <React.Fragment>
      {headings}
    </React.Fragment>
  );
}