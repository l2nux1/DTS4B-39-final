import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton, Menu, MenuItem } from '@mui/material';
import useUserStore, { selectOnLogout } from '../store/user';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

const Account = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const onLogout = useUserStore(selectOnLogout);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogout = async () => {
        await onLogout();
        navigate("/login");
        handleMenuClose()
    };

    const handleLogin = async () => {
        navigate("/login");
        handleMenuClose();
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const menuId = 'primary-search-account-menu';
    const renderMenuLogout = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            open={isMenuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    );

    const renderMenuLogin = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            open={isMenuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleLogin}>Login</MenuItem>
        </Menu>
    );

    return (
        <>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                aria-controls={menuId}
                onClick={handleProfileMenuOpen}
            >
                <AccountCircle />
            </IconButton>
            {(user != null) ? renderMenuLogout : renderMenuLogin}
        </>
    )
}

export default Account;