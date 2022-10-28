import { ImageListItem, ImageListItemBar } from '@mui/material'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

const PosterItem = (props) => {
    const [user] = useAuthState(auth);
    const url = `https://image.tmdb.org/t/p/original${props.item.poster_path}`
    const link = `/detail?vid=${props.item.id}`

    return (
        <a href={(user != null) ? link : '/login'}>
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