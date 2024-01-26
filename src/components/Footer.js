import React from 'react';
import { Box, Typography, List, ListItem} from '@mui/material';


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

export default function Footer(){
    return(
        <Box sx={{bgcolor: '#1D1E23', paddingTop:6,paddingBottom:6, width:"100%", marginTop:"50px"}} component="footer" >
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
    );
}