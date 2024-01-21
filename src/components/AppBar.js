import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { useNavigate } from 'react-router-dom';
import LeftPanelDrawer from './MainMenuDrawer';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    let navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleExitClick = () => {
        navigate('/signin');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#212121' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 1.3, color: 'white' }}
                    >
                        BookShelf
                    </Typography>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="exit"
                        sx={{ marginLeft: 'auto' }}
                        onClick={handleExitClick}
                    >
                        <ExitToAppRoundedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <LeftPanelDrawer isOpen={drawerOpen} toggleDrawer={setDrawerOpen} />
        </Box>
    );
}
