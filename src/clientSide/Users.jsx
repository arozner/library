// import React from 'react'

// export default function Users() {
//   return (
//     <div>Users</div>
//   )
// }
import React, { useState, useEffect, useContext } from "react";
import DataContext from "./context/DataContext";
import Book_Id from "./Book_Id";
import Books from "./Books";
import Lending from "./Users";
import Lender_Id from "./Users_Id";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyHistory from "./subscription/MyHistory";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import Popup from "reactjs-popup";
import { Cookie } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import Grid from '@mui/material/Grid';


export default function Users() {
  const Authorization = Cookies.get("admin");
  const token = { Authorization: `Bearer ${Authorization}` };
  console.log(token);

  const nav = useNavigate();
  const { id } = useParams();
  console.log(id);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, book) => {
    console.log(event);
    console.log(book);
    setMyBook(book);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPopup = open ? "simple-popover" : undefined;

  const [isAdduserPopupOpen, setIsAdduserPopupOpen] = useState(false);
  const [newUser, setNewUser] = useState({
     
    
    first_name: "",
    last_name: "",
    phone: "",
    idNumber: "",
    password: "",
    email: "",
  });
  const [isAddUserClicked, setIsAddUserClicked] = useState(false);

  const [mybook, setMyBook] = useState("");
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  const [letters, setLetters] = useState("");
  const [dataBook, setDataBook] = useState("");
  const [changeUser, setChangeUser] = useState(0);
  // const { changeUser, setChangeUser } = useContext(DataContext);
  const [popoverPosition, setPopoverPosition] = useState({
    mouseX: null,
    mouseY: null,
  });
  // const { Books, setBooks } = useContext(DataContext);
  // console.log(Books);

  const handleAddUser = async () => {
    // הוספת הספר החדש למאגר הנתונים כאן
    console.log("Adding new user:", newUser);
    try {
      const response = await axios.post( 'http://localhost:9999/api/user',
      {

       
        

        first_name: newUser.first_name,
        last_name: newUser.last_name,
        phone: newUser.phone,
        idNumber: newUser.idNumber,
        password: newUser.password,
        email: newUser.email,
        // audience: newUser.audience,
      },
      {
        headers: {
          last_nameization: "Bearer " + Cookies.get("admin"),
        },
      }
    );
      console.log(response.status);
      if (response.status === 401) {
        nav("/adminLogin/");
        return;
      }
      if (response.status === 201) {
        // setSearchUser(response.data);
        setNewUser({
          first_name: "",
          last_name: "",
          phone: "",
          idNumber: "",
          password: "",
          // audience: "",
          email: "",
        });
        setChangeUser(changeUser+1);
      } else {
        console.error("user not found");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        nav("/adminLogin");
      } else {
        console.error("שגיאה:", error);
      }
      
        
    };
    // סגירת חלון ההוספת ספר
    setIsAdduserPopupOpen(false);
  };

  // const popularphones = [
  //   "Fantasy",
  //   "Science Fiction",
  //   "Mystery",
  //   "Thriller",
  //   "Romance",
  //   "Historical Fiction",
  //   "Biography",
  //   "Self-help",
  //   "Science",
  //   "Young Adult",
  // ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:9999/api/user`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          // setSearchUser(response.data);

          setUsers(response.data[0]);
          setSearchUser(response.data[0]);
          console.log("searchUser:", searchUser, users);
          console.log("data :", response.data[0], response.data);
          console.log(users);
        } else {
          console.error("users not found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchUsers();
    console.log("searchUser:", searchUser, users);
  }, [changeUser]);

  // const years = [];
  // for (let year = 1950; year <= 2024; year++) {
  //   years.push(year.toString());
  // }

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    setLetters(input);

    const filtered = users.filter(
      (user) =>
        user.first_name.toLowerCase().startsWith(input) ||
        user.last_name.toLowerCase().startsWith(input)
    );
    console.log("filtered", filtered);
    console.log("letters", letters);
    setSearchUser(filtered);
  };

  const handleRowClick = (user) => {
    setDataBook(user);
    console.log("Clicked:", user);
    console.log("Clicked:", user);
  };

  const deleteUser = async (id,email)=>{
    console.log(id);
    console.log(email);
    
    
    try {
      if (!Cookies.get("admin")) {
        nav("/adminLogin/");
        return;
      }
    
      const response = await axios.delete(
        `http://localhost:9999/api/user`,
        {
          data: { id: id,
            email: email},
          headers: {
            last_nameization: "Bearer " + Cookies.get("admin"),
          },
        }
      );
    
      if (response.status === 401) {
        nav("/adminLogin/");
        return;
      }
    
      if (response.status === 200) {
        const over = response.data[0];
        console.log(over);
        console.log(response.data);
        setChangeUser(changeUser+1);
      } else {
        console.error("not found");
      }
    } catch (error) {
    if (error.response && error.response.status === 401) {
      nav("/adminLogin");
    } else {
      console.error("שגיאה:", error);
    }
    
      
  };

}
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", position: "relative" }}>
        <Grid container spacing={1}>
          <Grid item>
            <Button
              variant="contained"
              disableElevation
              size="small"
              style={{
                margin: "5px",
                zIndex: 1000,
              }}
              onClick={() => {
                console.log("Before remove admin:", Cookies.get("admin"));
                Cookies.remove("admin");
                console.log("After remove admin:", Cookies.get("admin"));
  
                nav(`/`);
              }}
            >
              log out
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              size="small"
              disableElevation
              style={{
                margin: "5px",
                zIndex: 1000,
              }}
              onClick={() => nav(`/admin/home/${id}`)}
            >
              🏡 home
            </Button>
          </Grid>
        </Grid>
      </div>
  
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flexBasis: "200px" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px", // Adjust as needed
              }}
            ></Box>
  
            {isAdduserPopupOpen && (
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "80%",
                  height: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% opacity gray
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000,
                }}
              >
                <Paper elevation={3} sx={{ padding: 3 }}>
                  <h2>Add new customer</h2>
                  <TextField
                    label="first_name"
                    variant="outlined"
                    value={newUser.first_name}
                    onChange={(e) =>
                      setNewUser({ ...newUser, first_name: e.target.value })
                    }

                
                  />




                  
                  <TextField
                    label="last_name"
                    variant="outlined"
                    value={newUser.last_name}
                    onChange={(e) =>
                      setNewUser({ ...newUser, last_name: e.target.value })
                    }
                  />
                  <TextField
                    label="phone"
                    variant="outlined"
                    value={newUser.phone}
                    onChange={(e) =>
                      setNewUser({ ...newUser, phone: e.target.value })
                    }
                  />
                  <TextField
                    label="idNumber"
                    variant="outlined"
                    value={newUser.idNumber}
                    onChange={(e) =>
                      setNewUser({ ...newUser, idNumber: e.target.value })
                    }
                  />
                 
                  

                 
                  <TextField
                    label="password"
                    variant="outlined"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                  />
                  <TextField
                    label="email"
                    variant="outlined"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                  />
                  <br />
                  <Button variant="contained" color="success" onClick={()=>{handleAddUser(); setIsAdduserPopupOpen(false)}}>
                    Send
                  </Button>
                  <br />
                  <br />
                  <Button variant="outlined" onClick={() => setIsAdduserPopupOpen(false)}>
                    Cancel
                  </Button>
                </Paper>
              </Box>
            )}
          </div>
        </div>
  
        <div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <h2>customers</h2>
          </div>
  
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <Button
              onClick={() => {
                setIsAdduserPopupOpen(true);
              }}
              variant="contained"
              color="success"
            >
Add new customer            </Button>
          </div>
  
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              label="Search by first_name or last_name"
              variant="outlined"
              value={letters}
              onChange={handleSearch}
              fullWidth
              margin="normal"
            />
          </div>
  
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TableContainer component={Paper} style={{ width: "100%" }}>
              <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell align="left">first_name</StyledTableCell>
                    <StyledTableCell align="right">last_name</StyledTableCell>
                    <StyledTableCell align="right">email</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {searchUser.length > 0 &&
                    searchUser.map((user, index) => (
                      <React.Fragment key={index}>
                        <StyledTableRow
                          onClick={(e) => handleClick(e, user)}
                          key={index}
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "rgb(240, 240, 240)" : "white",
                          }}
                        >
                          <StyledTableCell
                            component="th"
                            scope="row"
                            style={{
                              color: "#FF0000",
                              fontSize: "16px",
                            }}
                          >
                          <button
  type="button"
  onClick={() => deleteUser(user.id,user.email)}
  style={{ display: "flex", alignItems: "center" }}
>
  <MdDelete style={{ marginRight: "5px" }} />
  Delete
</button>

                          </StyledTableCell>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            style={{
                              color:
                               "green" ,
                              fontSize: "16px",
                            }}
                          >
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="left">{user.first_name}</StyledTableCell>
                          <StyledTableCell align="right">{user.last_name}</StyledTableCell>
                          <StyledTableCell align="right">{user.email}</StyledTableCell>
                        </StyledTableRow>
                        <Popover
                          id={idPopup}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <Typography sx={{ p: 1 }}>
                            {`phone: ${user.phone}, Israeli_ID: ${user.Israeli_ID}, password: ${user.password}`}
                          </Typography>
                        </Popover>
                      </React.Fragment>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
 }
  
