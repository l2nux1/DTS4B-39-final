import React from 'react';
import Navbar from '../components/Navbar';
import UpcomingList from './UpcomingList';
import ListRow from './ListRow';

import { GetStaticData } from '../data/StaticData';

const Home = () => {
    return (
        <>
            <Navbar />
            <UpcomingList items={GetStaticData('upcoming')} />
            <ListRow title={"Now Playing"} items={GetStaticData('nowPlaying')} />
            <ListRow title={"Trending"} items={GetStaticData('trending')} />
            <ListRow title={"Popular"} items={GetStaticData('popular')} />
        </>
    )
}
export default Home