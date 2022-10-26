
import { Card, CardMedia, Typography } from '@mui/material'

const UpcomingCard = (props) => {
    //console.log('props.item.backdrop_path: ', props.item.backdrop_path)
    const path = props.item.backdrop_path == null ? props.item.poster_path : props.item.backdrop_path
    const url = `https://image.tmdb.org/t/p/original${path}`
    //console.log('url: ', url)

    return (
        <Card sx={{ display: 'flex' }}>
            <div style={{ position: "absolute", color: "white", top: 10, left: 10, width: 800 }}>
                <Typography gutterBottom variant='h2' sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                    {props.item.title}
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'left' }}>
                    {props.item.overview}
                </Typography>
            </div>
            <CardMedia
                component="img"
                height="480"
                image={url}
                sx={{
                    objectFit: 'cover'
                }}
            />

        </Card>
    )
}

export default UpcomingCard;