import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppBar from './components/AppBar';
import BookRecommendations from './components/BookRecomendation';
import LastPostsUsers from './components/PostCard';
import Footer from './components/Footer';
import {useNavigate} from "react-router-dom";

const defaultTheme = createTheme();

export default function Main() {
    const navigate = useNavigate();

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
                    <button onClick={function () {navigate("/book");}}>BookPage</button>
                    <BookRecommendations></BookRecommendations>
                    <LastPostsUsers></LastPostsUsers>
                </Box>
            </main>
            {/* Footer */}
            <Footer/>
        </ThemeProvider>
    );
}
