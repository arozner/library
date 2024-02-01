
import NewLogin from "./NewLogin";

import UserHome from '../subscription/UserHome';
import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from 'axios';

export default function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState("");
  const [checkingNameAndPassword, setCheckingNameAndPassword] = useState(false);
  const [userExists, setUserExists] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
      console.log(username);
    } else if (name === "password") {
      console.log(password);
      setPassword(value);
    }
  };

  useEffect(() => {
    if (password.length >= 6 && username.length > 0) {
      setCheckingNameAndPassword(true);
    } else {
      setCheckingNameAndPassword(false);
    }
  }, [username, password]);

 
  const checkUserExists = async (event) => {
    event.preventDefault();
    console.log('Checking user...');
  
    try {
      const response = await axios.post('http://localhost:9999/api/user', {
        username: username,
        password: password,
      });
  
      setUserExists(response.data);
      console.log(response.data);
      console.log(userExists);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  useEffect(() => {
    console.log(userExists);
  }, [userExists]);
  // const newUsers= ()=>{

  //   setNewUser(true);
  // }

  // useEffect(()=>{},[newUser])

  return (
    <>
    
    
            {!userExists && !newUser ? (

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
          Sign in
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
        id="username"
        label="username"
        name="username"
        autoComplete="username"
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

  <Button   
  fullWidth
  variant="contained"
  sx={{ bgcolor: 'green', color: 'white' }}
  onClick={()=>{newUsers();}}>
  new user
            </Button>
          </Box>
        </Container>
      ) : null}



    {userExists ? <UserHome /> : null}
    {newUser ? <NewLogin /> : null}


    </>
  );
}
