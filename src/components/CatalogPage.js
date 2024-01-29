import React from 'react';
import { useSelector } from 'react-redux';
import BooksGrid from './BooksGrid';
import AppBar from './AppBar';
import {Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {useNavigate} from "react-router-dom";

const CatalogPage = () => {
    const books = useSelector((state) => state.bookCatalogSearch.searchResultsCatalog);
    const navigate = useNavigate();

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
