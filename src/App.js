import React from 'react';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<SignIn />} index={true} />
            </Routes>
        </Router>
    );
}

export default App;
