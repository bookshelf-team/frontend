import {Box, CssBaseline, IconButton, ThemeProvider, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import {createTheme} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React from "react";
import Button from "@mui/material/Button";
import StraightIcon from '@mui/icons-material/Straight';
import CloseIcon from '@mui/icons-material/Close';
import './addAndEditBookStyles.css';

const defaultTheme = createTheme();

export default function AddBook() {
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
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
                        />
                        <div className="uploadImage">
                            <input type="file" id="image-upload"/>
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
                            InputLabelProps={{ shrink: true }}
                        />
                        <Button variant="contained" component="span">
                            Готово
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}