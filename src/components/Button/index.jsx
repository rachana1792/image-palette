import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export  const ButtonExport = styled(Button)({
    color: '#1A2027',
    backgroundColor: '#fff',
    borderColor: '#1A2027',
    borderWidth:'1px',
    
    
    '&:hover': {
      backgroundColor: '#fff',
      borderColor: '#0000',
      boxShadow: 'none',
    }
  });

  export const ButtonUpload = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#0062cc'),
    backgroundColor: '#0062cc',
    '&:hover': {
     backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  }));

  export  const ItemButton = styled(ButtonGroup)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: '#1A2027',
    
  }));
