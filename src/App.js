import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { signInSuccess } from './redux/auth-reducer';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserProfile from './pages/userProfile';
import Main from "./Main";
import ProfileEditDialog from "./components/ProfileEditDialog";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const jwtToken = sessionStorage.getItem('jwtToken');
        if (jwtToken) {
            dispatch(signInSuccess({ accessToken: jwtToken }));
        }
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/pages/userprofile" element={<UserProfile />} />
                <Route path="/" element={<Main />} index={true}/>
                <Route path="/main" element={<Main />}/>
                <Route path="/editprofile" element={<ProfileEditDialog />} />
            </Routes>
        </Router>
    );
}

export default App;
