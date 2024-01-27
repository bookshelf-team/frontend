import React, {useState} from 'react';
import { Typography, Box, CardMedia } from '@mui/material';
import LongMenu from './BookSmallMenu';


const book = {
    cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg',
    title: 'Гіпотеза кохання', genre: 'Романтика', author: 'Алі Гейзелвуд'
};

// const books = [book, book, book];



export default function BookComponent(){
    return(
        <Box sx={{display:"flex", flexDirection:"row", width:"100%", alignItems:"center", justifyContent:"center"}}>
            
            <Box sx={{display:"flex", flexDirection:"row",  width:"90%",padding:"20px", border:"solid", borderRadius:5, borderColor:"#1D1E23", }}>
            <CardMedia component="img" sx={{ width: 150, height: 220}}
                        image={book.cover}
                        alt={`Обкладинка книги ${book.title}`}
            />
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"flex-end", marginLeft:"30px"}}>
                <Typography variant='h5' sx={{}}> {book.title} </Typography>
                <Typography> {book.author} </Typography>
                <Typography> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the re 
                </Typography>
            </Box>
            <LongMenu />
            </Box>
        </Box>
    );
}