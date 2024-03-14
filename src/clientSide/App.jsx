import { useState } from "react";
// import Login from "./Login/Login";
// import NewLogin from "./Login/NewLogin";
// import AdminLogin from "./Login/AdminLogin";
// import Home from "./Home";
// import UserHome from "./subscription/UserHome";
// import DataContext from "../context/DataContext";
import Content from "./Content";
import Cookies from "js-cookie";


// import { Route, Routes, useNavigate, Link } from "react-router-dom";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import UserLogin from "./Login/UserLogin";
// import NewLogin from "./Login/NewLogin";
// import AdminLogin from "./Login/AdminLogin";
// import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);
  const [changeBooks, setchangeBooks] = useState(true);
 
  return (
   <Content/>
  );
}

export default App;
