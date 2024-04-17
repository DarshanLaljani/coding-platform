import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MainListItems from './listItems';
import { Button } from '@mui/material';
import ProfileSection from "./ProfileSection";
import Cookies from 'js-cookie'
import LogoImage from '../../public/image.png';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6A1B9A',
    },
    secondary: {
      main: '#FF9800',
    },
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export default function Home() {
  const navigateTo = useNavigate();
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const storedUserData = Cookies.get('userData');
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleLogin = async () => {
    const response = await axios.get('http://localhost:5000/api/getuser');
    Cookies.set('userData', response.data);

    // setTimeout(() => {
    navigateTo('/login');
    // }, 1000);
  };

  const handleRegister = () => {
    navigateTo('/register');
  };

  const handleLogout = () => {
    setUserData("");
    Cookies.remove('userData');

    // setTimeout(() => {
    navigateTo('/logout');
    // }, 1000);
  };

  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={LogoImage} alt="Logo" style={{ marginRight: '0.5rem', width: '40px', height: '40px' }} />
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  fontWeight="bold"
                  sx={{ flexGrow: 1 }}
                >
                  Code Boost
                </Typography>
              </div>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button sx={{ marginRight: '8px', fontWeight: 'bold', color: 'white ' }}>About Us</Button>
              {userData === 'Hello' ? (
                <>
                  <Button onClick={handleLogout} sx={{ borderColor: '#6A1B9A', color: '#6A1B9A', marginRight: '8px' }} variant="outlined">Logout</Button>
                </>
              ) : (
                <>
                  <Button onClick={handleLogin} sx={{ bgcolor: '#6A1B9A', marginRight: '8px', fontWeight: 'bold' }} color="inherit">Log In</Button>
                  <Button onClick={handleRegister} sx={{ borderColor: '#6A1B9A', color: 'white', marginRight: '8px', fontWeight: 'bold' }} variant="outlined">Sign Up</Button>
                </>
              )}

            </Box>

          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems />
          </List>
        </Drawer>

        <Container
          sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            // backgroundImage: 'url(/image.png)',
            justifyContent: 'center',
            // backgroundSize: 'cover',
            overflow: 'hidden',
            transition: 'margin-left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
            position: 'relative',

          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              maxwidth: '100vw',
              maxHeight: '100vh',
              objectFit: 'cover'

            }}
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white', // Set text color
            }}
          >
            <h1 style={{ fontSize: '5rem', marginBottom: '0.5rem', fontWeight: "bolder" }}>CODE BOOST</h1>
            <h2 style={{ fontSize: '1.5rem' }}>Enhance your coding journey</h2>
          </div>
        </Container>

      </Box>
    </ThemeProvider>
  );
}
