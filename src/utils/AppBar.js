import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';
import {Typography, IconButton} from '@mui/material';

export const drawerWidth = 240;
export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: 'white',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));


  export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'YouTube, Arial, sans-serif', // Use the YouTube font or a similar font
    fontWeight: 'bold', // Adjust font weight as needed
    color: '#000000', // Set the color to match the YouTube icon's color
  }));

  export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: 'transparent', // Set the background color to transparent
    padding: theme.spacing(1), // Adjust the padding as needed
    '&:hover': {
      backgroundColor: 'rgba(255, 0, 0, 0.1)', // Set a light red background on hover
    },
  }));

  export const PowerSpan = styled('span')(({ content }) => ({
    position: 'relative',
    '&::after': {
      content: content,
      position: 'absolute',
      top: '-0.5em', // Adjust the vertical position
      left: '0.2em', // Adjust the horizontal position
      fontSize: '0.6em', // Adjust the size
      fontWeight: 'normal', // Adjust the font weight
      color: '#000000', // Set the color to match the YouTube icon's color
    },
  }));
  