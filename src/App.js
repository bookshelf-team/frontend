import React from 'react';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserProfile from './pages/userProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Main";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/pages/userprofile" element={<UserProfile />} />
                <Route path="/" element={<SignIn />} index={true} />
                <Route path="/" element={<Main/>} index={true} />
            </Routes>
        </Router>
    );
}

export default App;
