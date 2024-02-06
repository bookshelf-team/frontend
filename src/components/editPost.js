import React, { useState, useEffect } from "react";
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
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts, updatePostById } from "../redux/post/postActions";
import "./editPost.css";

const defaultTheme = createTheme();

export default function EditPost() {
    const [open, setOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedDescription, setEditedDescription] = useState("");
    const [editedImageURL, setEditedImageURL] = useState("");
    const posts = useSelector((state) => state.posts.posts || []);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length) {
            dispatch(getAllPosts());
        }
    }, [dispatch, posts.length]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = (post) => {
        setSelectedPost(post);
        setEditedTitle(post.title);
        setEditedDescription(post.body);
        setEditedImageURL(post.imageUrl || ""); // Встановлюємо URL зображення
        setOpen(true);
    };

    const handleDeleteImage = () => {
        setEditedImageURL(""); // Очистити URL зображення
    };

    const handleSave = async () => {
        if (selectedPost) {
            const updatedPostData = {
                id: selectedPost.id,
                title: editedTitle,
                body: editedDescription,
                imageUrl: editedImageURL,
            };

            try {
                const updatedPost = await dispatch(updatePostById(selectedPost.id, updatedPostData));
                console.log("Успішно оновлено пост:", updatedPost);
                setOpen(false);
            } catch (error) {
                console.error("Помилка при оновленні посту:", error);
            }
        }
    };

    return (
        <div>
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}{" "}
                        <button className="edit-button" onClick={() => handleEdit(post)}>Редагувати допис</button>
                    </li>
                ))}
            </ul>

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
                                Редагувати допис
                            </Typography>
                            <Typography component="p">Заповніть поля нижче</Typography>
                            <Box
                                component="form"
                                sx={{
                                    mt: 1,
                                }}
                            >
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="post-title"
                                    label="Заголовок"
                                    name="title"
                                    autoComplete="post title"
                                    autoFocus
                                    placeholder="Введіть текст..."
                                    value={editedTitle}
                                    onChange={(e) => setEditedTitle(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton edge="start"></IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="post-image-url"
                                    label="Посилання на зображення"
                                    name="image-url"
                                    autoComplete="post image-url"
                                    placeholder="Вставте посилання на зображення..."
                                    value={editedImageURL}
                                    onChange={(e) => setEditedImageURL(e.target.value)} // Оновлення URL зображення
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton edge="start"></IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Button
                                        component="span"
                                        endIcon={<DeleteOutlinedIcon />}
                                        onClick={handleDeleteImage} // Обробник для видалення фото
                                    >
                                        Видалити фото
                                    </Button>
                                    <Button
                                        component="span"
                                        endIcon={<EditOutlinedIcon />}
                                        onClick={handleSave}
                                    >
                                        Зберегти зміни
                                    </Button>
                                </div>

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="post-description"
                                    label="Допис"
                                    name="description"
                                    autoComplete="post description"
                                    placeholder="Введіть текст..."
                                    value={editedDescription}
                                    onChange={(e) => setEditedDescription(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton edge="start"></IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                                <Button
                                    variant="contained"
                                    component="span"
                                    sx={{
                                        width: "100%",
                                        bgcolor: "#746BD1",
                                        marginTop: "10px",
                                        marginBottom: "5px",
                                    }}
                                    onClick={handleSave}
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
