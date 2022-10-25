import { ImageListItem, ImageListItemBar } from '@mui/material'

const PosterItem = (props) => {
    const url = `https://image.tmdb.org/t/p/original${props.item.poster_path}`
    return (
        <ImageListItem
            sx={{
                width: 240,
                height: 320,
                mx: 1,
                textAlign: 'left'
            }}>
            <img
                src={url}
                alt=''
                style={{
                    borderRadius: 20,
                }}
            />
            <ImageListItemBar
                title={props.item.title}
                subtitle={props.item.release_date}
                position="below"
            />
        </ImageListItem>
    )
}

export default PosterItem;