import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'
import UpcomingItem from '../components/UpcomingItem';

const UpcomingList = (props) => {
    const sortedItems = [...props.items].sort(function (a, b) {
        return b.popularity - a.popularity;
    }) //sort by highest popularity*/
    const itemViews = sortedItems.slice(0, 5); //get only 5 sorted Upcoming List

    return (
        <Box sx={{ width: '100%' }}>
            {<Carousel
                next={() => { }}
                prev={() => { }}
            >
                {
                    itemViews.map((item, i) => <UpcomingItem key={i} item={item} />)
                }
            </Carousel>}
        </Box>

    )
}

export default UpcomingList