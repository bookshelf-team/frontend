import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BooksGrid from './BooksGrid';
import AppBar from './AppBar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SearchResultsPage = () => {
    const navigate = useNavigate();
    const books = useSelector((state) => state.bookSearch.searchResults);

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div>
            <AppBar />
            <IconButton
                onClick={handleBackToHome}
                aria-label="back to home"
                style={{ color: 'white', marginLeft: '10px', marginTop: '30px' }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <BooksGrid books={books} isCatalog={false} />
        </div>
    );
};

export default SearchResultsPage;
