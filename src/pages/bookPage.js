import React from "react";
import AppBar from "../components/AppBar";
import "../pages/bookStyles.css";
import {CardMedia, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const book = {
    cover: 'https://static.yakaboo.ua/media/catalog/product/f/b/fbca87146bb849107d32a0ed9172f5d8.jpg',
    title: 'Гіпотеза кохання', genre: 'Романтика', author: 'Алі Гейзелвуд'
};

const books = [book, book, book];

export default function BookPage() {
    return (
        <div>
            <AppBar/>
            <div className="content">
                <div className="top">
                    <div className="image">
                        <CardMedia
                            component="img"
                            sx={{width: 150, height: 220, display: 'block'}}
                            image={book.cover}
                            alt={`Обкладинка книги ${book.title}`}
                        />
                    </div>
                    <div className="book-data">
                        <Typography variant="body1" component="div" sx={{ marginTop: 1}}>
                            {book.title}
                        </Typography>
                        <Typography variant="body2" component="div" sx={{ marginTop: 1}}>
                            {book.genre}
                        </Typography>
                        <Typography variant="body3" color="text.secondary">
                            {book.author}
                        </Typography>
                        <div className="reading">
                            <Button>Читаю
                                <img src="/" alt="icon"/>
                            </Button>
                        </div>
                        <div className="will-read">
                            <Button>Додати на полицю
                                <img src="/" alt="icon"/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="description">
                        <h2>Опис</h2>
                        <div className="description-text">Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                    <div className="recommended">
                        <h2>Рекомендовані до читання</h2>
                        <Grid container spacing={0}>
                            {books.map((book, index) => (
                                <Grid item xs={4} sm={4} md={2} lg={1.5} key={index} sx={{marginRight: 15}}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 150, height: 220, m: 'auto', display: 'block' }}
                                        image={book.cover}
                                        alt={`Обкладинка книги ${book.title}`}
                                    />
                                    <Typography variant="body1" color="text.secondary">
                                        {book.author}
                                    </Typography>
                                    <Typography variant="body2" component="div" sx={{ marginTop: 1}}>
                                        {book.title}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
}