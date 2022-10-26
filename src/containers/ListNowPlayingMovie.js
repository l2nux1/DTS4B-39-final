import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import useMovieStore, { selectFetchNowPlayingMovies, selectSortMovies, selectMoviesReady } from '../store/movie';
import ListTile from "./ListTile";

const ListNowPlayingMovie = () => {
    const fetchNowPlayingMovies = useMovieStore(selectFetchNowPlayingMovies)    
    const [queryParams, setQueryParams] = useSearchParams();
    const moviesReady = useMovieStore(selectMoviesReady);
    
    const sortMovies = useMovieStore(selectSortMovies);

    useEffect(() => {
        fetchNowPlayingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!moviesReady) return;

        sortMovies(queryParams.get('sort'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams, moviesReady]);
    
    
    return (
        <ListTile/>
    )
}

export default ListNowPlayingMovie;