import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import useMovieStore, { selectFecthPopularMovies, selectSortMovies, selectMoviesReady } from '../store/movie';
import ListTile from "./ListTile";

const ListPopularMovie = () => {
    const fecthPopularMovies = useMovieStore(selectFecthPopularMovies)    
    const [queryParams, setQueryParams] = useSearchParams();
    const moviesReady = useMovieStore(selectMoviesReady);
    const sortMovies = useMovieStore(selectSortMovies);

    useEffect(() => {
        fecthPopularMovies();
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

export default ListPopularMovie;