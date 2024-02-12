// import {useState} from "react";
// import { Route, Routes, useNavigate, Link } from 'react-router-dom'

// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import NewLogin from "./NewLogin";
// import AdminLogin from "./AdminLogin";
// import UserLogin from "./UserLogin.JSX";
// export default function Login() {

// const [loginType, setLoginType] = useState('');

//   const handleLogin = (type) => {
//     setLoginType(type);
//   };
  
// const navigate = useNavigate()
//   return (
//     <div className="login" >
   
    
//       {loginType === '' && (
//         <>
//    <Stack direction="row" spacing={2}>
//    <Button variant="contained" color="success" onClick={() => handleLogin('user')}>
//    users
// </Button>      <Button variant="contained" onClick={() => handleLogin('admin')}>
// admin
//       </Button>
//       <Button variant="outlined" color="secondary" onClick={() => handleLogin('register')}>
//       Not registered?<br /> Sign up now
//       </Button>
//     </Stack>
//            {/* <button className="login_button"  onClick={() => handleLogin('register')}>Not registered?<br /> Sign up now</button>
//           <button className="login_button" onClick={() => handleLogin('admin')}>Login as admin</button>
//           <button className="login_button" onClick={() => handleLogin('user')}>Login as existing user</button> */}
//           </>
//       )}
//      {loginType === 'register' && navigate('/NewLogin.jsx')}
//       {loginType === 'admin' && navigate('/AdminLogin')}
//       {loginType === 'user' && navigate('/UserLogin')}
//     </div>
//   );
// }





import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NewLogin from "./NewLogin";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin.JSX";

export default function Login() {
  const [loginType, setLoginType] = useState('');
  const navigate = useNavigate();

  const handleLogin = (type) => {
    setLoginType(type);
  };

  useEffect(() => {
    if (loginType === 'register') {
      navigate('/NewLogin.jsx');
    } else if (loginType === 'admin') {
      navigate('/AdminLogin');
    } else if (loginType === 'user') {
      navigate('/UserLogin');
    }
  }, [loginType, navigate]);

  return (
    <div className="login">
      {loginType === '' && (
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" onClick={() => handleLogin('user')}>
            Users
          </Button>
          <Button variant="contained" onClick={() => handleLogin('admin')}>
            Admin
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => handleLogin('register')}>
            Not registered?<br /> Sign up now
          </Button>
        </Stack>
      )}
     <Routes>
  <Route >
    {/* Your other routes here */}
    <Route path="/NewLogin.jsx" element={<NewLogin />} />
    <Route path="/AdminLogin" element={<AdminLogin />} />
    <Route path="/UserLogin" element={<UserLogin />} />
  </Route>
</Routes>
    </div>
  );
}
