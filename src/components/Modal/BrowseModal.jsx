import  React,{useState, useEffect, useContext} from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';

import { ButtonExport } from '../Button';
import AppContext from '../AppContext';

import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({

  '& .MuiDialogContent-root': {
    padding: theme.spacing(10),
    width:'70vh',
    height:'30vh',
    marginLeft: 130,
    marginTop: 30
  },

  '& 	.MuiAppBar-root':{
    backgroundColor:'#fff',
    color:'#000'
  }
}));


export default  function ExportModal() {

  const [isOpen, setisOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  const myContext = useContext(AppContext);


  //image uploader

  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        myContext.setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    myContext.setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }
    setisOpen(false);

    setSelectedFile(e.target.files[0])
}

//other functions

  const handleClickOpen = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(false);

  };

  return (
    <div>
      <ButtonExport onClick={handleClickOpen} variant='outlined' endIcon={<PhotoCameraBackIcon/>}>Browse image</ButtonExport>

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
              Select Image
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
        <input type='file' onChange={onSelectFile} />
        {/* {selectedFile &&  <img src={preview} /> } */}

        </DialogContent>
       
      </BootstrapDialog>
    </div>
  );
}
