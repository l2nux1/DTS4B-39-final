import { ImageList } from '@mui/material';
import PosterItem from '../components/PosterItem';
import { ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";

import theme from '../themes/theme';
import useMovieStore, { selectMovies } from '../store/movie';

import {Box} from '@mui/material';

const ListTile = () => {
   
    const movies = useMovieStore(selectMovies);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ mt: 10 }}>            
                <ImageList cols={5}>
                    {movies.map((item, index) => (
                        <PosterItem key={index} item={item} />
                    ))}
                </ImageList>
            </Box>
        </ThemeProvider>
    )
}

export default ListTile;