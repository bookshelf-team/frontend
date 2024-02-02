import React, { useEffect } from 'react';
import { Box, Typography, Grid, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults } from '../redux/getBooks/getBooksActions';
import { getAllBooks } from '../redux/getBooks/getBooksService';

export default function BookRecommendations() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const books = await dispatch(getAllBooks());
                dispatch(setSearchResults(books));
            } catch (error) {
                console.error("Error while fetching books:", error);
            }
        };

        fetchBooks();
    }, [dispatch]);

    const recommendedBooks = useSelector((state) => state.bookCatalogSearch.searchResultsCatalog);

    const displayedBooks = Array.isArray(recommendedBooks) && recommendedBooks.length >= 8
        ? recommendedBooks.slice(0, 8)
        : [];

    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 1, py: 1, marginLeft: 2 }}>
            <Typography variant="h5" gutterBottom component="div" color="white">
                Вам може сподобатися
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" color="white" sx={{ marginBottom: 2 }}>
                Рекомендовані підбірки книг
            </Typography>
            <Grid container spacing={0}>
                {displayedBooks.map((book, index) => (
                    <Grid item xs={4} sm={4} md={2} lg={1.5} key={index}>
                        <Link to={`/book/${book.isbn}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 150, height: 250, m: 'auto', display: 'block' }}
                                image={book.coverImageUrl || 'fallback-image-url.jpg'}
                                alt={`Обкладинка книги ${book.title}`}
                            />
                            <Typography variant="body1" component="div" color="white" sx={{ textAlign: 'center', marginTop: 1 }}>
                                {book.title}
                            </Typography>
                            <Typography variant="body2" color="white" sx={{ textAlign: 'center' }}>
                                {book.author}
                            </Typography>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
