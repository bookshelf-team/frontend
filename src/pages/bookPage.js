import React from "react";
import AppBar from "../components/AppBar";
import {Box, CardMedia, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ClassIcon from '@mui/icons-material/Class';
import Footer from "../components/Footer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import {useDispatch} from "react-redux";
import {addBookToProfile} from "../redux/profile/profileService";

const book = {
    cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg',
    title: 'Гіпотеза кохання', genre: 'Романтика', author: 'Алі Гейзелвуд'
};

const books = [book, book, book];

export default function BookPage() {
    const dispatch = useDispatch();

    const bookToProfileRelationRequest = {
        username: "test",
        bookId: 1,
        relationType: "read",
    };

    const handleBookAdding = async () => {
        try {
            const addedBook = await dispatch(addBookToProfile(bookToProfileRelationRequest));
            console.log("Book added successfully: ", addedBook);
        } catch (error) {
            console.error("Error during adding book to profile: " + error);
        }
    }

    return (
        <Box>
            <AppBar/>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%"}}>
                <Box sx={{display:"flex", width:"90%", marginTop:"50px", alignItems:"flex-end"}} >
                    <Box className="image">
                        <CardMedia
                            component="img"
                            sx={{width: 150, height: 220, display: 'block', marginRight:"30px"}}
                            image={book.cover}
                            alt={`Обкладинка книги ${book.title}`}
                        />
                    </Box>
                    <Box sx={{color:"white"}}>
                    <Breadcrumbs aria-label="breadcrumb" marginBottom="75px">
                        <Link underline="hover" color="white" href="/">
                            MUI
                        </Link>
                        <Link underline="hover" color="white" href="/material-ui/getting-started/installation/" >
                            Core
                        </Link>
                        <Typography color="white">Breadcrumbs</Typography>
                    </Breadcrumbs>
                        <Typography variant="body1" component="div" sx={{ marginTop: 1}}>
                            {book.title}
                        </Typography>
                        <Typography variant="body2">
                            {book.author}
                        </Typography>
                        <Typography variant="body2" component="div" sx={{opacity:"0.4"}}>
                            {book.genre}
                        </Typography>
                        <Button variant="outlined" sx={{ marginTop:"15px", marginRight:"15px", color:"white"}}>Читаю
                            <ClassIcon sx={{marginLeft:"10px"}}/>
                        </Button>
                        <Button variant="outlined" sx={{marginTop:"15px", color:"white"}}
                                onClick={() => handleBookAdding()}>Додати на полицю
                            <CollectionsBookmarkIcon sx={{marginLeft:"10px"}}/> 
                        </Button>   
                    </Box>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", width:"90%"}} >
                    <Box color="white">
                        <Typography variant="h5" marginTop="50px">Опис</Typography>
                        <Typography width="70%" marginTop="20px" >Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    </Box>
                    <Box color="white">
                        <Typography variant="h5" marginTop="50px">Рекомендовані до читання</Typography>
                        <Grid marginTop="20px" container spacing={0}>
                            {books.map((book, index) => (
                                <Grid item xs={4} sm={4} md={2} lg={1.5} key={index} sx={{marginRight: 15}}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 150, height: 220,  display: 'block' }}
                                        image={book.cover}
                                        alt={`Обкладинка книги ${book.title}`}
                                    />
                                     <Typography variant="body1" component="div" sx={{ marginTop: 1}}>
                                        {book.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{opacity:"0.4"}}>
                                        {book.author}
                                    </Typography>
                                   
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
                <Footer/>
            </Box>
        </Box>
    );
}