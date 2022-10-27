import { ImageList } from '@mui/material';
import PosterItem from './PosterItem';
import { ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../themes/theme';
import { Box } from '@mui/material';

const ListTile = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ mt: 10 }}>
                <ImageList cols={5}>
                    {props.items.map((item, index) => (
                        <PosterItem key={index} item={item} />
                    ))}
                </ImageList>
            </Box>
        </ThemeProvider>
    )
}

export default ListTile;