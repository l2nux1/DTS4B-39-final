import { EmojiEmotions, Logout, Menu } from '@mui/icons-material';
import {
    IconButton,
    Typography,
    Toolbar,
    Box,
    AppBar,
    Button
} from '@mui/material';

import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import SearchBox from './SearchBox';
import Account from './Account';

const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button sx={{ color: '#fff' }}>
                            Movies
                        </Button>
                        <Button sx={{ color: '#fff' }}>
                            TV Shows
                        </Button>

                    </Box>

                    <SearchBox text={"Search.."} />
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