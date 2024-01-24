import React from 'react';
import { useSelector } from 'react-redux';
import BooksGrid from './BooksGrid';
import AppBar from './AppBar';

const SearchResultsPage = () => {
    const books = useSelector((state) => state.bookSearch.searchResults);

    return (
        <div>
            <AppBar />
            <BooksGrid books={books} />
        </div>
    );
};
export default SearchResultsPage;
