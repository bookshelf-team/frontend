import React from 'react';
import { useSelector } from 'react-redux';
import BooksGrid from './BooksGrid';
import AppBar from './AppBar';
import {Typography} from "@mui/material";

const CatalogPage = () => {
    const books = useSelector((state) => state.bookCatalogSearch.searchResultsCatalog);

    return (
        <div>
            <AppBar />
            {books.length > 0 ? (
                <BooksGrid books={books} />
            ) : (
                <Typography variant="h6" color="textSecondary" style={{ textAlign: 'center', marginTop: '20px', color: 'white', fontSize: 23 }}>
                    За вашим запитом нічого не знайдено
                </Typography>
            )}
        </div>
    );
};

export default CatalogPage;
