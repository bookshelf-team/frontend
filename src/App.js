import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserProfile from './pages/userProfile';
import Main from "./Main";
import ProfileEditDialog from "./components/ProfileEditDialog";
import SearchResultsPage from "./components/SearchResultsPage";
import BookPage from "./pages/bookPage";
import CatalogPage from "./components/CatalogPage";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/pages/userprofile" element={<UserProfile />} />
                <Route path="/" element={<Main />} index={true}/>
                <Route path="/main" element={<Main />}/>
                <Route path="/editprofile" element={<ProfileEditDialog />} />
                <Route path="/searchresults" element={<SearchResultsPage />} />
                <Route path="/book" element={<BookPage/>}/>
                <Route path="/catalogpage" element={<CatalogPage />} />
            </Routes>
        </Router>
    );
}

export default App;
