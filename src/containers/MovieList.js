import { Box, ImageList, ImageListItem, Typography, ImageListItemBar } from '@mui/material'

const MovieList = (props) => {
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
                <ImageListItem 
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}>                
                    <img 
                        src="https://image.tmdb.org/t/p/original/ps2oKfhY6DL3alynlSqY97gHSsg.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}
                >
                    <img 
                        src="https://image.tmdb.org/t/p/original/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}
                >
                    <img 
                        src="https://image.tmdb.org/t/p/original/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}
                >
                    <img 
                        src="https://image.tmdb.org/t/p/original/jXwYESgxqkXlYvoTyUTO2hqKK7T.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem 
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}>                
                    <img 
                        src="https://image.tmdb.org/t/p/original/ps2oKfhY6DL3alynlSqY97gHSsg.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}
                >
                    <img 
                        src="https://image.tmdb.org/t/p/original/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}
                >
                    <img 
                        src="https://image.tmdb.org/t/p/original/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}
                >
                    <img 
                        src="https://image.tmdb.org/t/p/original/jXwYESgxqkXlYvoTyUTO2hqKK7T.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem 
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}>                
                    <img 
                        src="https://image.tmdb.org/t/p/original/ps2oKfhY6DL3alynlSqY97gHSsg.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}
                >
                    <img 
                        src="https://image.tmdb.org/t/p/original/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}
                >
                    <img 
                        src="https://image.tmdb.org/t/p/original/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem
                    sx={{
                        width: 240,
                        height: 320,
                        mx: 1,
                        textAlign: 'left'
                    }}
                >
                    <img 
                        src="https://image.tmdb.org/t/p/original/jXwYESgxqkXlYvoTyUTO2hqKK7T.jpg" 
                        alt=''
                    />
                    <ImageListItemBar
                        title="Title"
                        subtitle="subtitle"
                        position="below"
                    />
                </ImageListItem>
            </ImageList>
        </Box>
    )
}

export default MovieList;