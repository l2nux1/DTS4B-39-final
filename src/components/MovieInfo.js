import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import useMovieStore, {
    selectFetchMovieInfo,
    selectVideoDetail,
} from '../store/movie';


const MovieInfo = (props) => {
    const fetchMovieInfo = useMovieStore(selectFetchMovieInfo);
    const videoDetail = useMovieStore(selectVideoDetail);

    const url = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {
        fetchMovieInfo(props.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps        
    }, [])

    return (
        <Box sx={{ display: 'flex ', mb: 4 }}>
            <img
                src={`${url}${videoDetail.poster_path}`}
                alt=''
                style={{
                    borderRadius: 20,
                    width: 335,
                    height: 495
                }}
            />
            <Box sx={{ mx: 5 }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold' }}>{videoDetail.original_title}</Typography>
                <Box sx={{ mt: 4 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Language</Typography>
                    <Typography>{videoDetail.original_language}</Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Release Date</Typography>
                    <Typography>{videoDetail.release_date}</Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Status</Typography>
                    <Typography>{videoDetail.status}</Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Popularity</Typography>
                    <Typography>{videoDetail.popularity}</Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Overview</Typography>
                    <Typography>{videoDetail.overview}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default MovieInfo