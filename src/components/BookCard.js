import React from 'react';
import { Card, CardActionArea, CardMedia} from '@mui/material';
import {useNavigate} from "react-router-dom";

const BookCard = ({ book, isCatalog }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        if (isCatalog) {
        } else {
            if (book && book.isbn) {
                navigate(`/book/${book.isbn}`);
            } else {
                window.open(book.url, '_blank');
            }
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
