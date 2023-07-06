import React from "react";
import Grid from '@mui/material/Grid';
import BrowseModal from '../Modal/BrowseModal'

import  ExportModal  from '../Modal/ExportModal';

export default function BottomButtons() {


    return (
        <Grid container spacing={2}>
          <Grid sx={{ display:'flex', justifyContent:'center'}} item xs={12}>
          <BrowseModal buttonClicked='upload'/>
          </Grid>
          <Grid sx={{ display:'flex', justifyContent:'center'}} item xs={12}>
          <ExportModal/>
          </Grid>
          <Grid sx={{ display:'flex', justifyContent:'center'}} item xs={12}></Grid>
          </Grid>
        );
  }