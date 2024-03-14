
import { useEffect, useState } from "react";
import Login from "./Login/Login";
import NewLogin from "./Login/NewLogin";
import AdminLogin from "./Login/AdminLogin";
import Home from "./Home";
import UserHome from "./subscription/UserHome";
import DataContext from "./context/DataContext";
import Cookies from "js-cookie";
import LibraryBooks from "./Books";
import Users from "./Users";
import Loans from "../Loans";


import { Route, Routes, useNavigate, Link } from "react-router-dom";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import UserLogin from "./Login/UserLogin";
import axios from "axios";
// import NewLogin from "./Login/NewLogin";
// import AdminLogin from "./Login/AdminLogin";
// import Home from "./Home";

function Content() {
  // const [count, setCount] = useState(0);
  const [changeBooks, setChangeBooks] = useState(true);
  const [adminToken, setAdminToken] = useState("");
  console.log(adminToken);
  const [userToken, setUserToken] = useState("");
  console.log(userToken);
  const [Books, setBooks] = useState([]);
  const [loansHaveChanged, setLoansHaveChanged] = useState(false);
  const [searchBooks, setSearchBooks] = useState([]);



  useEffect(() => {
    setAdminToken (Cookies.get("admin")||null)
    console.log("adminToken:", adminToken);
    setUserToken (Cookies.get("user")||null)
    console.log("userTOKEN:", userToken);

          }, []);

          // useEffect(() => {
          //           const fetchBooks = async () => {
          //             try {
          //               const response = await axios.get(`http://localhost:9999/api/books`);
          //               if (Array.isArray(response.data) && response.data.length > 0) {
          //                 // setSearchBooks(response.data);

          //                 setBooks(response.data[0]);
          //                 setSearchBooks(response.data[0]);
          //                 console.log("searchBooks:",searchBooks, Books);
          //                 console.log("data :", response.data[0], response.data);
          //               } else {
          //                 console.error("Books not found");
          //               }
          //             } catch (error) {
          //               console.error("Error:", error);
          //             }
          //           };
          //           fetchBooks();
          //           console.log("searchBooks:",searchBooks, Books);

          //         }, []);

          //         useEffect(() => {
          //           setSearchBooks(Books);
          //           console.log(Books);
          //           console.log(searchBooks);
          //         }, []);




  return (
    <DataContext.Provider value={{Books,setBooks,adminToken, setAdminToken,userToken, setUserToken,loansHaveChanged, setLoansHaveChanged,searchBooks, setSearchBooks,changeBooks, setChangeBooks}}>
      <Routes>
      
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/newLogin/" element={<NewLogin />} />
        <Route path="/adminLogin/" element={<AdminLogin />} />
        <Route path="/admin/:id/users" element={<Users />} />
        <Route path="/admin/:id/books" element={<LibraryBooks />} />
        <Route path="/admin/:id/loans" element={<Loans />} />
        <Route path="/admin/home/:id" element={(!adminToken) ? <Login /> : <Home />}  /> 
        {/* <Route path="/admin/home/:id" element={(adminToken) ? <Home /> : <Login />}  />  */}
        <Route path="/user/home/:id" element={(userToken) ? <UserHome /> : <Login />}  /> 
        {/* <Route path="*" element={(!adminToken&&!userToken) ? <Login /> : <Home />} />
        <Route path="/" element={(!adminToken&&!userToken) ? <Login /> : <Home />} /> */}
        <Route path="*" element={ <Login /> } />
        <Route path="/" element={ <Login /> } />
    </Routes>
  
      </DataContext.Provider>
  );
}

export default Content;
