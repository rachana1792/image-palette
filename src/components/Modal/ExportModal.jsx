import React, { useState, useContext, useEffect } from 'react';
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
    marginLeft: 130,
    marginTop: 30
  },

  '& 	.MuiAppBar-root': {
    backgroundColor: '#fff',
    color: '#000'
  }
}));


export default function ExportModal() {

  const [isOpen, setisOpen] = useState(false);
  const [numbers, setNumbers] = useState([])



  const myContext = useContext(AppContext);

  useEffect(() => {
    setNumbers(myContext.countPalette)
  }, [myContext])


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
          <Typography variant="h6" component="div">{'['}</Typography>
          {
            numbers.map((hero, index) => (

              <Typography key={hero.id} sx={{ ml: 1, flex: 1 }} variant="h6" component="div">
                {'{' + hero.id + ", " + hero.color + "}"}
              </Typography>

            ))
          }

          <Typography variant="h6" component="div">{']'}</Typography>

        </DialogContent>

      </BootstrapDialog>
    </div>
  );
}
