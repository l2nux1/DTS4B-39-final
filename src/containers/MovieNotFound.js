import { Typography, Box } from '@mui/material'
import { ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../themes/theme';

const MovieNotFound = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                mt: 20
            }}>
                <Typography variant='h2'>Movie Not Found</Typography>
            </Box>
        </ThemeProvider>
    )
}

export default MovieNotFound;