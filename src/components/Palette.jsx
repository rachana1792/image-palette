import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import ButtonIcon from './Button/ButtonIcon';
import FormRow from './ColorPalatte/FormRow';
import BottomButtons from './Button/BottomButtons';
import ImagePreview from './Image/ImagePreview';

import AppContext from './AppContext';

export default function Palette() {

  const [palette,setPalatte] = useState(['#0000'])
  const [preview, setPreview] = useState('');
  const [previewObj, setPreviewObj] = useState([])
  const [count, setCount]= useState([])

  // const toggleSetting2 = () => {
  //   setting3 ? setSetting2(true) : setSetting2value(false);
  // };

  const imagePalette = {
    imagePalatte: palette,
    imagePreview: preview,
    imageObject: previewObj,
    countPalette: count,
    setPalatte,
    setPreview,
    setPreviewObj,
    setCount
  };



  return (
    <AppContext.Provider value={imagePalette}>
    <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'left', fontWeight: 'bold', paddingBottom: 5, marginTop: 10, marginLeft: 2 }}>
          Palatte
        </Box>
        <Box>
          <Grid container spacing={10}>

            <Grid item xs={12} gridColumn="span 12" sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
              <FormRow />
              <ButtonIcon />
            </Grid>
            <Grid item xs={12}  >
              <BottomButtons />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pr:2, pb:2, pt:2 }}>
        <ImagePreview />
      </Box>
    </Card>
    </AppContext.Provider>
  );
}
