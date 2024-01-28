import React from 'react';
import { useSelector } from 'react-redux';
import BooksGrid from './BooksGrid';
import AppBar from './AppBar';
import BookGenresAppBar from './BookGenresAppBar';

const CatalogPage = () => {
    const books = useSelector((state) => state.books);

    return (
        <div>
            <AppBar />
            <BookGenresAppBar />
            <h1>Catalog</h1>
            <BooksGrid books={books} />
        </div>
    );
};

export default CatalogPage;
