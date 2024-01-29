import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, CardMedia } from '@mui/material';
import axios from 'axios';

export default function BookRecommendations() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8080/book/all');
                if (response.status === 200) {
                    setBooks(response.data);
                    setLoading(false);
                } else {
                    setError('API request returned a non-200 status code');
                    setLoading(false);
                }
            } catch (error) {
                setError('Error while fetching data: ' + error.message);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <p></p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 1, py: 1, marginLeft: 2 }}>
            <Typography variant="h5" gutterBottom component="div" color={"white"}>
                Вам може сподобатися
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" color={"white"} sx={{ marginBottom: 2 }}>
                Рекомендовані підбірки книг
            </Typography>
            <Grid container spacing={0}>
                {books.slice(0, 8).map((book, index) => (
                    <Grid item xs={4} sm={4} md={2} lg={1.5} key={index}>
                        <CardMedia
                            component="img"
                            sx={{ width: 150, height: 250, m: 'auto', display: 'block' }}
                            image={book.coverImageUrl || 'fallback-image-url.jpg'}
                            alt={`Обкладинка книги ${book.title}`}
                        />
                        <Typography variant="body1" component="div" color={"white"} sx={{ textAlign: 'center', marginTop: 1 }}>
                            {book.title}
                        </Typography>
                        <Typography variant="body2" color={"white"} sx={{ textAlign: 'center' }}>
                            {book.author}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
