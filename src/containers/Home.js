import React from 'react';
import {Box} from '@mui/material';
import { ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";

import UpcomingList from './UpcomingList';
import ListRow from './ListRow';

import { GetStaticData } from '../data/StaticData';
import theme from '../themes/theme';

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: 8}}
            >
                <UpcomingList items={GetStaticData('Upcoming')} />
                <ListRow title={"Now Playing"} items={GetStaticData('Now Playing')} />
                <ListRow title={"Trending"} items={GetStaticData('Trending')} />
                <ListRow title={"Popular"} items={GetStaticData('Popular')} />
            </Box>
        </ThemeProvider>        
    )
}
export default Home