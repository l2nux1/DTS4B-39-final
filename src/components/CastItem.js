import { ImageListItem, ImageListItemBar, Avatar } from '@mui/material'

const CastItem = (props) => {
    const url = (props.item.profile_path != null) ? `https://image.tmdb.org/t/p/original${props.item.profile_path}` : ''
    return (
        <ImageListItem
            sx={{
                mx: 1,
                textAlign: 'center'
            }}>
            <Avatar alt='' src={url} sx={{ width: 200, height: 200 }} />
            <ImageListItemBar
                title={props.item.name}
                subtitle={props.item.character}
                position="below"
            />
        </ImageListItem>
    )
}

export default CastItem;