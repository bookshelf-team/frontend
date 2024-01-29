import React from 'react';
import { Card, CardActionArea, CardMedia} from '@mui/material';

const BookCard = ({ book, isCatalog }) => {
    const handleClick = () => {
        if (isCatalog) {
        } else {
            window.open(book.url, '_blank');
        }
    };

    return (
        <Card sx={{ maxWidth: 165, maxHeight: 255}} onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    sx={{ width: 165, height: 255, m: 'auto', display: 'block' }}
                    image={book.coverImageUrl || book.image}
                />
            </CardActionArea>
        </Card>
    );
};

export default BookCard;
