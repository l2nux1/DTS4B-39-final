import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";

import UpcomingList from './UpcomingList';
import ListRow from './ListRow';

import theme from '../themes/theme';

import useMovieStore, {
    selectFetchTrendingMovies,
    selectFecthPopularMovies,
    selectFetchNowPlayingMovies,
    selectFetchUpComingMovie,
    selectTrendingMovies,
    selectPopularMovies,
    selectNowPlayingMovies,
    selectUpcomingMovies
} from '../store/movie';

const Home = () => {
    const fetchTrendingMovies = useMovieStore(selectFetchTrendingMovies)
    const fecthPopularMovies = useMovieStore(selectFecthPopularMovies)
    const fetchNowPlayingMovies = useMovieStore(selectFetchNowPlayingMovies)
    const fetchUpComingMovie = useMovieStore(selectFetchUpComingMovie)

    const trendingMovies = useMovieStore(selectTrendingMovies)
    const popularMovies = useMovieStore(selectPopularMovies)
    const nowPlayingMovies = useMovieStore(selectNowPlayingMovies)
    const upcomingMovies = useMovieStore(selectUpcomingMovies)

    useEffect(() => {
        fetchTrendingMovies();
        fecthPopularMovies();
        fetchNowPlayingMovies();
        fetchUpComingMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps        
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: 8
            }}
            >
                <UpcomingList items={upcomingMovies} />
                <ListRow title={"Trending"} items={trendingMovies} />
                <ListRow title={"Now Playing"} items={nowPlayingMovies} />
                <ListRow title={"Popular"} items={popularMovies} />
            </Box>
        </ThemeProvider>
    )
}
export default Home