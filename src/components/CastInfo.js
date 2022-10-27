import { Box, Typography, ImageList } from '@mui/material';
import CastItem from './CastItem';
import React, { useEffect } from 'react';

import useMovieStore, {
    selectFetchCastInfo,
    selectCastDetail
} from '../store/movie';

const CastInfo = (props) => {
    const fetchCastInfo = useMovieStore(selectFetchCastInfo);
    const castDetail = useMovieStore(selectCastDetail);

    useEffect(() => {
        fetchCastInfo(props.id);
        //console.log('useFecthCastInfo:', castDetail);
        // eslint-disable-next-line react-hooks/exhaustive-deps        
    }, [])

    return (
        <Box sx={{ mx: 3, mb: 4 }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Credits</Typography>
            <ImageList
                rowHeight={260}
                sx={{
                    gridAutoFlow: "column",
                }}
            >
                {
                    castDetail.map((item, i) => <CastItem key={i} item={item} />)
                }
            </ImageList>
        </Box>
    )
}

export default CastInfo;