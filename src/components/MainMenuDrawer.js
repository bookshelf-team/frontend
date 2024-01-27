import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link, useNavigate} from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import {useDispatch, useSelector} from "react-redux";
import {signOutSuccess} from "../redux/auth-reducer";

export default function LeftPanelDrawer({ isOpen, toggleDrawer }) {
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuth);
    const handleExitClick = () => {
        sessionStorage.removeItem('jwtToken');
        sessionStorage.removeItem('refreshToken');
        dispatch(signOutSuccess());
        navigate('/');
    };

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BookIcon style={{ color: '#23232B' }}></BookIcon>
                        </ListItemIcon>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ mr: 1.3, color: '#23232B', marginLeft: "-20px", fontWeight: "800" }}
                        >
                            BookShelf
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </List>
            {isAuthenticated ? (
                <div>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountCircleOutlinedIcon style={{ color: '#23232B' }} />
                                </ListItemIcon>
                                <Link to={'/pages/userProfile'} style={{ textDecoration: 'none', color: '#23232B' }}  >My Profile</Link>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={handleExitClick}>
                                <ListItemIcon>
                                    <LogoutOutlinedIcon style={{ color: '#23232B' }} />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
            ) : (
                <div>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <VpnKeyOutlinedIcon style={{ color: '#23232B' }} />
                                </ListItemIcon>
                                <Link to={'/signup'} style={{ textDecoration: 'none', color: '#23232B' }}>Sign Up</Link>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LoginOutlinedIcon style={{ color: '#23232B' }} />
                                </ListItemIcon>
                                <Link to={'/signin'} style={{ textDecoration: 'none', color: '#23232B' }}>Sign In</Link>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
            )}
        </Box>
    );

    return (
        <Drawer anchor='left' open={isOpen} onClose={() => toggleDrawer(false)}>
            {list}
        </Drawer>
    );
}
