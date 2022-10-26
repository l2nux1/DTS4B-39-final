import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#141414',
        },
        secondary: {
          main: '#EFCA08',
        },
        background: {
            default: '#201F1F'
        }        
      },
});

export default theme;