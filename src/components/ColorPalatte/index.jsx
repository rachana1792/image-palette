
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const Item = styled(Paper)(({ theme,color }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : color,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:30,
  }));
  