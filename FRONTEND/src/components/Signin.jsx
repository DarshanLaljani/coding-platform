import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CottageIcon from '@mui/icons-material/Cottage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
function Copyright(props) {

    return (
        <Typography variant="body2" color="white" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Code Boost
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const navigateTo = useNavigate(); // Initialize useHistory

    // Function to handle "Practice" button click
    const handleHome = () => {
        // Navigate to the '/practice' route
        navigateTo('/');
    };

    const [successMessage, setSuccessMessage] = useState('')

    const [error, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Send form data to the backend API
        console.log(formData)
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData, { withCredentials: true })

            // loggedIn = true;
            setSuccessMessage("Logged in Successfully")
            // Clear success message after 2 seconds
            setTimeout(() => {
                setSuccessMessage('');

            }, 1000);


            // You can reset the form fields here if needed
            setFormData({
                email: '',
                password: ''
            });

            // dispatch({ type: 'USER', payload: true })
            setTimeout(() => {
                handleHome();
            }, 1500);
        }
        catch (error) {
            // If there's an error, show an error toast notification
            setErrorMessage("Failed to Login")
            console.log(error);
            // Clear success message after 2 seconds
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <a href="/"><Button><CottageIcon sx={{ fontSize: 50 }} style={{ marginLeft: '1rem', marginTop: '1rem' }} /></Button></a>
            <Container component="main" maxWidth="xs" sx={{ border: '1px solid white', borderRadius: '8px', padding: '16px', marginTop: '3rem' }}>


                <Box
                    sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5"  >
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {error && <p className="mb-2 text-center text-red-600 text-lg font-bold">{error}</p>}
                        {successMessage && <p className="mb-2 text-center text-green-600 text-lg font-bold">{successMessage}</p>}

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: 'white' } }}
                            sx={{ border: '1px solid white', borderRadius: '8px', color: 'white' }}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            InputLabelProps={{ style: { color: 'white' } }}
                            type="password"
                            onChange={handleChange}
                            value={formData.password}
                            sx={{ border: '1px solid white', borderRadius: '8px', color: 'white' }}
                            id="password"

                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item >
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}