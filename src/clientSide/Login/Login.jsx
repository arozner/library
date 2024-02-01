import {useState} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NewLogin from "./NewLogin";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin.JSX";
export default function Login() {
//   const x=1;
//   return (
    
//     <>
//       <div>Login</div>
   
//       <AdminLogin/>
//       <UserLogin/>
//       <NewLogin/>
//     </>
//   );
// }
const [loginType, setLoginType] = useState('');

  const handleLogin = (type) => {
    setLoginType(type);
  };

  return (
    <div className="login" >
   
    
      {loginType === '' && (
        <>
   <Stack direction="row" spacing={2}>
   <Button variant="contained" color="success" onClick={() => handleLogin('user')}>
   users
</Button>      <Button variant="contained" onClick={() => handleLogin('admin')}>
admin
      </Button>
      <Button variant="outlined" color="secondary" onClick={() => handleLogin('register')}>
      Not registered?<br /> Sign up now
      </Button>
    </Stack>
           {/* <button className="login_button"  onClick={() => handleLogin('register')}>Not registered?<br /> Sign up now</button>
          <button className="login_button" onClick={() => handleLogin('admin')}>Login as admin</button>
          <button className="login_button" onClick={() => handleLogin('user')}>Login as existing user</button> */}
          </>
      )}
      {loginType === 'register' &&  <NewLogin/>}
      {loginType === 'admin' && <AdminLogin/>}
      {loginType === 'user' && <UserLogin/>}
    </div>
  );
}