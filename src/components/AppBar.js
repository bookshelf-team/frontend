import React, {useState} from 'react';
import {styled, alpha} from '@mui/material/styles';
import {AppBar, Box, Toolbar, IconButton, Typography, InputBase, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import {useNavigate} from 'react-router-dom';
import LeftPanelDrawer from './MainMenuDrawer';
import {useDispatch, useSelector} from 'react-redux';
import {signIn, signOut} from '../redux/auth-reducer';
import { searchBooksByDBooksAPI } from '../redux/bookSearchService';
import { setSearchResults } from '../redux/bookSearchActions';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import BookGenresAppBar from "./BookGenresAppBar";

const Search = styled('div')(({theme}) => ({
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

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
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
    const isAuthenticated = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [topDrawerOpen, setTopDrawerOpen] = useState(false);

    const openBookCatalogue = () => {
        setTopDrawerOpen(true);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleExitClick = () => {
        dispatch(signOut());
        navigate('/signin');
    };

    const handleLoginClick = () => {
        dispatch(signIn());
        navigate('/signin');
    };

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = async () => {
        if (searchQuery) {
            const dBooksResults = await searchBooksByDBooksAPI(searchQuery);
            dispatch(setSearchResults(dBooksResults));
            console.log(dBooksResults);
            navigate('/searchresults');
        }
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: '#212121'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 1.3, color: 'white'}}
                    >
                        BookShelf
                    </Typography>

                    <Button
                        variant="h6"
                        startIcon={<LibraryBooksRoundedIcon />}
                        color="inherit"
                        onClick={openBookCatalogue}
                        sx={{ textTransform: 'none', size: 40 }}
                    >
                        Book Catalogue
                    </Button>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    handleSearch();
                                    console.log('жмяк');
                                }
                            }}
                        />
                    </Search>

                    {isAuthenticated ? (
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="exit"
                            sx={{marginLeft: 'auto'}}
                            onClick={handleExitClick}
                            title={"Вийти з профілю"}
                        >
                            <ExitToAppRoundedIcon/>
                        </IconButton>
                    ) : (
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="login"
                            sx={{marginLeft: 'auto'}}
                            onClick={handleLoginClick}
                            title={"Увійти в профіль"}
                        >
                            <LoginRoundedIcon/>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <LeftPanelDrawer isOpen={drawerOpen} toggleDrawer={setDrawerOpen}/>
            <BookGenresAppBar isOpen={topDrawerOpen} toggleDrawer={setTopDrawerOpen} />
        </Box>
    );
}
