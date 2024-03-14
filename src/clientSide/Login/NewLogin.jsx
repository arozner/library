




import React, { useState, useEffect } from 'react';
import UserLogin from './UserLogin';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom';
import { Route, Routes, useNavigate, Link } from 'react-router-dom'


import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function NewLogin() {
  const nav = useNavigate();


  function isValidName(name) {
    return /^[a-zA-Z]{2,}$/.test(name);
  }

  function isValidPhone(phone) {
    return /^\d{9,16}$/.test(phone);
  }

  function isValidId(id) {
    return /^\d{9}$/.test(id);
  }

  function isValidPassword(password) {
    return /^[a-zA-Z0-9]{6,15}$/.test(password);
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const defaultTheme = createTheme();

  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    idNumber: '',
    password: '',
    email: '',
  });

  const [registrationWasSuccessful, setRegistrationWasSuccessful] = useState("");
  const [userExist, setUserExist] = useState("");
  const [touchedFields, setTouchedFields] = useState({});
  const [registrationError, setRegistrationError] = useState('');

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isValidName(formState.first_name) &&
      isValidName(formState.last_name) &&
      isValidPhone(formState.phone) &&
      isValidId(formState.idNumber) &&
      isValidPassword(formState.password) &&
      isValidEmail(formState.email)
    ) {
      try {
        const response = await axios.post('http://localhost:9999/api/books', {
          first_name: formState.first_name,
          last_name: formState.last_name,
          phone: formState.phone,
          idNumber: formState.idNumber,
          password: formState.password,
          email: formState.email,
        });

        if (response.status === 201) {
          setRegistrationWasSuccessful(true);
          setFormState({
            first_name: '',
            last_name: '',
            phone: '',
            idNumber: '',
            password: '',
            email: '',
          });
          setRegistrationError('');
          nav(`/userLogin`);

        }
      } catch (error) {
        setRegistrationError('Registration failed. Please try again.');
        console.error('Error:', error);
      }
    }
  };

  const userExist2 = () => {
    setUserExist(true);
  };

  useEffect(() => {
    console.log('Registration status:', registrationWasSuccessful);
  }, [registrationWasSuccessful]);

  useEffect(() => {
    console.log('Registration status:', userExist);
  }, [userExist]);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });
  };


  const isFormValid =
    isValidName(formState.first_name) &&
    isValidName(formState.last_name) &&
    isValidPhone(formState.phone) &&
    isValidId(formState.idNumber) &&
    isValidPassword(formState.password) &&
    isValidEmail(formState.email);

  return (
    <>
      {/* {!registrationWasSuccessful && !userExist ? ( */}
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar> */}
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {/* <TextField
                    
                      error={!isValidName(formState.first_name)}
                      helperText={!isValidName(formState.first_name) ? 'Invalid first name' : ''}
                      required
                      fullWidth
                      id="first_name"
                      label="First Name"
                      name="first_name"
                      autoComplete="given-name"
                      value={formState.first_name}
                      onChange={handleChange}
                    /> */}

<TextField
  error={touchedFields.first_name && !isValidName(formState.first_name)}
  helperText={!isValidName(formState.first_name) ? 'Invalid first name' : ''}
  required
  fullWidth
  id="first_name"
  label="First Name"
  name="first_name"
  autoComplete="given-name"
  value={formState.first_name}
  onChange={handleChange}
/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={touchedFields.last_name &&!isValidName(formState.last_name)}
                      helperText={!isValidName(formState.last_name) ? 'Invalid last name' : ''}
                      required
                      fullWidth
                      id="last_name"
                      label="Last Name"
                      name="last_name"
                      autoComplete="given-name"
                      value={formState.last_name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={touchedFields.phone &&!isValidPhone(formState.phone)}
                      helperText={!isValidPhone(formState.phone) ? 'Invalid phone number' : ''}
                      required
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      name="phone"
                      autoComplete="tel"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={touchedFields.idNumber &&!isValidId(formState.idNumber)}
                      helperText={!isValidId(formState.idNumber) ? 'Invalid ID number' : ''}
                      required
                      fullWidth
                      id="idNumber"
                      label="Israeli ID Number"
                      name="idNumber"
                      autoComplete="id-number"
                      value={formState.idNumber}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={touchedFields.password &&!isValidPassword(formState.password)}
                      helperText={!isValidPassword(formState.password) ? 'Invalid password' : ''}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={touchedFields.email &&!isValidEmail(formState.email)}
                      helperText={!isValidEmail(formState.email) ? 'Invalid email address' : ''}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                {/* <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: isFormValid ? 'blue' : 'inherit', color: '#fff' }}
                  disabled={!isFormValid}
                >
                  Sign Up
                </Button> */}

<Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isFormValid}
      >
        Sign Up
      </Button>
      {registrationError && (
        <Typography color="error">{registrationError}</Typography>
      )}
                
                {/* <Grid container justifyContent="flex-end">
                  <Grid item>
                    
                    <Link href="#" variant="body2" onClick={userExist2}>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid> */}

<Grid container justifyContent="flex-end">
  <Grid item>
    <Button 
    // variant="contained"
    // disableElevation
    
    onClick={() => {
      userExist2();
      nav(`/`);
    }}>
      Already have an account? Sign in
    </Button>
  </Grid>
</Grid>

              </Box>
            </Box>
          </Container>
        </ThemeProvider>
    
    </>
  );
}
