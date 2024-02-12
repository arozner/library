
const mysql = require("mysql2/promise");

const { pool } = require("./Pool.js");

async function getLoansOver() {
  const currentDate = Date.now();
  try {
    const [data] = await pool.query(
      `SELECT * FROM loans WHERE returned = ? AND return_date < ?`,
      [0, currentDate]
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching loans:", error);
    throw error;
  }
}

async function getAllLoans() {
  try {
    const [data] = await pool.query("SELECT * FROM loans");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching all loans:", error);
    throw error;
  }
}

async function getLoansByUser(email) {
  try {
    const [customerData] = await pool.query(
      "SELECT * FROM customers WHERE email = ?",
      [email]
    );

    if (customerData.length === 0) {
      console.log("Customer not found.");
      return null;
    }

    const [data] = await pool.query(
      "SELECT * FROM loans WHERE borrower_email = ?",
      [email]
    );

    if (data.length === 0) {
      console.log("No loans found for this user.");
      return null;
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching loans by user:", error);
    throw error;
  }
}


async function getLoansByBook(book_id) {
  try {
    const [bookData] = await pool.query("SELECT * FROM books WHERE id = ?", [book_id]);
    if (bookData.length === 0) {
      console.log("Book not found, cannot retrieve loans.");
      return null;
    }

    const [data] = await pool.query("SELECT * FROM loans WHERE book_id = ?", [book_id]);
    if (data.length === 0) {
      console.log("No loans found for this book.");
      return null;
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching loans by book:", error);
    throw error;
  }
}


async function addLoan(email, book_id, return_date) {
  try {
    const currentDate = new Date();

    const [existingBooks] = await pool.query(
      "SELECT * FROM books WHERE id = ? AND status = 'Available'",
      [book_id]
    );

    if (existingBooks.length === 0) {
      console.log("Book not found or not available for loan.");
      return null;
    }

    const [customerData] = await pool.query(
      "SELECT * FROM customers WHERE email = ?",
      [email]
    );

    if (customerData.length === 0) {
      console.log("Customer not found.");
      return null;
    }

    const borrower_name = `${customerData[0].first_name} ${customerData[0].last_name}`;
    const borrower_phone = customerData[0].phone;

    if (new Date(return_date).getTime() < currentDate.getTime()) {
      console.log("Return date is in the past.");
      return null;
    }

    const [result] = await pool.query(
      "INSERT INTO loans (book_id, borrower_name, borrower_email, borrower_phone, loan_date, return_date) VALUES (?, ?, ?, ?, ?, ?)",
      [book_id, borrower_name, email, borrower_phone, currentDate, return_date]
    );

    console.log(`Inserted new loan with ID: ${result.insertId}`);
    const [data] = await pool.query("SELECT * FROM loans WHERE id = ?", [
      result.insertId,
    ]);
    return data;
  } catch (error) {
    console.error("Error adding loan:", error);
    throw error;
  }
}


async function updateLoanReturn(idLoans, email) {
  const currentDate = new Date();

  try {
    const [existingCustomer] = await pool.query(
      "SELECT email FROM customers WHERE email = ?",
      [email]
    );

    if (existingCustomer.length === 0) {
      throw new Error("Customer not found with the specified email");
    }

    const [existingLoan] = await pool.query(
      "SELECT borrower_email FROM loans WHERE id = ?",
      [idLoans]
    );

    if (existingLoan.length === 0 || existingLoan[0].borrower_email !== email) {
      throw new Error("No loan found for the specified email and ID");
    }

    const [data] = await pool.query(
      "UPDATE loans SET return_date = ?, returned = true WHERE id = ? AND borrower_email = ?",
      [currentDate, idLoans, email]
    );

    const [updatedLoan] = await pool.query("SELECT * FROM loans WHERE id = ?", [
      idLoans,
    ]);

    console.log(updatedLoan);
    return updatedLoan;
  } catch (error) {
    console.error("Error updating loan by book ID:", error);
    throw error;
  }
}



// addLoan('roznerr404540@gmail.com', 90, '2024-05-04')
// Usage example
// updateLoan(1, 'example@example.com');

// updateLoan(527, "roznerr404540@gmail.com");

module.exports = {
  getAllLoans,
  getLoansByBook,
  getLoansByUser,
  getLoansOver,
  addLoan,
  updateLoanReturn,
};
