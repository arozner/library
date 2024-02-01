// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import axios from 'axios';

// const schema = yup.object().shape({
//   username: yup.string().required('Username is required'),
//   password: yup.string().required('Password is required'),
//   idNumber: yup.string().matches(/^\d{9}$/, 'ID number must contain exactly 9 digits').required('ID number is required'),
//   phone: yup.string().matches(/^\d{9,15}$/, 'Phone number must be between 9 and 15 digits').required('Phone number is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
// });

// export default function NewLogin() {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const [formData, setFormData] = useState(null);
//   const [registrationStatus, setRegistrationStatus] = useState('');

//   const onSubmit = async (data) => {
//     setFormData(data); // Save form data in state
//     try {
//       const response = await axios.post('/api/registerUser', data);
//       if (response.status === 200) {
//         setRegistrationStatus('Registered successfully');
//       }
//     } catch (error) {
//       if (error.response.status === 404) {
//         setRegistrationStatus('User already exists. Please check your details.');
//       } else {
//         console.error('Error registering user:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       {registrationStatus && <p style={{ color: 'red' }}>{registrationStatus}</p>}
//       {!registrationStatus && (
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input type="text" id="username" {...register('username')} />
//             {errors.username && <span style={{ color: 'red' }}>{errors.username.message}</span>}
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" {...register('password')} />
//             {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
//           </div>
//           <div>
//             <label htmlFor="idNumber">ID number:</label>
//             <input type="text" id="idNumber" {...register('idNumber')} />
//             {errors.idNumber && <span style={{ color: 'red' }}>{errors.idNumber.message}</span>}
//           </div>
//           <div>
//             <label htmlFor="phone">Phone:</label>
//             <input type="tel" id="phone" {...register('phone')} />
//             {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" {...register('email')} />
//             {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// }


// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }





// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       idNumber: data.get('idNumber'),
//       name: data.get('name'),
//       phone: data.get('phone'),
//       password: data.get('password'),
//       email: data.get('email'),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="idNumber"
//                   label="Israeli ID Number"
//                   name="idNumber"
//                   autoComplete="id-number"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="name"
//                   label="Full Name"
//                   name="name"
//                   autoComplete="name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="phone"
//                   label="Phone Number"
//                   name="phone"
//                   autoComplete="tel"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }











import React, { useState, useEffect } from 'react';
import UserLogin from './UserLogin';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function NewLogin() {


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
    name: '',
    phone: '',
    idNumber: '',
    password: '',
    email: '',
  });

  const [registrationWasSuccessful, setRegistrationWasSuccessful] = useState("");
  const [userExist, setUserExist] = useState("");

  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (
        isValidName(formState.name) &&
        isValidPhone(formState.phone) &&
        isValidId(formState.idNumber) &&
        isValidPassword(formState.password) &&
        isValidEmail(formState.email)
      ) {console.log(formState);
        console.log(formState.name,formState.email);
        try {
          const response = await axios.post('http://localhost:9999/api/user/post', {
            name: formState.name,
            phone: formState.phone,
            idNumber: formState.idNumber,
            password: formState.password,
            email: formState.email,
          });
        
          console.log(response.data);
          // if(response.statusCode === 200){setRegistrationWasSuccessful(true)
          // console.log(registrationWasSuccessful);}

          if (response.status === 201) {
            setRegistrationWasSuccessful(true);
            console.log(registrationWasSuccessful)
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };
  
  const userExist2= ()=>{
    setUserExist(true);
  }

   useEffect(() => {
      // console.log('Registration status:', registrationWasSuccessful);
    }, [registrationWasSuccessful]);


   useEffect(() => {
      // console.log('Registration status:', userExist);
    }, [userExist]);


  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const isFormValid =
    isValidName(formState.name) &&
    isValidPhone(formState.phone) &&
    isValidId(formState.idNumber) &&
    isValidPassword(formState.password) &&
    isValidEmail(formState.email);

  return (
<>
    {!registrationWasSuccessful && !userExist ? (
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={!isValidName(formState.name)}
                  helperText={!isValidName(formState.name) ? 'Invalid name' : ''}
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  value={formState.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!isValidPhone(formState.phone)}
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
                  error={!isValidId(formState.idNumber)}
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
                  error={!isValidPassword(formState.password)}
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
                  error={!isValidEmail(formState.email)}
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
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: isFormValid ? 'blue' : 'inherit', color: '#fff' }}
              disabled={!isFormValid}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
  <Grid item>
    <Link href="#" variant="body2" onClick={userExist2}>
      Already have an account? Sign in
    </Link>
  </Grid>
</Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
    ) : null}
{registrationWasSuccessful && !userExist ? (
  <div>
    Registration was successful! You will now be redirected to the login page.
  </div>
) : null}

{registrationWasSuccessful||userExist ? <UserLogin /> : null}
</>


  );
}


