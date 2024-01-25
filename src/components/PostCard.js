import React from 'react';
import {styled} from '@mui/material/styles';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    IconButton,
    Typography,
    Grid, Box
} from '@mui/material';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const posts = [
    {
        id: 1,
        author: 'R',
        date: 'September 14, 2016',
        title: 'Shrimp and Chorizo Paella',
        content: 'This impressive paella is a perfect party dish...',
        imageUrl: 'https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8c_fefaa1d2_XL.jpg',
    },
    {
        id: 1,
        author: 'R',
        date: 'September 14, 2016',
        title: 'Shrimp and Chorizo Paella',
        content: 'This impressive paella is a perfect party dish...',
        imageUrl: 'https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8c_fefaa1d2_XL.jpg',
    },
    {
        id: 1,
        author: 'R',
        date: 'September 14, 2016',
        title: 'Shrimp and Chorizo Paella',
        content: 'This impressive paella is a perfect party dish...',
        imageUrl: 'https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8c_fefaa1d2_XL.jpg',
    },
    {
        id: 1,
        author: 'R',
        date: 'September 14, 2016',
        title: 'Shrimp and Chorizo Paella',
        content: 'This impressive paella is a perfect party dish...',
        imageUrl: 'https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8c_fefaa1d2_XL.jpg',
    },
];
export default function PostCards() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{flexGrow: 1, overflow: 'hidden', px: 1, py: 1, marginLeft: 2, marginTop:4}}>
                <Typography variant="h5" color={"white"} gutterBottom component="div">
                    Останні дописи користувачів
                </Typography>
                <Typography variant="subtitle1" color={"white"} gutterBottom component="div" sx={{marginBottom: 2}}>
                    Дізнайтеся більше про прочитані книги
                </Typography>
                <Grid container spacing={2}>
                    {posts.map((post, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2.8} key={index} marginLeft={2}>
                            <Card sx={{maxWidth: 315}}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                            {post.author}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon/>
                                        </IconButton>
                                    }
                                    title={post.title}
                                    subheader={post.date}
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={post.imageUrl}
                                    alt={post.title}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {post.content}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon/>
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon/>
                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon/>
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
