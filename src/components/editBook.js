import React, {useState, useEffect} from "react";
import {
    Box,
    CssBaseline,
    IconButton,
    ThemeProvider,
    Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import {createTheme} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import {useDispatch, useSelector} from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import {getBookByIsbn} from "../redux/getBooks/getBooksService";
import {editBookByIsbn} from "../redux/addBooks/addBooksService";

const defaultTheme = createTheme();

export default function EditBook() {
    const [open, setOpen] = useState(true);
    const [formData, setFormData] = useState({});
    const currentBooks = useSelector((state) => state.bookByIsbn.books);
    const dispatch = useDispatch();
    console.log(currentBooks);

    const genreTranslations = {
        "FANTASY": "Фентезі",
        "ADVENTURE": "Пригодницький",
        "ROMANCE": "Романтика",
        "CONTEMPORARY": "Сучасний",
        "DYSTOPIAN": "Дистопія",
        "MYSTERY": "Таємниця",
        "HORROR": "Жахи",
        "THRILLER": "Трилер",
        "PARANORMAL": "Паранормальний",
        "HISTORICAL_FICTION": "Історична художня література",
        "SCIENCE_FICTION": "Наукова фантастика",
        "CHILDREN": "Дитячий",
        "MEMOIR": "Мемуари",
        "COOKBOOK": "Кулінарна книга",
        "ART": "Мистецтво",
        "SELF_HELP": "Самодопомога",
        "PERSONAL_DEVELOPMENT": "Особистісний розвиток",
        "MOTIVATIONAL": "Мотиваційний",
        "HEALTH": "Здоров'я",
        "HISTORY": "Історія",
        "TRAVEL": "Подорожі",
        "GUIDE": "Путівник",
        "RELATIONSHIPS": "Відносини",
        "HUMOR": "Гумор"
    };

    useEffect(() => {
        dispatch(getBookByIsbn(45566784));
    }, [dispatch]);


    useEffect(() => {
        currentBooks.forEach((currentBook) => {
            setFormData((prevFormData) => ({
                ...prevFormData,
                title: currentBook.title || "",
                author: currentBook.author || "",
                description: currentBook.description || "",
                publicationYear: currentBook.publicationYear || "",
                isbn: currentBook.isbn || "",
                pageCount: currentBook.pageCount || "",
                coverImageUrl: currentBook.coverImageUrl || "",
                diskImageUrl: currentBook.diskImageUrl || "",
                genres: mapGenres(currentBook.genres) || []
            }));
        });
    }, [currentBooks]);

    const mapGenres = (genres) => {
        return genres.map(genre => {
            if (genre.name.startsWith('GENRE_')) {
                return genre.name.replace('GENRE_', '');
            } else {
                return genre.name;
            }
        });
    };


    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        dispatch(editBookByIsbn(45566784, formData));
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 5,
                            marginBottom: 5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <IconButton
                            aria-label="Закрити"
                            onClick={handleClose}
                            sx={{marginBottom: "10px"}}
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h4" fontWeight="700">
                            Редагувати книгу
                        </Typography>
                        <Typography component="p">
                            Змініть дані нижче
                        </Typography>
                        <Box component="form" sx={{mt: 1}}>
                            <div>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="author"
                                    label="Автор книги"
                                    name="author"
                                    placeholder="Введіть автора книги"
                                    InputLabelProps={{shrink: true}}
                                    value={formData.author}
                                    onChange={handleChange}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="description"
                                    label="Опис книги"
                                    name="description"
                                    placeholder="Введіть опис книги"
                                    InputLabelProps={{shrink: true}}
                                    multiline
                                    rows={4}
                                    value={formData.description}
                                    onChange={handleChange}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="publicationYear"
                                    label="Рік публікації"
                                    name="publicationYear"
                                    placeholder="Введіть рік публікації"
                                    InputLabelProps={{shrink: true}}
                                    type="number"
                                    value={formData.publicationYear}
                                    onChange={handleChange}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="isbn"
                                    label="ISBN"
                                    name="isbn"
                                    placeholder="Введіть ISBN"
                                    InputLabelProps={{shrink: true}}
                                    value={formData.isbn}
                                    onChange={handleChange}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="pageCount"
                                    label="Кількість сторінок"
                                    name="pageCount"
                                    placeholder="Введіть кількість сторінок"
                                    InputLabelProps={{shrink: true}}
                                    type="number"
                                    value={formData.pageCount}
                                    onChange={handleChange}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="coverImageUrl"
                                    label="URL обкладинки"
                                    name="coverImageUrl"
                                    placeholder="Введіть URL обкладинки"
                                    InputLabelProps={{shrink: true}}
                                    value={formData.coverImageUrl}
                                    onChange={handleChange}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="diskImageUrl"
                                    label="URL диску"
                                    name="diskImageUrl"
                                    placeholder="Введіть URL диску"
                                    InputLabelProps={{shrink: true}}
                                    value={formData.diskImageUrl}
                                    onChange={handleChange}
                                />

                                <Autocomplete
                                    multiple
                                    id="genres"
                                    options={Object.keys(genreTranslations)}
                                    getOptionLabel={(option) => genreTranslations[option]}
                                    onChange={(event, newValue) => setFormData({
                                        ...formData,
                                        genres: newValue || []
                                    })}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            margin="normal"
                                            fullWidth
                                            label="Жанри"
                                            name="genres"
                                            autoComplete="book genres"
                                            placeholder="Виберіть або введіть жанри"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                    value={formData.genres || []}
                                />
                            </div>
                            <Button
                                variant="contained"
                                component="span"
                                sx={{
                                    width: "100%",
                                    bgcolor: "#746BD1",
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}
                                onClick={handleSubmit}
                            >
                                Зберегти зміни
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </Dialog>
    );
}
