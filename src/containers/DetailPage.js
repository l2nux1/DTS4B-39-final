import { ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../themes/theme';
import { useSearchParams } from "react-router-dom";

import MovieInfo from '../components/MovieInfo';
import CastInfo from '../components/CastInfo';

const DetailPageMovie = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const index = queryParams.get('vid')
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MovieInfo id={index} />
            <CastInfo id={index} />
        </ThemeProvider>
    )
}

export default DetailPageMovie;