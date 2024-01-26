import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppBar from './components/AppBar';
import BookRecommendations from './components/BookRecomendation';
import LastPostsUsers from './components/PostCard';
import List from '@mui/material/List';
import { Divider, ListItem } from '@mui/material';
import Footer from './components/Footer';


const defaultTheme = createTheme();

export default function Main() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <AppBar></AppBar>
            <main className='mainBg'>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: '#23232B',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <BookRecommendations></BookRecommendations>
                    <LastPostsUsers></LastPostsUsers>
                </Box>
            </main>
            {/* Footer */}
            <Footer/>
        </ThemeProvider>
    );
}
