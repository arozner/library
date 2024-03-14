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

export default function Home() {
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

  // const handleClick = (event) => {
  //   console.log(event);
  //   setMyBook(event)
  //   setAnchorEl(event.currentTarget);

  // };
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

  // const { id } = useParams();
  // const [Books, setBooks] = useState([]);
  const [mybook, setMyBook] = useState("");
  // const [searchBooks, setSearchBooks] = useState("");
  const [letters, setLetters] = useState("");
  const [myDetails, setMyDetails] = useState([]);
  const [dataBook, setDataBook] = useState("");
  const [lgo, setLgo] = useState(0);
  const [loansIsOver, setLoansIsOver] = useState([]);
  const { changeBooks, setChangeBooks } = useContext(DataContext);
  const [data, setData] = useState("");
  const [loans, setLoans] = useState("");
  const [customers, setCustomers] = useState("");
  const [popoverPosition, setPopoverPosition] = useState({
    mouseX: null,
    mouseY: null,
  });
  const { Books, setBooks } = useContext(DataContext);
  const { searchBooks, setSearchBooks } = useContext(DataContext);
  const { loansHaveChanged, setLoansHaveChanged } = useContext(DataContext);
  console.log(Books);
  console.log(searchBooks);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:9999/api/user/66`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          const userData = response.data[0];
          setMyDetails(response.data);
          console.log(userData);
          console.log(response.data);
        } else {
          console.error("User not found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchUserDetails();
  }, []);

  // useEffect(() => {
  //   setSearchBooks(Books);
  //   console.log(searchBooks);
  // }, []);


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:9999/api/books`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          // setSearchBooks(response.data);

          setBooks(response.data[0]);
          setSearchBooks(response.data[0]);
          console.log("searchBooks:",searchBooks, Books);
          console.log("data :", response.data[0], response.data);
        } else {
          console.error("Books not found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
    console.log("searchBooks:",searchBooks, Books);

  }, [changeBooks]);





  const updateLoan = (id, email) => {
    console.log(id);
    console.log(email);
    const loans = async () => {
      try {
      
        const response = await axios.put(
          `http://localhost:9999/api/loans`,
          {
            email: email,
            idLoans: id,
          },
          {
            headers: {
              Authorization: "Bearer " + Cookies.get("admin"),
            },
          }
        );
        if (Array.isArray(response.data) && response.data.length > 0) {
          const over = response.data[0];
          setLoansHaveChanged(!loansHaveChanged);
          console.log(over);
          console.log(response.data);
        } else {
          console.error("not found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    loans();
  };

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9999/api/loans/loansOver`
        );
        if (Array.isArray(response.data) && response.data.length > 0) {
          const over = response.data[0];
          setLoansIsOver(response.data);
          console.log(over);
          console.log(response.data);
        } else {
          console.error("not found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchLoans();
  }, [loansHaveChanged]);

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    setLetters(input);

    const filtered = Books.filter(
      (book) =>
        book.title.toLowerCase().startsWith(input) ||
        book.author.toLowerCase().startsWith(input)
    );
    console.log("filtered", filtered);
    console.log("letters", letters);
    setSearchBooks(filtered);
  };

  const handleRowClick = (book) => {
    setDataBook(book);
    console.log("Clicked:", book);
    console.log("Clicked:", book);
  };


  const logout = () => {
    
    setLgo(1)
  };
  // useEffect(() => {

  // }, [lgo]);
  return (
    <>
      <Button
        variant="contained"
        disableElevation
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          margin: "16px",
          zIndex: 1000,
        }}
        onClick={() => {
          console.log("Before remove admin:", Cookies.get("admin"));
          Cookies.remove("admin");
          console.log("After remove admin:", Cookies.get("admin"));
          nav(`/`);       }}
      >
        log out
      </Button>

      {/* <div style={{ display: "flex", flexWrap: "wrap" }}> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            marginRight: "20px",
          }}
        >
          {/* <h2>admin</h2> */}
        </div>
        <Stack
          direction="row"
          spacing={2}
          sx={{ height: "50%", justifyContent: "center", alignItems: "center" }}
        >
          <Button variant="contained" color="success" onClick={() => nav(`/admin/${id}/users`)}>
            Users
          </Button>
          <Button variant="contained" color="success" onClick={() => nav(`/admin/${id}/books`)}>
            Books
          </Button>
          <Button variant="contained" color="success" onClick={() => nav(`/admin/${id}/loans`)}>
            Loans
          </Button>
        </Stack>

         <div style={{ display: "flex" }}> 
           <div style={{ flexBasis: "200px", marginRight: "20px" }}>
            <h2>Borrow books that have been finished and not returned</h2> 

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell align="right">book_id</StyledTableCell>
                    <StyledTableCell align="right">
                      borrower_name
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      borrower_email
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      borrower_phone
                    </StyledTableCell>
                    <StyledTableCell align="right">loan_date</StyledTableCell>
                    <StyledTableCell align="right">return_date</StyledTableCell>
                    <StyledTableCell align="right">returned</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loansIsOver.length > 0 &&
                    loansIsOver.map((details, index) => (
                      <StyledTableRow
                        key={index}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "rgb(240, 240, 240)" : "white",
                          color: "#FF0000",
                          fontSize: "16px",
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
                            onClick={() =>
                              updateLoan(details.id, details.borrower_email)
                            }
                          >
                            <MdDelete />
                          </button>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {details.id}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {details.borrower_name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {details.borrower_email}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {details.borrower_phone}
                        </StyledTableCell>

                        <StyledTableCell align="right">
                          {details.loan_date
                            .split("T")[0]
                            .split("-")
                            .reverse()
                            .join("-")}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {details.return_date
                            .split("T")[0]
                            .split("-")
                            .reverse()
                            .join("-")}
                        </StyledTableCell>

                        <StyledTableCell align="right">
                          {details.returned}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          </div>

          {/* <div style={{ flexBasis: "200px" }}>
            <h2>Your Library</h2>
            <TextField
              label="Search by Title or Author"
              variant="outlined"
              value={letters}
              onChange={handleSearch}
              fullWidth
              margin="normal"
            />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell align="left">Title</StyledTableCell>
                    <StyledTableCell align="right">Author</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {searchBooks.length > 0 &&
                    searchBooks.map((book, index) => (
                      <React.Fragment key={index}>
                        <StyledTableRow
                          onClick={(e) => handleClick(e, book)}
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
                              color:
                                book.status === "Available"
                                  ? "green"
                                  : "#FF0000",
                              fontSize: "16px",
                            }}
                          >
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {book.title}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {book.author}
                          </StyledTableCell>
                        </StyledTableRow>

                        <Popover
                          id={idPopup}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "Center",
                            horizontal: "Right",
                          }}
                        >
                          <Typography
                            sx={{ p: 1 }}
                          >{`Genre: ${book.genre}, Audience: ${book.audience}, Status: ${book.status}, Release Year: ${book.release_year}`}</Typography>
                        </Popover>
                      </React.Fragment>

                      // </>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
}
