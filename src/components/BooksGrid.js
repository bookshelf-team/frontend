import React from 'react';
import Grid from '@mui/material/Grid';
import BookCard from './BookCard';

const BooksGrid = ({ books }) => {
    return (
        <Grid container spacing={1}>
            {books.map((book, index) => (
                <Grid item key={index} sx={{ flexGrow: 1, overflow: 'hidden', px: 1, py: 1, marginLeft: 2, marginTop: 5 }}>
                    <BookCard book={book} />
                </Grid>
            ))}
        </Grid>
    );
};

export default BooksGrid;
