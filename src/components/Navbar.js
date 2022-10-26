import { Menu } from '@mui/icons-material';
import {
    IconButton,
    Toolbar,
    Box,
    AppBar,
    Button
} from '@mui/material';

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';
import Account from './Account';
import FilterManu from './FilterMenu'


const Navbar = () => {
    const navigate = useNavigate();
    const [popular, setPopular] = React.useState(false)
    const [trending, setTrending] = React.useState(false)
    const [home, setHome] = React.useState(false)
    const [nowPlaying, setNowPlaying] = React.useState(false)
    const [upcoming, setUpcoming] = React.useState(false)
    const [menu, setMenu] = React.useState(false)
    const [search, setSearch] = React.useState(false)
    const [path, setPath] = React.useState(false)

    /*const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };*/

    const buttons = [
        { title: 'Home', path: '/', onState: () => setHome(true), offState: () => setHome(false), getState: home},
        { title: 'Upcoming', path: '/upcoming', onState: () => setUpcoming(true), offState: () => setUpcoming(false), getState: upcoming},
        { title: 'Now Playing', path: '/now-playing', onState: () => setNowPlaying(true), offState: () => setNowPlaying(false), getState: nowPlaying},
        { title: 'Trending', path: '/trending', onState: () => setTrending(true), offState: () => setTrending(false), getState: trending},
        { title: 'Popular', path: '/popular', onState: () => setPopular(true), offState: () => setPopular(false), getState: popular}
    ]

    const gotoPage = (param) => {
        buttons.forEach((button)=>{
            button.offState()
        })
        navigate(`${param}?sort=desc`)
        setPath(param)
        const obj = buttons.find(o => o.path === param)
        obj.onState()

        if (param === '/'){
            setMenu(false)
            setSearch(false)
        }
        else{
            setMenu(true)
            setSearch(true)
        }
    }

    return (        
        <Box sx={{ display: 'flex' }}>
            <AppBar>
                <Toolbar>
                    <FilterManu menu={menu} path={path}/>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {buttons.map((button, id) => (
                           <Button key={id} sx={ button.getState ? { color: 'red' } : { color: 'white' }} onClick={() => {
                                gotoPage(button.path)
                            }}>
                                {button.title}
                            </Button> 
                        ))}                        
                    </Box>

                    <SearchBox text={"Search.."} search={search}/>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Account />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;