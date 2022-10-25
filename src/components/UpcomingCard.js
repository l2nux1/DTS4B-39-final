
import { Card, CardMedia, Typography } from '@mui/material'

const UpcomingCard = (props) =>{
    return (
        <Card sx={{ display: 'flex' }}>
            <div style={{position: "absolute", color: "white",top: 10, left: 10, width: 800}}>
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
                image={props.item.poster}
                sx={{
                    objectFit: 'cover'
                }}
            />

        </Card>        
    )
}

export default UpcomingCard;