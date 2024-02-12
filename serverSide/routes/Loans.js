const express = require("express");

const {
  getAllLoans,
  getLoansByBook,
  getLoansByUser,
  getLoansOver,
  addLoan,
  updateLoanReturn} 
  = require("../database/loans");
const { login } = require("../database/login");

const loansRoutes = express.Router();

loansRoutes.get("/", async (req, res) => {
  console.log(11);

  try {
    
    const data = await getAllLoans();
    if (!data) {
      console.log("Data is null, returning 404");
      res.status(404).send("Letter is not found");
      return;
    }
    res.json(data);
  } catch (err) {
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal Server Error");
  }
});
loansRoutes.get("/loansByBook/:bookId", async (req, res) => {

  try {
    const bookId=req.params.bookId;
    const data = await getLoansByBook(bookId);
    if (!data) {
      console.log("Data is null, returning 404");
      res.status(404).send("Letter is not found");
      return;
    }
    res.json(data);
  } catch (err) {
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal Server Error");
  }
});
loansRoutes.post("/loansByUser", async (req, res) => {
  console.log(11);
const email = req.body.email;
  try {
    
    const data = await getLoansByUser(email);
    if (!data) {
      console.log("Data is null, returning 404");
      res.status(404).send("Letter is not found");
      return;
    }
    res.json(data);
  } catch (err) {
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal Server Error");
  }
});
loansRoutes.get("/loansOver", async (req, res) => {
  console.log(11);

  try {
    
    const data = await getLoansOver();
    if (!data) {
      console.log("Data is null, returning 404");
      res.status(404).send("Letter is not found");
      return;
    }
    res.json(data);
  } catch (err) {
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal Server Error");
  }
});

loansRoutes.post("/", async (req, res) => {
  console.log(22);

  try {
    const email = req.body.email;
    const book_id = req.body.book_id;
    const return_date = req.body.return_date;

    const data = await addLoan(email, book_id, return_date);
    if (data) {
      res.status(201).json(data);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal Server Error");
  }
});
loansRoutes.put("/", async (req, res) => {
  console.log(22);

  try {
    const email = req.body.email;
    const idLoans = req.body.idLoans;

    const data = await updateLoanReturn (idLoans, email);
    if (data) {
      res.status(201).json(data);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = { loansRoutes };
