import { ImageList } from '@mui/material';
import PosterItem from '../components/PosterItem';

import { GetStaticData } from '../data/StaticData';

const ListTile = () => {

    const queryParams = new URLSearchParams(window.location.search)
    //const type = queryParams.get('type')
    const data = queryParams.get('data')
    const itemData = GetStaticData(data)
    const windowWidth = Math.ceil(window.innerWidth / 320)
    console.log(windowWidth)
    return (
        <>
            <ImageList cols={5}>
                {itemData.map((item, index) => (
                    <PosterItem key={index} item={item} />
                ))}
            </ImageList>
        </>
    )
}

export default ListTile;