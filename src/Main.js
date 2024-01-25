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

function Copyright() {
    return (
        <Typography variant="body2" color="white" marginTop="30px" align="center">
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
            <Box sx={{bgcolor: '#1D1E23', p: 6}} component="footer" >
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    display="flex"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                >
                <List  sx={{display:"flex", alignSelf:"center", alignItems:"center", justifyContent:"center", width:"50%"}}>
                    <ListItem style={{color:"white"}}>Про нас</ListItem>
                    <ListItem style={{color:"white"}}>Новини</ListItem>
                    <ListItem style={{color:"white"}}>Для читачів</ListItem>
                    <ListItem style={{color:"white"}}>Технічна підтримка</ListItem>
                </List>
                </Typography>
                <Copyright/>
            </Box>
        </ThemeProvider>
    );
}
