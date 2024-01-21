import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppBar from './components/AppBar';
import BookRecommendations from './components/BookRecomendation';
import LastPostsUsers from './components/PostCard';
import List from '@mui/material/List';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
               Bookshelf
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Main() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <AppBar></AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <BookRecommendations></BookRecommendations>
                    <LastPostsUsers></LastPostsUsers>
                </Box>
            </main>
            {/* Footer */}
            <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                <List>
                    Про нас
                    Новини
                    Інформація для читачів
                    Технічна підтримка
                </List>
                </Typography>
                <Copyright/>
            </Box>
        </ThemeProvider>
    );
}
