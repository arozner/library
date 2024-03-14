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


export default function LibraryBooks() {
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

  const [isAddBookPopupOpen, setIsAddBookPopupOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    release_year: "",
    page: "",
    audience: "",
    shelf: "",
  });
  const [isAddUserClicked, setIsAddUserClicked] = useState(false);

  const [mybook, setMyBook] = useState("");
  const [searchBooks, setSearchBooks] = useState("");
  const [letters, setLetters] = useState("");
  const [dataBook, setDataBook] = useState("");
  const { changeBooks, setChangeBooks } = useContext(DataContext);
  const [popoverPosition, setPopoverPosition] = useState({
    mouseX: null,
    mouseY: null,
  });
  const { Books, setBooks } = useContext(DataContext);
  console.log(Books);

  const handleAddBook = async () => {
    // הוספת הספר החדש למאגר הנתונים כאן
    console.log("Adding new book:", newBook);
    try {
      const response = await axios.post( 'http://localhost:9999/api/books',
      {
        title: newBook.title,
        author: newBook.author,
        genre: newBook.genre,
        release_year: newBook.release_year,
        page: newBook.page,
        shelf: newBook.shelf,
        audience: newBook.audience,
      },
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("admin"),
        },
      }
    );
      console.log(response.status);
      if (response.status === 401) {
        nav("/adminLogin/");
        return;
      }
      if (response.status === 201) {
        // setSearchBooks(response.data);
        setNewBook({
          title: "",
          author: "",
          genre: "",
          release_year: "",
          page: "",
          audience: "",
          shelf: "",
        });
        setChangeBooks(!changeBooks);
      } else {
        console.error("Books not found");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        nav("/adminLogin");
      } else {
        console.error("שגיאה:", error);
      }
      
        
    };
    // סגירת חלון ההוספת ספר
    setIsAddBookPopupOpen(false);
  };

  const popularGenres = [
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Historical Fiction",
    "Biography",
    "Self-help",
    "Science",
    "Young Adult",
  ];

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:9999/api/books`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          // setSearchBooks(response.data);

          setBooks(response.data[0]);
          setSearchBooks(response.data[0]);
          console.log("searchBooks:", searchBooks, Books);
          console.log("data :", response.data[0], response.data);
        } else {
          console.error("Books not found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
    console.log("searchBooks:", searchBooks, Books);
  }, [changeBooks]);

  const years = [];
  for (let year = 1950; year <= 2024; year++) {
    years.push(year.toString());
  }

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

  const deleteBook = async (id)=>{
    console.log(id);
    
    
    try {
      if (!Cookies.get("admin")) {
        nav("/adminLogin/");
        return;
      }
    
      const response = await axios.delete(
        `http://localhost:9999/api/books`,
        {
          data: { id: id },
          headers: {
            Authorization: "Bearer " + Cookies.get("admin"),
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
        setChangeBooks(!changeBooks);
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
  
            {isAddBookPopupOpen && (
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
                  <h2>Add New Book</h2>
                  <TextField
                    label="Title"
                    variant="outlined"
                    value={newBook.title}
                    onChange={(e) =>
                      setNewBook({ ...newBook, title: e.target.value })
                    }
                  />
                  <TextField
                    label="Author"
                    variant="outlined"
                    value={newBook.author}
                    onChange={(e) =>
                      setNewBook({ ...newBook, author: e.target.value })
                    }
                  />
                  <TextField
                    select
                    label="Genre"
                    value={newBook.genre}
                    onChange={(e) =>
                      setNewBook({ ...newBook, genre: e.target.value })
                    }
                    variant="outlined"
                  >
                    {popularGenres.map((genre) => (
                      <MenuItem key={genre} value={genre}>
                        {genre}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    select
                    label="audience"
                    value={newBook.audience}
                    onChange={(e) =>
                      setNewBook({ ...newBook, audience: e.target.value })
                    }
                    variant="outlined"
                  >
                    {["Children", "Teen", "Adult"].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    select
                    label="Release Year"
                    value={newBook.release_year}
                    onChange={(e) =>
                      setNewBook({ ...newBook, release_year: e.target.value })
                    }
                    variant="outlined"
                  >
                    {years.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    label="page"
                    variant="outlined"
                    value={newBook.page}
                    onChange={(e) =>
                      setNewBook({ ...newBook, page: e.target.value })
                    }
                  />
                  <TextField
                    label="shelf"
                    variant="outlined"
                    value={newBook.shelf}
                    onChange={(e) =>
                      setNewBook({ ...newBook, shelf: e.target.value })
                    }
                  />
                  <br />
                  <Button variant="contained" color="success" onClick={()=>{handleAddBook(); setIsAddBookPopupOpen(false)}}>
                    Send
                  </Button>
                  <br />
                  <br />
                  <Button variant="outlined" onClick={() => setIsAddBookPopupOpen(false)}>
                    Cancel
                  </Button>
                </Paper>
              </Box>
            )}
          </div>
        </div>
  
        <div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <h2>Your Library</h2>
          </div>
  
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <Button
              onClick={() => {
                setIsAddBookPopupOpen(true);
              }}
              variant="contained"
              color="success"
            >
              Add New Book
            </Button>
          </div>
  
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              label="Search by Title or Author"
              variant="outlined"
              value={letters}
              onChange={handleSearch}
              fullWidth
              margin="normal"
            />
          </div>
  
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TableContainer component={Paper} style={{ width: "80%" }}>
              <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell align="left">Title</StyledTableCell>
                    <StyledTableCell align="right">Author</StyledTableCell>
                    <StyledTableCell align="right">status</StyledTableCell>
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
                              color: "#FF0000",
                              fontSize: "16px",
                            }}
                          >
                          <button
  type="button"
  onClick={() => deleteBook(book.id)}
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
                                book.status === "Available" ? "green" : "#FF0000",
                              fontSize: "16px",
                            }}
                          >
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="left">{book.title}</StyledTableCell>
                          <StyledTableCell align="right">{book.author}</StyledTableCell>
                          <StyledTableCell align="right">{book.status}</StyledTableCell>
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
                            {`Genre: ${book.genre}, Audience: ${book.audience}, Status: ${book.status}, Release Year: ${book.release_year}`}
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
  

//   return (
//     <div>
//       <div style={{ display: "flex", flexWrap: "wrap", position: "relative" }}>
        

// <Grid container spacing={1}>
//   <Grid item>
//     <Button
//       variant="contained"
//       disableElevation
//       size="small"
//       style={{
//         margin: "5px",
//         zIndex: 1000,
//       }}
//       onClick={() => {
//         console.log("Before remove admin:", Cookies.get("admin"));
//         Cookies.remove("admin");
//         console.log("After remove admin:", Cookies.get("admin"));

//         nav(`/`);
//       }}
//     >
//       log out
//     </Button>
//   </Grid>
//   <Grid item>
//     <Button
//       variant="outlined"
//       size="small"
//       disableElevation
//       style={{
//         margin: "5px",
//         zIndex: 1000,
//       }}
//       onClick={() => nav(`/admin/home/${id}`)}
//     >
//       🏡 home
//     </Button>
//   </Grid>
// </Grid>



     
//       </div>

//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         <div style={{ flexBasis: "200px" }}>
//           <div style={{ display: "flex", flexWrap: "wrap" }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 marginTop: "20px", // Adjust as needed
//               }}
//             >
              
//             </Box>

//             {isAddBookPopupOpen && (
//               <Box
//                 component="form"
//                 sx={{
//                   "& .MuiTextField-root": { m: 1, width: "25ch" },
//                   position: "fixed",
//                   top: 0,
//                   left: 0,
//                   width: "80%",
//                   height: "50%",
//                   backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% opacity gray
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   zIndex: 1000,
//                 }}
//               >
//                 <Paper elevation={3} sx={{ padding: 3 }}>
//                   <h2>Add New Book</h2>
//                   <TextField
//                     label="Title"
//                     variant="outlined"
//                     value={newBook.title}
//                     onChange={(e) =>
//                       setNewBook({ ...newBook, title: e.target.value })
//                     }
//                   />
//                   <TextField
//                     label="Author"
//                     variant="outlined"
//                     value={newBook.author}
//                     onChange={(e) =>
//                       setNewBook({ ...newBook, author: e.target.value })
//                     }
//                   />
//                   <TextField
//                     select
//                     label="Genre"
//                     value={newBook.genre}
//                     onChange={(e) =>
//                       setNewBook({ ...newBook, genre: e.target.value })
//                     }
//                     variant="outlined"
//                   >
//                     {popularGenres.map((genre) => (
//                       <MenuItem key={genre} value={genre}>
//                         {genre}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                   ;
//                   <TextField
//                     select
//                     label="audience"
//                     value={newBook.audience}
//                     onChange={(e) =>
//                       setNewBook({ ...newBook, audience: e.target.value })
//                     }
//                     variant="outlined"
//                   >
//                     {["Children", "Teen", "Adult"].map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </TextField>
               
//                   <TextField
//                     select
//                     label="Release Year"
//                     value={newBook.release_year}
//                     onChange={(e) =>
//                       setNewBook({ ...newBook, release_year: e.target.value })
//                     }
//                     variant="outlined"
//                   >
//                     {years.map((year) => (
//                       <MenuItem key={year} value={year}>
//                         {year}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                   ;
//                   <TextField
//                     label="page"
//                     variant="outlined"
//                     value={newBook.page}
//                     onChange={(e) =>
//                       setNewBook({ ...newBook, page: e.target.value })
//                     }
//                   />
//                   <TextField
//                     label="shelf"
//                     variant="outlined"
//                     value={newBook.shelf}
//                     onChange={(e) =>
//                       setNewBook({ ...newBook, shelf: e.target.value })
//                     }
//                   />
//                   <br /><Button variant="contained" color="success" onClick={handleAddBook}>Send</Button>
//                   {/* <Button onClick={handleAddBook}>Send</Button> */}
//                   <br />
//                   <Button variant="outlined" onClick={() => setIsAddBookPopupOpen(false)}>
//                   Cancel</Button>

//                   {/* <Button onClick={() => setIsAddBookPopupOpen(false)}>
//                     Cancel
//                   </Button> */}
//                 </Paper>
//               </Box>
//             )}

         
//           </div>


//           <div>
//     <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
//       <h2>Your Library</h2>
//     </div>

//     <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
//       <Button
//         onClick={() => {
//           setIsAddBookPopupOpen(true);
//         }}
//         variant="contained"
//         color="success"
//       >
//         Add New Book
//       </Button>
//     </div>

//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <TextField
//         label="Search by Title or Author"
//         variant="outlined"
//         value={letters}
//         onChange={handleSearch}
//         fullWidth
//         margin="normal"
//       />
//     </div>

//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <TableContainer component={Paper} style={{ width: "80%" }}>
//         <Table sx={{ minWidth: 500 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell></StyledTableCell>
//               <StyledTableCell></StyledTableCell>
//               <StyledTableCell align="left">Title</StyledTableCell>
//               <StyledTableCell align="right">Author</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {searchBooks.length > 0 &&
//               searchBooks.map((book, index) => (
//                 <React.Fragment key={index}>
//                   <StyledTableRow
//                     onClick={(e) => handleClick(e, book)}
//                     key={index}
//                     style={{
//                       backgroundColor:
//                         index % 2 === 0 ? "rgb(240, 240, 240)" : "white",
//                     }}
//                   >
//                     <StyledTableCell
//                       component="th"
//                       scope="row"
//                       style={{
//                         color: "#FF0000",
//                         fontSize: "16px",
//                       }}
//                     >
//                       <button
//                         type="button"
//                         onClick={() => deleteBook(book.id)}
//                       >
//                         Delete
//                       </button>
//                     </StyledTableCell>
//                     <StyledTableCell
//                       component="th"
//                       scope="row"
//                       style={{
//                         color:
//                           book.status === "Available" ? "green" : "#FF0000",
//                         fontSize: "16px",
//                       }}
//                     >
//                       {index + 1}
//                     </StyledTableCell>
//                     <StyledTableCell align="left">{book.title}</StyledTableCell>
//                     <StyledTableCell align="right">{book.author}</StyledTableCell>
//                   </StyledTableRow>
//                   <Popover
//                     id={idPopup}
//                     open={open}
//                     anchorEl={anchorEl}
//                     onClose={handleClose}
//                     anchorOrigin={{
//                       vertical: "bottom",
//                       horizontal: "left",
//                     }}
//                   >
//                     <Typography sx={{ p: 1 }}>
//                       {`Genre: ${book.genre}, Audience: ${book.audience}, Status: ${book.status}, Release Year: ${book.release_year}`}
//                     </Typography>
//                   </Popover>
//                 </React.Fragment>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>

//     {isAddBookPopupOpen && (
//       <div style={{
//         position: "fixed",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1000,
//       }}>
//         <Paper elevation={3} style={{ padding: "20px" }}>
//           <h2>Add New Book</h2>
//           <TextField
//             label="Title"
//             variant="outlined"
//             value={newBook.title}
//             onChange={(e) =>
//               setNewBook({ ...newBook, title: e.target.value })
//             }
//           />
//           <TextField
//             label="Author"
//             variant="outlined"
//             value={newBook.author}
//             onChange={(e) =>
//               setNewBook({ ...newBook, author: e.target.value })
//             }
//           />
//           <TextField
//             select
//             label="Genre"
//             value={newBook.genre}
//             onChange={(e) =>
//               setNewBook({ ...newBook, genre: e.target.value })
//             }
//             variant="outlined"
//           >
//             {popularGenres.map((genre) => (
//               <MenuItem key={genre} value={genre}>
//                 {genre}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             select
//             label="Audience"
//             value={newBook.audience}
//             onChange={(e) =>
//               setNewBook({ ...newBook, audience: e.target.value })
//             }
//             variant="outlined"
//           >
//             {["Children", "Teen", "Adult"].map((option) => (
//               <MenuItem key={option} value={option}>
//                 {option}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             label="Release Year"
//             variant="outlined"
//             value={newBook.release_year}
//             onChange={(e) =>
//               setNewBook({ ...newBook, release_year: e.target.value })
//             }
//           />
//           <TextField
//             label="Page"
//             variant="outlined"
//             value={newBook.page}
//             onChange={(e) =>
//               setNewBook({ ...newBook, page: e.target.value })
//             }
//           />
//           <TextField
//             label="Shelf"
//             variant="outlined"
//             value={newBook.shelf}
//             onChange={(e) =>
//               setNewBook({ ...newBook, shelf: e.target.value })
//             }
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleAddBook}
//           >
//             Add Book
//           </Button>
//           <Button
//             variant="outlined"
//             onClick={() => setIsAddBookPopupOpen(false)}
//           >
//             Cancel
//           </Button>
//         </Paper>
//       </div>
//     )}
//   </div>


//           {/* <h2>Your Library</h2>
//           <Button
//                style={{             left: "0%"
//               }}
//                 onClick={() => {
//                   setIsAddBookPopupOpen(true);
//                 }}
//                 variant="contained"
//                 color="success"
//               >
//                 Add New Book
//               </Button>
//           <TextField
//             label="Search by Title or Author"
//             variant="outlined"
//             value={letters}
//             onChange={handleSearch}
//             fullWidth
//             margin="normal"
//           />
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 500 }} aria-label="customized table">
//               <TableHead>
//                 <TableRow>
//                   <StyledTableCell></StyledTableCell>
//                   <StyledTableCell></StyledTableCell>

//                   <StyledTableCell align="left">Title</StyledTableCell>
//                   <StyledTableCell align="right">Author</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {searchBooks.length > 0 &&
//                   searchBooks.map((book, index) => (
//                     <React.Fragment key={index}>
//                       <StyledTableRow
//                         onClick={(e) => handleClick(e, book)}
//                         key={index}
//                         style={{
//                           backgroundColor:
//                             index % 2 === 0 ? "rgb(240, 240, 240)" : "white",
//                         }}
//                       >
//                        <StyledTableCell
//                           component="th"
//                           scope="row"
//                           style={{
//                             color: "#FF0000",
//                             fontSize: "16px",
//                           }}
//                         >
                          
//                           <button
//                             type="button"
//                             onClick={() =>
//                               deleteBook(book.id)
//                             }
//                           >
//                             <MdDelete />
//                           </button>
//                         </StyledTableCell>
//                         <StyledTableCell
//                             component="th"
//                             scope="row"
//                             style={{
//                               color:
//                                 book.status === "Available"
//                                   ? "green"
//                                   : "#FF0000",
//                               fontSize: "16px",
//                             }}
//                           >
//                             {index + 1}
//                           </StyledTableCell>


//                         <StyledTableCell align="left">
//                           {book.title}
//                         </StyledTableCell>
//                         <StyledTableCell align="right">
//                           {book.author}
//                         </StyledTableCell>
//                       </StyledTableRow>

//                       <Popover
//                         id={idPopup}
//                         open={open}
//                         anchorEl={anchorEl}
//                         onClose={handleClose}
//                         anchorOrigin={{
//                           vertical: "bottom",
//                           horizontal: "left",
//                         }}
//                       >
//                         <Typography
//                           sx={{ p: 1 }}
//                         >{`Genre: ${book.genre}, Audience: ${book.audience}, Status: ${book.status}, Release Year: ${book.release_year}`}</Typography>
//                       </Popover>
//                     </React.Fragment>

//                     // </>
//                   ))}
//               </TableBody>
//             </Table>
//           </TableContainer> */}
//         </div>
//       </div>
//     </div>
//   );
// }
