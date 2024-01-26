import * as React from 'react';
import { Container } from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import '../pages/profileStyles.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import ProfileEditDialog from '../components/ProfileEditDialog';
import Footer from '../components/Footer';
import BookComponent from '../components/BookComponent';


export default function UserProfile() {

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
};

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
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(

        <Box sx={{ width: '100%', 
                    height:'100%',
                    backgroundColor:'#23232B', 
                    }}>
            <header className='profile-header'>
                <Button variant="text" sx={{color:"white", }} >Новий допис</Button>
                <ProfileEditDialog></ProfileEditDialog>
            </header>            
            <Box sx={{  width: '100%', 
                        height:'100%',
                        backgroundColor:'#1D1E23', 
                        marginTop:'20%', 
                        borderTopLeftRadius:'50px',
                        borderTopRightRadius:'50px',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        }}>
                <Box sx={{display: 'flex', width:'90%', position:'relative', top:'-55px', alignItems:'flex-end',}}>
                    <Avatar sx={{ background:"gray", width:'140px', height:'160px', borderRadius:'15px',marginRight:'20px' }} variant="square">N</Avatar>
                    <Box sx={{display: 'flex', flexDirection: 'column',}}>
                        <Typography variant="h3" color={'white'}>John Doe</Typography>
                        <Typography variant="h6" color={'white'}>@john_doe</Typography>
                    </Box>
                </Box>
                <Box sx={{width:'90%', padding:"0",position:'relative', top:'-30px', color:'white', }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                    aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore</Box>
            
              <Box sx={{ width: '100%', 
                        backgroundColor: '#96BF8B',
                        borderTopLeftRadius:'40px',
                        borderTopRightRadius:'40px',
                     }}
                >
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width:'100%' }}>
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
            <BookComponent/>
          <Footer />
      </Box>
    );
}