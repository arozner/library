const express = require("express");

const {
  getAllLoans,
  getLoansByBook,
  getLoansByUser,
  getLoansOver,
  addLoan,
  updateLoan,
} = require("../database/loans");
const { login } = require("../database/login");

const loansRoutes = express.Router();

loansRoutes.get("/bookId/:bookId", async (req, res) => {
  console.log(11);

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
loansRoutes.get("/userByEmail/:email", async (req, res) => {
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
loansRoutes.get("/returnDateHasPassed", async (req, res) => {
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
    const loan_date = req.body.loan_date;
    const return_date = req.body.request_date;

    const data = await addLoan(email, book_id, loan_date, return_date);
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
    const id = req.body.id;

    const data = await updateLoan (id, email);
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
