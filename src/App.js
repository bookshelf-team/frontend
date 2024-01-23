import React from 'react';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserProfile from './pages/userProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/pages/userprofile" element={<UserProfile />} />
                <Route path="/" element={<SignIn />} index={true} />
            </Routes>
        </Router>
    );
}

export default App;
