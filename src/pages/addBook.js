import {Box, CssBaseline, IconButton, ThemeProvider, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import {createTheme} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import Button from "@mui/material/Button";
import StraightIcon from '@mui/icons-material/Straight';
import CloseIcon from '@mui/icons-material/Close';
import './addAndEditBookStyles.css';
import {useDispatch} from "react-redux";
import {addBook} from "../redux/addBooks/addBooksService";

const defaultTheme = createTheme();

export default function AddBook() {
    const [bookData, setBookData] = useState({
        author: "John Doe",
        title: "Just a Book",
        description: "Just a simple description",
        publicationYear: 2024,
        isbn: 1234567890123,
        pageCount: 300,
        genres: ["horror"]
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const data = await dispatch(addBook(bookData));
            console.log(data);
        } catch (error) {
            console.error("Error during handling submit: " + error);
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <IconButton aria-label="Close">
                        <CloseIcon/>
                    </IconButton>
                    <Typography component="h2">Додати нову книгу</Typography>
                    <Typography component="p">Заповніть поля нижче</Typography>
                    <Box component="form" sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Назва книги"
                            name="title"
                            autoComplete="book title"
                            autoFocus
                            placeholder="Введіть текст..."
                            InputLabelProps={{shrink: true}}
                            value={bookData.title}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="author"
                            label="Автор"
                            name="author"
                            autoComplete="book author"
                            placeholder="Введіть текст..."
                            InputLabelProps={{shrink: true}}
                            value={bookData.author}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="genre"
                            label="Жанр"
                            name="genre"
                            autoComplete="book genre"
                            placeholder="Введіть текст..."
                            InputLabelProps={{shrink: true}}
                            value={bookData.genres}
                            onChange={handleChange}
                        />
                        <div className="uploadImage">
                            <input type="file" id="image-upload" value={bookData.coverImageUrl}
                                   onChange={handleChange}/>
                            <label htmlFor="image-upload">
                                <Button component="span" endIcon={<StraightIcon/>}>
                                    Завантажити
                                </Button>
                            </label>
                        </div>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="description"
                            label="Короткий опис"
                            name="description"
                            autoComplete="book description"
                            placeholder="Введіть текст..."
                            InputLabelProps={{shrink: true}}
                            value={bookData.description}
                            onChange={handleChange}
                        />
                        <Button variant="contained" onClick={handleSubmit}>
                            Готово
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}