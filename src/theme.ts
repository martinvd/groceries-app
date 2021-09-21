import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005191',
    },
    secondary: {
      main: '#0089c6',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontSize: 32,
    },
  },
});

export default theme;
