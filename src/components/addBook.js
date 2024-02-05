import React,  { useState } from "react";
import {Box, CssBaseline, IconButton, InputAdornment, ThemeProvider, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import {createTheme} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import Dialog from "@mui/material/Dialog";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const defaultTheme = createTheme();

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function AddBook(){

    const [open, setOpen] = useState(false); 
    const handleClose = () => {
        setOpen(false);
    }; 

    return (

    <div>

        <Button onClick={() => setOpen(true)} sx={{ color: "white", marginRight: "40px" }}>Додати книгу</Button>

        <Dialog open={open} onClose={handleClose}>
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box sx={{
                    marginTop: 5,
                    marginBottom: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <IconButton aria-label="Close" onClick={() => setOpen(false)} sx={{marginBottom:"10px"}}>
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="h4" fontWeight="700" >Додати нову книгу</Typography>
                    <Typography component="p">Заповніть поля нижче</Typography>
                    <Box component="form" sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="title"
                            label="Назва книги"
                            name="title"
                            autoComplete="book title"
                            autoFocus
                            placeholder="Введіть текст..."
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton edge="start">
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="author"
                            label="Автор"
                            name="author"
                            autoComplete="book author"
                            placeholder="Введіть текст..."
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton edge="start">
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="genre"
                            label="Жанр"
                            name="genre"
                            autoComplete="book genre"
                            placeholder="Введіть текст..."
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton edge="start">
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} 
                            InputLabelProps={{ shrink: true }}
                        />
                                <Button component="label"  variant="outlined" startIcon={<CloudUploadIcon />}>
                                    Завантажити фото
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                        
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            multiline
                            rows={4}
                            id="description"
                            label="Короткий опис"
                            name="description"
                            autoComplete="book description"
                            placeholder="Введіть текст..."
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton edge="start">
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{ shrink: true }}
                        />
                        <Button variant="contained" component="span" sx={{width:"100%", bgcolor:"#746BD1", marginTop:"10px", marginBottom:"5px"}}>
                            Готово
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

        </Dialog>
    
    </div>
    )
}