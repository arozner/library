import { useState } from "react";
import Login from "./Login/Login";
import NewLogin from "./Login/NewLogin";
import AdminLogin from "./Login/AdminLogin";
import Home from "./Home";

import UserHome from "./subscription/UserHome";
import { Route, Routes, useNavigate, Link } from 'react-router-dom'

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import UserLogin from "./Login/UserLogin";
// import NewLogin from "./Login/NewLogin";
// import AdminLogin from "./Login/AdminLogin";
// import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
    <Route path='*' element={<Login />} />

<Route path='/' element= {<Login/>} />
<Route path='/userLogin' element= {<UserLogin/>} />
<Route path='/user/:id' element={<UserHome />} />
<Route path='/newLogin/' element={<NewLogin />} />
<Route path='/adminLogin/' element={<AdminLogin />} />
<Route path='/admin/:id' element={<Home />} />

</Routes>      
      
    </>
  );
}

export default App;
