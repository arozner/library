// import React from 'react'
import Home from '../Home'

import { Route, Routes, useNavigate, Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from 'axios';

export default function AdminLogin() {
  const nav = useNavigate();

  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const [checkingNameAndPassword, setCheckingNameAndPassword] = useState(false);
  const [adminExists, setAdminExists] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "adminName") {
      setAdminName(value);
      console.log(adminName);
    } else if (name === "password") {
      console.log(password);
      setPassword(value);
    }
  };

  useEffect(() => {
    if (password.length >= 6 && adminName.length > 0) {
      setCheckingNameAndPassword(true);
    } else {
      setCheckingNameAndPassword(false);
    }
  }, [adminName, password]);

 
  const checkUserExists = async (event) => {
    event.preventDefault();
    console.log('Checking user...');
   


    try {
      const response = await axios.post('http://localhost:9999/api/admin', {
        adminName: adminName,
        password: password,
      });

      if (Array.isArray(response.data) && response.data.length > 0) {
        const adminName = response.data[0].username;
        console.log(adminName);
        setAdminExists(response.data);
        nav(`/admin/${adminName}`);
        console.log(response.data);
        console.log(adminExists);

      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
   
  
  useEffect(() => {
    console.log(adminExists);
  }, [adminExists]);
  // useEffect(() => {
  //   const adminName = adminExists[0].adminName;
  //       nav(`/admin/${name1}`);

  // }, [adminExists]);
  
  // const newUsers= ()=>{

  //   setNewUser(true);
  // }

  // useEffect(()=>{},[newUser])

  return (
    <>
    
    
            {!adminExists  ? (

    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in Admin
        </Typography>
        
        
  <form onSubmit={checkUserExists} noValidate>
    <Box
      component="div"
      onChange={handleInput}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="adminName"
        label="adminName"
        name="adminName"
        autoComplete="adminName"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      {!checkingNameAndPassword ? (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      ) : (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      )}
    </Box>
  </form>

  
          </Box>
        </Container>
      ) : null}



    {/* {adminExists ? < Home 
 /> : null} */}


    </>
  );
}



// export default function AdminLogin() {
//   return (<>
//     <div>AdminLogin</div>
//     <Home/>
//     </>
//   )
// }
