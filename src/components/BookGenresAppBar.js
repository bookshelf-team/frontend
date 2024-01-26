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

const genres = [
    'Фантастика',
    'Детектив',
    'Роман',
    'Поезія',
    'Історія',
    'Наукова література',
    'Фантастика',
    'Детектив',
    'Роман',
    'Поезія',
    'Історія',
    'Наукова література',
];

export default function BookGenresAppBar({ isOpen, toggleDrawer, onGenreSelect }) {
    const handleGenreClick = (genre) => {
        onGenreSelect(genre);
        toggleDrawer(false);
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
        <Drawer anchor='top' open={isOpen} onClose={() => toggleDrawer(false)}>
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
