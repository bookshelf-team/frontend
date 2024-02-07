import React, {useState} from "react";
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
import {useDispatch} from "react-redux";
import {addBook} from "../redux/addBooks/addBooksService";
import Autocomplete from "@mui/material/Autocomplete";

const defaultTheme = createTheme();

export default function AddBook() {
    const [open, setOpen] = useState(false);
    const [bookData, setBookData] = useState({
        author: "",
        title: "",
        description: "",
        publicationYear: 2024,
        isbn: "",
        pageCount: 300,
        coverImageUrl: "https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1707091200&semt=sph",
        diskImageUrl: null,
        genres: [],
    });

    const dispatch = useDispatch();

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

    const genresList = Object.values(genreTranslations);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        const englishGenres = bookData.genres.map(genre => {
            for (const [key, value] of Object.entries(genreTranslations)) {
                if (value === genre) {
                    return key;
                }
            }
        });
        await dispatch(addBook({...bookData, genres: englishGenres}));
        handleClose();
    };


    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setBookData({
            ...bookData,
            [name]: value,
        });
    };

    const handleGenresChange = (event, newValue) => {
        setBookData({
            ...bookData,
            genres: newValue,
        });
    };

    return (
        <div>
            <Button onClick={() => setOpen(true)} sx={{color: "white", marginRight: "40px"}}>
                Додати книгу
            </Button>

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
                            <IconButton aria-label="Закрити" onClick={handleClose} sx={{marginBottom: "10px"}}>
                                <CloseIcon/>
                            </IconButton>
                            <Typography variant="h4" fontWeight="700">
                                Додати нову книгу
                            </Typography>
                            <Typography component="p">Заповніть поля нижче</Typography>
                            <Box component="form" sx={{mt: 1}}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="title"
                                    label="Назва книги"
                                    name="title"
                                    autoFocus
                                    placeholder="Введіть текст..."
                                    InputLabelProps={{shrink: true}}
                                    value={bookData.title}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="author"
                                    label="Автор"
                                    name="author"
                                    placeholder="Введіть текст..."
                                    InputLabelProps={{shrink: true}}
                                    value={bookData.author}
                                    onChange={handleInputChange}
                                />
                                <Autocomplete
                                    multiple
                                    id="genre"
                                    options={genresList}
                                    getOptionLabel={(option) => option}
                                    value={bookData.genres}
                                    onChange={handleGenresChange}
                                    renderInput={(params) => (
                                        <TextField {...params} margin="normal" fullWidth label="Жанр" name="genre"
                                                   autoComplete="book genre" placeholder="Виберіть або введіть жанри"
                                                   InputLabelProps={{shrink: true}}/>
                                    )}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="coverImageUrl"
                                    label="URL зображення книги"
                                    name="coverImageUrl"
                                    placeholder="Введіть URL зображення книги..."
                                    InputLabelProps={{shrink: true}}
                                    value={bookData.coverImageUrl}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="diskImageUrl"
                                    label="URL диска з книгою"
                                    name="diskImageUrl"
                                    placeholder="Введіть URL диска з книгою..."
                                    InputLabelProps={{shrink: true}}
                                    value={bookData.diskImageUrl}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="pageCount"
                                    label="Кількість сторінок"
                                    name="pageCount"
                                    type="number"
                                    placeholder="Введіть кількість сторінок..."
                                    InputLabelProps={{shrink: true}}
                                    value={bookData.pageCount}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    multiline
                                    rows={4}
                                    id="description"
                                    label="Короткий опис"
                                    name="description"
                                    placeholder="Введіть текст..."
                                    InputLabelProps={{shrink: true}}
                                    value={bookData.description}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="publicationYear"
                                    label="Рік публікації"
                                    name="publicationYear"
                                    type="number"
                                    placeholder="Введіть рік..."
                                    InputLabelProps={{shrink: true}}
                                    value={bookData.publicationYear}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="isbn"
                                    label="ISBN"
                                    name="isbn"
                                    placeholder="Введіть ISBN..."
                                    InputLabelProps={{shrink: true}}
                                    value={bookData.isbn}
                                    onChange={handleInputChange}
                                />
                                <Button
                                    variant="contained"
                                    component="span"
                                    sx={{width: "100%", bgcolor: "#746BD1", marginTop: "10px", marginBottom: "5px"}}
                                    onClick={handleSubmit}
                                >
                                    Готово
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </Dialog>
        </div>
    );
}
