import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserProfile from './pages/userProfile';
import Main from "./Main";
import ProfileEditDialog from "./components/ProfileEditDialog";
import SearchResultsPage from "./components/SearchResultsPage";
import BookPage from "./pages/bookPage";
import CatalogPage from "./components/CatalogPage";
import EditBook from "./components/editBook";
import AddBook from "./components/addBook";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/pages/userprofile" element={<UserProfile/>}/>
                <Route path="/" element={<Main/>} index={true}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/editprofile" element={<ProfileEditDialog/>}/>
                <Route path="/searchresults" element={<SearchResultsPage/>}/>
                <Route path="/book/:bookIsbn" element={<BookPage/>}/>
                <Route path="/catalogpage" element={<CatalogPage/>}/>
                <Route path="/addbook" element={<AddBook/>}/>
                <Route path="/editbook" element={<EditBook/>}/>
            </Routes>
        </Router>
    );
}

/*bookAPI.getBookById(1).then((book) => {
    console.log("Book by ID:", book);
});


bookAPI.getBooksByTitle("test").then((books) => {
    console.log("Books by Title:", books);
});

bookAPI.getBooksByAuthor("test").then((books) => {
    console.log("Books by Author:", books);
});

bookAPI.getBooksByGenre("fantasy").then((books) => {
    console.log("Books by Genre:", books);
});
bookAPI.getBookByIsbn(122233).then((books) => {
    console.log("Books by isbn:", books);
});
profileAPI.getProfileByUsername('annamak5').then((username) => {
    console.log("00000000:", username);
});

postAPI.getAllPosts().then(posts => {
    console.log('Усі пости:', posts);

}).catch(error => {
    console.error("Error fetching all posts:", error);
});
postAPI.getAllPostsByUsername('annamak5').then(posts => {
    console.log('МОЇ ПОСТИ:', posts);
}).catch(error => {
    console.error("Error fetching posts by username:", error);
});

const newPost = {
    "title": "Just a Post",
    "body": "Just a simple post body",
    "imageUrl": null
};
/*postAPI.addPost(newPost).then(response => {
    console.log(response);
    console.log('гуд');
}).catch(error => {
    console.error("Error adding a new post:", error);
});*/

/*const updatedPost = {
    "title": "Just a NEW Post",
    "body": "Just a NEW post body",
    "imageUrl": null
};
postAPI.updatePostById(3, updatedPost).then(updatedPost => {
    console.log('Оновлені пости:', updatedPost);
}).catch(error => {
    console.error("Error updating post by ID:", error);
});

postAPI.getPostById(1).then(post => {
    console.log('Пост 1:', post);
}).catch(error => {
    console.error("Error get post by ID:", error);
});*/

/*const bookData = {
    "author": "John Doe",
    "title": "Just a Book",
    "description": "Just a simple description",
    "publicationYear": 2024,
    "isbn": 123456789,
    "pageCount": 300,
    "coverImageUrl": null,
    "diskImageUrl": null,
    "genres": ["horror", "fantasy", "CHILDREN", "HuMor"]
}
bookAPI.addBook(bookData).then((result) => {
    console.log("Add BOOK:", result);
});*/
export default App;
