import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import useMovieStore, { selectFetchTrendingMovies, selectSortMovies, selectMoviesReady } from '../store/movie';
import ListTile from "./ListTile";

const ListTrendingMovie = () => {
    const fetchTrendingMovies = useMovieStore(selectFetchTrendingMovies)    
    const [queryParams, setQueryParams] = useSearchParams();
    const moviesReady = useMovieStore(selectMoviesReady);

    const sortMovies = useMovieStore(selectSortMovies);

    useEffect(() => {
        fetchTrendingMovies();
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

export default ListTrendingMovie;