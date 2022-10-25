import { Box, ImageList, Typography, Link } from '@mui/material'
import PosterItem from '../components/PosterItem';

const ListRow = (props) => {
    return (
        <Box sx={{ width: '100%', pt: 5 }}>
            <Typography variant='body1' sx={{ textAlign: 'left', mx: 1, fontWeight: 'bold' }}>
                <Link href='/list-tile?type=movie&data=upcoming' color="inherit">{props.title}</Link>
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