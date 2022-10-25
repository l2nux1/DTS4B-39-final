import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Account = () => {
    const [user] = useAuthState(auth);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            open={isMenuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {/*<MenuItem>Welcome {user.displayName ?? user.email}</MenuItem>*/}
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>SignOut</MenuItem>
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
            {renderMenu}
        </>
    )
}

export default Account;