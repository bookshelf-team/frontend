import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookIcon from '@mui/icons-material/Book';
import List from "@mui/material/List";
import {useDispatch} from "react-redux";
import {searchBooksByGenre} from "../redux/getBooks/getBooksService";
import {setSearchResults} from "../redux/getBooks/getBooksActions";
import {useNavigate} from "react-router-dom";

const genreMappings = {
    'Фентезі': 'Fantasy',
    'Пригоди': 'Adventure',
    'Романтика': 'Romance',
    'Сучасна література': 'Contemporary',
    'Дистопія': 'Dystopian',
    'Містика': 'Mystery',
    'Жахи': 'Horror',
    'Трилер': 'Thriller',
    'Паранормальне': 'Paranormal',
    'Історична художня література': 'Historical_Fiction',
    'Наукова фантастика': 'Science_Fiction',
    'Дитяча література': 'Children',
    'Мемуари': 'Memoir',
    'Кулінарна книга': 'Cookbook',
    'Мистецтво': 'Art',
    'Самодопомога': 'Self_Help',
    'Особистісний розвиток': 'Personal_Development',
    'Мотиваційна література': 'Motivational',
    'Здоровя': 'Health',
    'Історія': 'History',
    'Подорожі': 'Travel',
    'Путівник': 'Guide',
    'Відносини': 'Relationships',
    'Гумор': 'Humor',
};

export default function BookGenresAppBar({ isOpen, toggleDrawer }) {
    let navigate = useNavigate();
    const genres = Object.keys(genreMappings);
    const dispatch = useDispatch();

    const handleGenreClick = async (genre) => {
        toggleDrawer(false);
        try {
            const englishGenre = genreMappings[genre];
            const books = await searchBooksByGenre(englishGenre);
            console.log(englishGenre);
            dispatch(setSearchResults(books));
            navigate('/catalogpage');
        } catch (error) {

        }
    };

    const columns = genres.reduce((acc, genre, index) => {
        const columnIndex = Math.floor(index / 6);
        if (!acc[columnIndex]) {
            acc[columnIndex] = [];
        }
        acc[columnIndex].push(
            <ListItem disablePadding key={genre}>
                <ListItemButton onClick={() => handleGenreClick(genre)}>
                    <ListItemIcon>
                        <BookIcon style={{ color: '#23232B' }} />
                    </ListItemIcon>
                    <ListItemText primary={genre} style={{ color: '#23232B' }} />
                </ListItemButton>
            </ListItem>
        );
        return acc;
    }, []);

    return (
        <Drawer anchor="top" open={isOpen} onClose={() => toggleDrawer(false)}>
            <Box
                sx={{ width: 'auto' }}
                role="presentation"
                onClick={() => toggleDrawer(false)}
                onKeyDown={() => toggleDrawer(false)}
            >
                <Grid container spacing={2}>
                    {columns.map((column, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <List>{column}</List>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Drawer>
    );
}
