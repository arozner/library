import React, { useState, useEffect } from "react";
import Book_Id from "./Book_Id";
import Books from "./Books";
import Lending from "./Lending";
import Lender_Id from "./Lender_Id";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyHistory from "./subscription/MyHistory";
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
export default function Home() {
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
  const [Books, setBooks] = useState([]);
  const [mybook, setMyBook] = useState("");
  const [searchBooks, setSearchBooks] = useState("");
  const [letters, setLetters] = useState("");
  const [myDetails, setMyDetails] = useState([]);
  const [dataBook, setDataBook] = useState("");
  const [loansIsOver, setLoansIsOver] = useState([]);

  const [data, setData] = useState("");
  const [loans, setLoans] = useState("");
  const [customers, setCustomers] = useState("");

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

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:9999/api/books`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setBooks(response.data[0]);
          setSearchBooks(response.data[0]);
          console.log(response.data[0]);
        } else {
          console.error("Books not found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, []);

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
  }, []);

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
    // Handle the click event for the row here, for example, open a modal with book details
    console.log("Clicked:", book);
    console.log("Clicked:", book);
  };

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            marginRight: "20px",
          }}
        >
          <h2>Your Details</h2>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell align="right">first_name</StyledTableCell>
                  <StyledTableCell align="right">last_name</StyledTableCell>
                  <StyledTableCell align="right">phone</StyledTableCell>
                  <StyledTableCell align="right">email</StyledTableCell>
                  <StyledTableCell align="right">password</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myDetails.length > 0 &&
                  myDetails.map((details, index) => (
                    <StyledTableRow
                      key={index}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "rgb(240, 240, 240)" : "white",
                      }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {details.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {details.first_name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {details.last_name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {details.phone}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {details.email}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {details.password}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
                        {/* <StyledTableCell component="th" scope="row">
                          {details.book_id}
                        </StyledTableCell> */}
                        <StyledTableCell
                          component="th"
                          scope="row"
                          style={{
                            color: "#FF0000",
                            fontSize: "16px",
                          }}
                        >
                          {index + 1}
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
                          {details.loan_date}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {details.return_date}
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

          <div style={{ flexBasis: "200px" }}>
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
                      <>
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
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <Typography
                            sx={{ p: 1 }}
                          >{`Genre: ${mybook.genre}, Audience: ${mybook.audience}, Status: ${mybook.status}, Release Year: ${book.release_year}`}</Typography>
                        </Popover>
                      </>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

      {/* <div>Home</div>
    <Books/>
    <Book_Id/>
     <Lending/>
     <Lender_Id/> */}
    </>
  );
}

// const borrowed= async()=>{
//   try {
//     const response = await axios.get('http://localhost:9999/api/loans/over'

//     );

//     setLoans(response.data);
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// useEffect(() => {
//   console.log(userExists);
// }, [userExists]);
