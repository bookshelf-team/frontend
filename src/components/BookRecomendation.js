import React from 'react';
import { Box, Typography, Grid, CardMedia } from '@mui/material';

const books = [
    { title: 'Гіпотеза кохання', author: 'Алі Гейзелвуд', cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg'},
    { title: 'Гіпотеза кохання', author: 'Алі Гейзелвуд', cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg'},
    { title: 'Гіпотеза кохання', author: 'Алі Гейзелвуд', cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg'},
    { title: 'Гіпотеза кохання', author: 'Алі Гейзелвуд', cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg'},
    { title: 'Гіпотеза кохання', author: 'Алі Гейзелвуд', cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg'},
    { title: 'Гіпотеза кохання', author: 'Алі Гейзелвуд', cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg'},
    { title: 'Гіпотеза кохання', author: 'Алі Гейзелвуд', cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg'},
    { title: 'Гіпотеза кохання', author: 'Алі Гейзелвуд', cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg'},
];

export default function BookRecommendations() {
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 1, py: 1, marginLeft: 2 }}>
            <Typography variant="h5" gutterBottom component="div">
                Вам може сподобатися
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" sx={{marginBottom: 2}}>
                Рекомендовані підбірки книг
            </Typography>
            <Grid container spacing={0}>
                {books.map((book, index) => (
                    <Grid item xs={4} sm={4} md={2} lg={1.5} key={index}>
                        <CardMedia
                            component="img"
                            sx={{ width: 150, height: 220, m: 'auto', display: 'block' }}
                            image={book.cover}
                            alt={`Обкладинка книги ${book.title}`}
                        />
                        <Typography variant="body1" component="div" sx={{ textAlign: 'center', marginTop: 1}}>
                            {book.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            {book.author}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
