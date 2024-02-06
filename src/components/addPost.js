import React, { useState } from "react";
import {
    Box,
    CssBaseline,
    IconButton,
    InputAdornment,
    ThemeProvider,
    Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/post/postActions";

const defaultTheme = createTheme();

export default function AddPost() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [imageUrl, setImageUrl] = useState("https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1707091200&semt=sph");
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setBody(event.target.value);
    };

    const handleImageURLChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const postData = {
            title: title,
            body: body,
            imageUrl: imageUrl,
        };

        console.log("Дані, які відправляються:", postData);

        try {
            await dispatch(addPost(postData));
            console.log("Додано новий пост");
            handleClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Button
                onClick={() => setOpen(true)}
                sx={{ color: "white", marginRight: "40px" }}
            >
                Додати допис
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 5,
                                marginBottom: 5,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <IconButton
                                aria-label="Close"
                                onClick={() => setOpen(false)}
                                sx={{ marginBottom: "10px" }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h4" fontWeight="700">
                                Додати новий допис
                            </Typography>
                            <Typography component="p">Заповніть поля нижче</Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="post-title"
                                    label="Заголовок"
                                    name="title"
                                    autoComplete="post title"
                                    autoFocus
                                    placeholder="Введіть текст..."
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                {/* You can place an icon here if needed */}
                                            </InputAdornment>
                                        ),
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                    onChange={handleTitleChange}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    multiline
                                    id="post-image"
                                    label="Посилання на зображення"
                                    name="image"
                                    placeholder="Вставте посилання на зображення..."
                                    onChange={handleImageURLChange}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                {/* You can place an icon here if needed */}
                                            </InputAdornment>
                                        ),
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    multiline
                                    rows={4}
                                    id="post-description"
                                    label="Допис"
                                    name="description"
                                    autoComplete="post description"
                                    placeholder="Введіть текст..."
                                    onChange={handleDescriptionChange}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                        ),
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        width: "100%",
                                        bgcolor: "#746BD1",
                                        marginTop: "10px",
                                        marginBottom: "5px",
                                    }}
                                >
                                    Готово
                                </Button>
                            </form>
                        </Box>
                    </Container>
                </ThemeProvider>
            </Dialog>
        </div>
    );
}
