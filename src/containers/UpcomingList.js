import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'
import UpcomingCard from '../components/UpcomingCard';

const  UpcomingMovie= (props) =>{
    var items = [
        {
            title: "Black Panther: Wakanda Forever",
            poster: "https://image.tmdb.org/t/p/original/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
            overview: "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda."
            
        },
        {
            title: "The Bad Guys",
            poster: "https://image.tmdb.org/t/p/original/9IDJpHROaC0S1ZlIxrvzOcOX5yC.jpg",
            overview: "When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison."
        },
        {
            title: "One Piece Film Red",
            poster: "https://image.tmdb.org/t/p/original/54PmeEzQMvpojpJBku61ZGQnWUX.jpg",
            overview: "Uta — the most beloved singer in the world. Her voice, which she sings with while concealing her true identity, has been described as “otherworldly.” She will appear in public for the first time at a live concert. As the venue fills with all kinds of Uta fans — excited pirates, the Navy watching closely, and the Straw Hats led by Luffy who simply came to enjoy her sonorous performance — the voice that the whole world has been waiting for is about to resound."
        }
    ]
    
    return (
        <Box sx={{ width: '100%' }}>
            <Carousel
                next={ () => {/* Do stuff */} }
                prev={ () => {/* Do other stuff */} }
            >
                {
                    items.map( (item, i) => <UpcomingCard key={i} item={item} /> )
                }
            </Carousel>
        </Box>
        
    )
}

export default UpcomingMovie