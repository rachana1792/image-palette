import React,{useEffect, useContext, useState} from "react";
import Grid from '@mui/material/Grid';
import { Item } from "./index";
import AppContext from "../AppContext";


export default function FormRow() {
  const myContext = useContext(AppContext);
  const [numbers, setNumbers] = useState([])
  useEffect(() => {
    setNumbers(myContext.countPalette)

  },[myContext])

 
  const headings = numbers.map((hero, index)=>
  <Grid key={index} item xs={2}><Item >{hero}</Item></Grid>)
  return (
    <React.Fragment>
      {headings}
    </React.Fragment>
  );
}