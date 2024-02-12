
// import NewLogin from "./NewLogin";

// import UserHome from '../subscription/UserHome';
// import React, { useEffect, useState } from 'react';
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import axios from 'axios';

// export default function UserLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [newUser, setNewUser] = useState("");
//   const [checkingNameAndPassword, setCheckingNameAndPassword] = useState(false);
//   const [userExists, setUserExists] = useState(false);

//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     if (name === "username") {
//       setUsername(value);
//       console.log(username);
//     } else if (name === "password") {
//       console.log(password);
//       setPassword(value);
//     }
//   };

//   useEffect(() => {
//     if (password.length >= 6 && username.length > 0) {
//       setCheckingNameAndPassword(true);
//     } else {
//       setCheckingNameAndPassword(false);
//     }
//   }, [username, password]);

 
//   const checkUserExists = async (event) => {
//     event.preventDefault();
//     console.log('Checking user...');
  
//     try {
//       const response = await axios.post('http://localhost:9999/api/user', {
//         username: username,
//         password: password,
//       });
  
//       setUserExists(response.data);
//       console.log(response.data);
//       console.log(userExists);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   useEffect(() => {
//     console.log(userExists);
//   }, [userExists]);
//   // const newUsers= ()=>{

//   //   setNewUser(true);
//   // }

//   // useEffect(()=>{},[newUser])

//   return (
//     <>
    
    
//             {!userExists && !newUser ? (

//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
        
        
//   <form onSubmit={checkUserExists} noValidate>
//     <Box
//       component="div"
//       onChange={handleInput}
//       noValidate
//       sx={{ mt: 1 }}
//     >
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="username"
//         label="username"
//         name="username"
//         autoComplete="username"
//         autoFocus
//       />
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         name="password"
//         label="Password"
//         type="password"
//         id="password"
//         autoComplete="current-password"
//       />
//       {!checkingNameAndPassword ? (
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           disabled
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Sign In
//         </Button>
//       ) : (
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Sign In
//         </Button>
//       )}
//     </Box>
//   </form>

//   <Button   
//   fullWidth
//   variant="contained"
//   sx={{ bgcolor: 'green', color: 'white' }}
//   onClick={()=>{newUsers();}}>
//   new user
//             </Button>
//           </Box>
//         </Container>
//       ) : null}



//     {userExists ? <UserHome /> : null}
//     {newUser ? <NewLogin /> : null}


//     </>
//   );
// }







import NewLogin from "./NewLogin";
import UserHome from '../subscription/UserHome';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from 'axios';

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState("");
  const [checkingEmailAndPassword, setCheckingEmailAndPassword] = useState(false);
  const [userExists, setUserExists] = useState(false);
const nav = useNavigate();
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
    console.log(email, password);
  
    try {
      const response = await axios.post('http://localhost:9999/api/user/login', {
        email: email,
        password: password,
      });
      if (Array.isArray(response.data) && response.data.length > 0) {
        const userId = response.data[0].id;
        setUserExists(userId);
        nav(`/user/${userId}`);
        console.log(response.data);
        console.log(userId);
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    console.log(userExists);
    // if (userExists) {
    //   navigate(`/user/${userExists}`);
    // }
  }, [userExists]);

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
              Sign in User
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
            <Button   
              fullWidth
              variant="contained"
              sx={{ bgcolor: 'green', color: 'white' }}
              onClick={()=>{setNewUser(true);}}
            >
              New User
            </Button>
          </Box>
        </Container>
      ) : null}
   {/* {userExists ? (
  <>
    nav(`/user/${userExists}`)
  
  </>
) : null} */}

      {newUser ? <NewLogin /> : null}
    </>
  );
}
