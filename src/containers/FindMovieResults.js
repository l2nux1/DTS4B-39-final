import useMovieStore, {
    selectFindMovieResults
} from '../store/movie';
import ListTile from "../components/ListTile";
import MovieNotFound from './MovieNotFound';

const ListFindMovies = () => {

    const findMovieResults = useMovieStore(selectFindMovieResults);

    //console.log('findMovie: ', findMovieResults)

    return (
        <>
            {(findMovieResults.length > 0) ? <ListTile items={findMovieResults} /> : <MovieNotFound />}
        </>
    )
}

export default ListFindMovies;