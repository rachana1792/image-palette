import React, { useState, useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import { ButtonUpload } from '../Button';
import AppContext from '../AppContext';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({

  '& .MuiDialogContent-root': {
    padding: theme.spacing(10),
    width: '70vh',
    height: '30vh',
  },

  '& 	.MuiAppBar-root': {
    backgroundColor: '#fff',
    color: '#000'
  }
}));


export default function ExportModal() {

  const [isOpen, setisOpen] = useState(false);

  const myContext = useContext(AppContext);



  const getColorData = (color) => {

    if (color) {
      const rgba = color?.replace(/^rgba?\(|\s+|\)$/g, '').split(',');

      const hex = `${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;

      return hex

    }
  }


  const handleClickOpen = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(false);

  };

  return (
    <div>
      <ButtonUpload onClick={handleClickOpen} variant='outlined' endIcon={<KeyboardArrowDownIcon />}>Export Palatte </ButtonUpload>

      <BootstrapDialog
        open={isOpen}
        onClose={handleClose}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              csv:
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent >

          {
            myContext?.countPalette.map((hero, index) => (

              <Typography key={hero.id} sx={{ display: 'inline-block' }} variant="h6" component="div">
                {getColorData(hero.color) + ", "}
              </Typography>

            ))
          }


        </DialogContent>

      </BootstrapDialog>
    </div>
  );
}
