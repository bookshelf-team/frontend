import React from 'react';
import { Card, CardActionArea, CardMedia} from '@mui/material';

const BookCard = ({ book }) => {
    return (
        <Card sx={{ maxWidth: 170, maxHeight: 240}}>
            <CardActionArea href={book.url} target="_blank">
                <CardMedia
                    sx={{ width: 170, height: 240, m: 'auto', display: 'block' }}
                    image={book.image}
                />
            </CardActionArea>
        </Card>
    );
};

export default BookCard;
