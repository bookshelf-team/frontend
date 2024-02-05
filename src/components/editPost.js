import React,  { useState } from "react";
import {Box, CssBaseline, IconButton, InputAdornment, ThemeProvider, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import {createTheme} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import Dialog from "@mui/material/Dialog";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const defaultTheme = createTheme();


export default function EditPost(){

    const [open, setOpen] = useState(false); 
    const handleClose = () => {
        setOpen(false);
    }; 

    return (

    <div>

        <Button onClick={() => setOpen(true)} sx={{ color: "white", marginRight: "40px" }}>Редагувати допис</Button>

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
                    <Typography variant="h4" fontWeight="700" >Редагувати допис</Typography>
                    <Typography component="p">Заповніть поля нижче</Typography>
                    <Box component="form" sx={{
                        mt: 1 
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
                              <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                    <Button component="span" endIcon={<DeleteOutlinedIcon/>}>
                                        Видалити фото
                                    </Button>
                                    <Button component="span" endIcon={<EditOutlinedIcon/>}>
                                        Замінити фото
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