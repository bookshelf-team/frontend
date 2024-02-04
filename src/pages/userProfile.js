import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import '../pages/profileStyles.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Avatar, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import ProfileEditDialog from '../components/ProfileEditDialog';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDispatch, useSelector} from "react-redux";
import {getUsernameFromLocalStorage} from "../redux/auth-utils";
import {getProfileByUsername} from "../redux/profile/profileService";

export default function UserProfile() {
    let navigate = useNavigate();
    const handleGoHome = () => {
        navigate('/');
    };

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);
    const [username, setUsername] = useState(getUsernameFromLocalStorage());
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile.profile);

    useEffect(() => {
        const storedUsername = getUsernameFromLocalStorage();
        if (storedUsername) {
            setUsername(storedUsername);
            console.log(storedUsername);
            dispatch(getProfileByUsername(storedUsername));
        }
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', height: '100%', backgroundColor: '#23232B' }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1201 }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="go home"
                    onClick={handleGoHome}
                >
                    <ArrowBackIcon sx={{ color: 'white', marginLeft: 2 }} />
                </IconButton>
            </Box>
            <header className='profile-header'>
                <Button variant="text" sx={{ color: "white", }}>Новий допис</Button>
                <ProfileEditDialog></ProfileEditDialog>
            </header>
            <Box sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#1D1E23',
                marginTop: '20%',
                borderTopLeftRadius: '50px',
                borderTopRightRadius: '50px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Box sx={{ display: 'flex', width: '90%', position: 'relative', top: '-55px', alignItems: 'flex-end', }}>
                    <Avatar
                        sx={{
                            background: "gray",
                            width: '140px',
                            height: '160px',
                            borderRadius: '15px',
                            marginRight: '20px'
                        }}
                        variant="square"
                        src={profile && profile.avatar ? profile.avatar : undefined}
                        alt={`${profile && profile.firstName ? profile.firstName : ''} ${profile && profile.lastName ? profile.lastName : ''}`}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                        <Typography variant="h3" color={'white'}>
                            {profile && profile.firstName && profile.lastName
                                ? `${profile.firstName} ${profile.lastName}`
                                : username
                            }
                        </Typography>
                        {profile && (
                            <Typography variant="h6" color={'white'}>@{username}</Typography>
                        )}
                    </Box>
                </Box>
                <Box sx={{ width: '90%', padding: "0", position: 'relative', top: '-30px', color: 'white', }}>
                    {profile && (
                        <Typography variant="body1" color={'white'}>
                            {profile.about}
                        </Typography>
                    )}
                </Box>

                <Box sx={{
                    width: '100%',
                    backgroundColor: '#96BF8B',
                    borderTopLeftRadius: '40px',
                    borderTopRightRadius: '40px',
                }}
                >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Дописи" {...a11yProps(0)} />
                            <Tab label="Читаю" {...a11yProps(1)} />
                            <Tab label="Буду читати" {...a11yProps(2)} />
                            <Tab label="Прочитане" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        Item One
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                </Box>
            </Box>
        </Box>
    );

}
