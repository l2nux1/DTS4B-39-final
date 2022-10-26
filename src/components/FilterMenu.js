import * as React from 'react';
import MenuIcons from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FilterMenu = (props) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (sort) => {
        setAnchorEl(null);
        console.log(props.path)
        navigate(`${props.path}?sort=${sort}`)
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
            <MenuItem onClick={() => (handleMenuClose('asc'))}>Sort Release Date (Asc)</MenuItem>
            <MenuItem onClick={() => (handleMenuClose('desc'))}>Sort Release Date (Des)</MenuItem>
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
                sx={props.menu?{ visibility: 'visible', mr: 2 }:{ visibility: 'hidden', mr: 2 }}
            >
                <MenuIcons />
            </IconButton>
            {renderMenu}
        </>
    )
}

export default FilterMenu;