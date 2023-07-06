import React from "react";
import Grid from '@mui/material/Grid';
import { Item } from "./index";

const numbers = [1, 2, 3, 4, 5,6]

export default function FormRow() {
  const headings = numbers.map((hero, index)=>
  <Grid key={index} item xs={2}><Item >{hero}</Item></Grid>)
  return (
    <React.Fragment>
      {headings}
    </React.Fragment>
  );
}