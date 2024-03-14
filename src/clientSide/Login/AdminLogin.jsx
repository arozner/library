// import React from 'react'
import Home from '../Home'

import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import DataContext from "../context/DataContext";
import React, { useContext, useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from 'axios';
import Cookies from "js-cookie";

export default function AdminLogin() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkingEmailAndPassword, setCheckingEmailAndPassword] = useState(false);
  const [adminExists, setAdminExists] = useState(false);
  const {adminToken, setAdminToken} = useContext(DataContext); 

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      console.log(email);
    } else if (name === "password") {
      console.log(password);
      setPassword(value);
    }
  };

  useEffect(() => {
    if (password.length >= 6 && email.length > 0) {
      setCheckingEmailAndPassword(true);
    } else {
      setCheckingEmailAndPassword(false);
    }
  }, [email, password]);

 
  const checkUserExists = async (event) => {
    event.preventDefault();
    console.log('Checking user...');
   


    try {
      const response = await axios.post('http://localhost:9999/api/admin', {
        email: email,
        password: password,
      });
      if (response.data.data && response.data.token) {
        const adminId = response.data.data[0].id;
        const token = response.data.token;
        // const adminId = user.id;
    
        Cookies.set("admin", (token))
        setAdminExists(response.data.data[0]);
        console.log("admin:", Cookies.get("admin"));
        setAdminToken(Cookies.get("admin"));

        // if(Cookies.get("admin"))
      nav(`/admin/home/${adminId}`);
    
     
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
      {!checkingEmailAndPassword ? (
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
