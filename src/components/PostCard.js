import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Typography, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, CardActions, Collapse } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import {getAllPosts} from "../redux/post/postActions";
import {ExpandMore} from "@mui/icons-material";

export default function PostCards() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const [expanded, setExpanded] = React.useState(false);
    console.log('fjfhfhfhfh', posts);
    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const displayedPosts = Array.isArray(posts) && posts.length >= 4
        ? posts.slice(0, 4)
        : [];

    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 1, py: 1, marginLeft: 2, marginTop: 4 }}>
            <Typography variant="h5" color={"white"} gutterBottom component="div">
                Останні дописи користувачів
            </Typography>
            <Typography variant="subtitle1" color={"white"} gutterBottom component="div" sx={{ marginBottom: 2 }}>
                Дізнайтеся більше про прочитані книги
            </Typography>
            <Grid container spacing={2}>
                {displayedPosts.map((post, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2.8} key={index} marginLeft={2}>
                        <Card sx={{ maxWidth: 315 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={post.title}
                                subheader={post.publicationDate}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={post.imageUrl}
                                alt={post.title}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {post.body}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                {/* Додатковий вміст */}
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
