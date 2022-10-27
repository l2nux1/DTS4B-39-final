import { ImageListItem, ImageListItemBar, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const PosterItem = (props) => {
    const url = `https://image.tmdb.org/t/p/original${props.item.poster_path}`
    const link = `/detail?vid=${props.item.id}`
    const navigate = useNavigate();

    function clickHandle() {
        navigate(link)
    }

    return (
        <a href={link}>
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
                    sx={{ color: 'white' }}
                />

            </ImageListItem>
        </a>
    )
}

export default PosterItem;