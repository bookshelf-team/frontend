import React from 'react';
import { useSelector } from 'react-redux';
import BooksGrid from './BooksGrid';
import AppBar from './AppBar';

const CatalogPage = () => {
    const catalogBooks = useSelector((state) => state.catalog.books);

    return (
        <div>
            <AppBar />
            <h1>Catalog</h1>
            <BooksGrid books={catalogBooks} />
        </div>
    );
};

export default CatalogPage;
