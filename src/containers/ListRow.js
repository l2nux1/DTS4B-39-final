import { Box, ImageList, Typography } from '@mui/material'
import PosterItem from '../components/PosterItem';

const ListRow = (props) => {
    //console.log(props.items)
    return (
        <Box sx={{ width: '100%', pt: 5 }}>
            <Typography variant='body1' sx={{ textAlign: 'left', mx: 1, fontWeight: 'bold' }}>
                {props.title}
            </Typography>
            <ImageList
                rowHeight={460}
                sx={{
                    gridAutoFlow: "column",
                }}
            >
                {
                    props.items.map((item, i) => <PosterItem key={i} item={item} />)
                }
            </ImageList>
        </Box>
    )
}

export default ListRow;