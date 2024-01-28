import React from 'react';
import { Card, CardActionArea, CardMedia } from '@mui/material';

const BookCard = ({ book, isCatalog }) => {
    const handleClick = () => {
        if (isCatalog) {
        } else {
            window.open(book.url, '_blank');
        }
    };

    return (
        <Card sx={{ maxWidth: 170, maxHeight: 240 }} onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    sx={{ width: 170, height: 240, m: 'auto', display: 'block' }}
                    image={book.image}
                />
            </CardActionArea>
        </Card>
    );
};

export default BookCard;
