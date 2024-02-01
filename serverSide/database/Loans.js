// const mysql = require("mysql2/promise");
// const { pool } = require("./Pool.js");

// async function getLoansOver() {
//   console.log(17);
//   const currentDate = Date.now();
//   try {
//     const [data] = await pool.query(
//       `SELECT * FROM loans WHERE returned = ? AND return_date < ?`,
//       [0, currentDate]
//     );
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching loans:", error);
//     throw error;
//   }
// }

// async function getAllLoans() {
//   console.log(33);
//   try {
//     const data = await pool.query("SELECT * FROM loans");
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching all loans:", error);
//     throw error;
//   }
// }

// async function getLoansByUser(email) {
//   console.log(33);
//   try {
//     const [data] = await pool.query(
//       "SELECT * FROM loans WHERE borrower_email = ?",
//       [email]
//     );
//     if (data.length === 0) {
//       console.log("No loans found for this user.");
//     }

//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching loans by user:", error);
//     throw error;
//   }
// }

// async function getLoansByBook(book_id) {
//   console.log(33);
//   try {
//     const [data] = await pool.query("SELECT * FROM loans WHERE book_id = ?", [
//       book_id,
//     ]);
//     if (data.length === 0) {
//       console.log("No loans found for this book.");
//     }
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching loans by book:", error);
//     throw error;
//   }
// }

// async function addLoan(email, book_id, loan_date, return_date) {
//   try {
//     const [existingBooks] = await pool.query(
//       "SELECT * FROM books WHERE id = ?",
//       [book_id]
//     );

//     if (existingBooks.length === 0) {
//       console.log("Book not found.");
//       return null;
//     }

//     const [existingLoans] = await pool.query(
//       "SELECT * FROM loans WHERE book_id = ? AND returned = 0",
//       [book_id]
//     );

//     if (existingLoans.length > 0) {
//       console.log("Book is currently on loan.");
//       return null;
//     }

//     const [customerData] = await pool.query(
//       "SELECT name, phone FROM customers WHERE email = ?",
//       [email]
//     );

//     if (customerData.length === 0) {
//       console.log("Customer not found.");
//       return null;
//     }

//     const { name, phone } = customerData[0];

//     const [result] = await pool.query(
//       "INSERT INTO loans (borrower_email, borrower_name, borrower_phone, book_id, loan_date, return_date) VALUES (?, ?, ?, ?, ?, ?)",
//       [email, name, phone, book_id, loan_date, return_date]
//     );

//     console.log(`Inserted new loan with ID: ${result.insertId}`);
//     return result.insertId;
//   } catch (error) {
//     console.error("Error adding loan:", error);
//     throw error;
//   }
// }

// // function calculateNextMonthDate() {
// //   const currentDate = new Date();
// //   const nextMonth = new Date(
// //     currentDate.getFullYear(),
// //     currentDate.getMonth() + 1,
// //     1
// //   );
// //   return nextMonth;
// // }

// // async function updateLoansReturnDateToNextMonth() {
// //   const nextMonthDate = calculateNextMonthDate();

// //   try {
// //     const [updatedRows] = await pool.query(
// //       "UPDATE loans SET return_date = ? WHERE returned = 0 AND return_date IS NULL",
// //       [nextMonthDate]
// //     );

// //     console.log(
// //       `Updated ${updatedRows.affectedRows} row(s) with next month's date.`
// //     );
// //   } catch (error) {
// //     console.error("Error updating loans:", error);
// //     throw error;
// //   }
// // }

// async function updateLoan(id, email) {
//   console.log(55);
//   const currentDate = new Date();

//   try {
//     const [existingLoan] = await pool.query(
//       "SELECT * FROM loans WHERE id = ? AND borrower_email = ?",
//       [id, email]
//     );

//     if (existingLoan.length === 0) {
//       console.log("Loan not found.");
//       return null;
//     }

//     const [updatedRows] = await pool.query(
//       "UPDATE loans SET return_date = ? WHERE id = ? AND borrower_email = ?",
//       [currentDate, id, email]
//     );

//     console.log(`Updated ${updatedRows.affectedRows} row(s).`);

//     const [updatedLoan] = await pool.query(
//       "SELECT * FROM loans WHERE id = ? AND borrower_email = ?",
//       [id, email]
//     );

//     console.log("Updated loan details:", updatedLoan);
//     z;
//     return updatedLoan;
//   } catch (error) {
//     console.error("Error updating loan by book ID:", error);
//     throw error;
//   }
// }

// module.exports = {
//   getAllLoans,
//   getLoansByBook,
//   getLoansByUser,
//   getLoansOver,
//   addLoan,
//   updateLoan,
// };

// // const mysql = require("mysql2/promise");
// // const { pool } = require("./pool.js");

// // async function getLoansOver() {
// //     console.log(17);
// //     const currentDate = Date.now();
// //     try {
// //       const [data] = await pool.query(
// //         `SELECT * FROM loans WHERE returned = ? AND return_date < ?`,
// //         [0, currentDate]
// //       );
// //       // Do something with the data fetched from the database
// //     //   return
// //     // const loanDate = data.return_date;

// // // Convert the date to an ISO string and extract only the date part
// // // const loanDateString = loanDate.toISOString().split('T')[0];
// //      console.log(data);
// //     } catch (error) {
// //       // Handle any errors that occur during the database query
// //       console.error('Error fetching loans:', error);
// //       throw error;
// //     }
// //   }

// //   async function getAllLoans() {
// //     console.log(33);
// //     try {
// //       // Check if the user already exists based on email and idNumber
// //       const data = await pool.query(
// //         'SELECT * FROM loans' )

// //     console.log(data);

// //     } catch (error) {
// //       console.error('Error in addUser:', error);
// //       throw error;
// //     }
// //   }
// //   async function getLoansByUser(email) {
// //     console.log(33);
// //     try {
// //       // Check if the user already exists based on email and idNumber
// //       const [data] = await pool.query(
// //         'SELECT * FROM loans WHERE borrower_email = ?',
// //         [email]
// //       );
// //        if (data.length === 0){console.log(44);}
// //       console.log(data);
// //     } catch (error) {
// //       console.error('Error in getLoansByUser:', error);
// //       throw error;
// //     }
// //   }
// //   async function getLoansByBook(book_id) {
// //     console.log(33);
// //     try {
// //       // Check if the user already exists based on email and idNumber
// //       const [data] = await pool.query(
// //         'SELECT * FROM loans WHERE book_id = ?',
// //         [book_id]
// //       );
// //        if (data.length === 0){console.log(44);}
// //       console.log(data);
// //     } catch (error) {
// //       console.error('Error in getLoansByUser:', error);
// //       throw error;
// //     }
// //   }
// //   async function addLoan(email, book_id, loan_date, return_date) {
// //     try {
// //       // Check if the book exists in the books table
// //       const [existingBooks] = await pool.query(
// //         'SELECT * FROM books WHERE id = ?',
// //         [book_id]
// //       );

// //       if (existingBooks.length === 0) {
// //         console.log('Book not found.');
// //         return null;
// //       }

// //       // Check if the book is currently on loan
// //       const [existingLoans] = await pool.query(
// //         'SELECT * FROM loans WHERE book_id = ? AND returned = 0',
// //         [book_id]
// //       );

// //       if (existingLoans.length > 0) {
// //         console.log('Book is currently on loan.');
// //         return null;
// //       }

// //       // Retrieve the name and phone number of the customer based on their email
// //       const [customerData] = await pool.query(
// //         'SELECT name, phone FROM customers WHERE email = ?',
// //         [email]
// //       );

// //       if (customerData.length === 0) {
// //         console.log('Customer not found.');
// //         return null;
// //       }

// //       // Extract the name and phone number from the query result
// //       const { name, phone } = customerData[0];

// //       // Insert a new loan into the loans table with the customer's name and phone number
// //       const [result] = await pool.query(
// //         'INSERT INTO loans (borrower_email, borrower_name, borrower_phone, book_id, loan_date, return_date) VALUES (?, ?, ?, ?, ?, ?)',
// //         [email, name, phone, book_id, loan_date, return_date]
// //       );

// //       console.log(`Inserted new loan with ID: ${result.insertId}`);
// //       return result.insertId; // Return the ID of the newly inserted loan
// //     } catch (error) {
// //       console.error('Error in addLoan:', error);
// //       throw error;
// //     }
// //   }

// //   // Example usage
// //   // addLoan('avery@example.com', 90, '2024-01-31', '2024-02-15');
// //   function calculateNextMonthDate() {
// //     const currentDate = new Date();
// //     const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
// //     return nextMonth;
// //   }

// //   async function updateLoansReturnDateToNextMonth() {
// //     const nextMonthDate = calculateNextMonthDate();

// //     try {
// //       const [updatedRows] = await pool.query(
// //         'UPDATE loans SET return_date = ? WHERE returned = 0 AND return_date IS NULL',
// //         [nextMonthDate]
// //       );

// //       console.log(`Updated ${updatedRows.affectedRows} row(s) with next month's date.`);
// //     } catch (error) {
// //       console.error('Error updating loans:', error);
// //       throw error;
// //     }
// //   }

// //   // Call the function to update loans' return dates to next month
// //   updateLoansReturnDateToNextMonth();

// //   async function updateLoanByBookId(id, email) {
// //     console.log(55);
// //     const currentDate = new Date(); // Use new Date() to get the current date and time

// //     try {
// //       // Check if the loan exists based on id and borrower_email
// //       const [existingLoan] = await pool.query(
// //         'SELECT * FROM loans WHERE id = ? AND borrower_email = ?',
// //         [id, email]
// //       );

// //       if (existingLoan.length === 0) {
// //         console.log('Loan not found.');
// //         return null;
// //       }

// //       // Update the return_date of the loan
// //       const [updatedRows] = await pool.query(
// //         'UPDATE loans SET return_date = ? WHERE id = ? AND borrower_email = ?',
// //         [currentDate, id, email]
// //       );

// //       console.log(`Updated ${updatedRows.affectedRows} row(s).`);

// //       // Fetch the updated loan details
// //       const [updatedLoan] = await pool.query(
// //         'SELECT * FROM loans WHERE id = ? AND borrower_email = ?',
// //         [id, email]
// //       );

// //       console.log('Updated loan details:', updatedLoan);
// //       return updatedLoan;
// //     } catch (error) {
// //       console.error('Error in updateById:', error);
// //       throw error;
// //     }
// //   }

// //   // Example usage
// //   // updateById(360, 'luke@example.com');

// //   module.exports = {getAllLoans,getLoansByBook,getLoansByUser,getLoansOver,addLoan,updateLoanByBookId}
// // //   getLoansByBook(84);

// // //   getAllLoans()
// //   // addUser("ar", "05236482679", "311201826", "748219", "rozner@GamesOutlined.com")

// //   // Call the function
// //   // ss();
// //   // addUser("ar", "0523648679", "311201888", "748219", "rozner@GamesOutlined.com")

// // //   module.exports = {getUser,addUser}

 const mysql = require("mysql2/promise");

const { pool } = require("./Pool.js");

async function getLoansOver() {
  console.log(17);
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
  console.log(33);
  try {
    const data = await pool.query("SELECT * FROM loans");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching all loans:", error);
    throw error;
  }
}

async function getLoansByUser(email) {
  console.log(33);
  try {
    const [data] = await pool.query(
      "SELECT * FROM loans WHERE borrower_email = ?",
      [email]
    );
    if (data.length === 0) {
      console.log("No loans found for this user.");
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching loans by user:", error);
    throw error;
  }
}

async function getLoansByBook(book_id) {
  console.log(33);
  try {
    const [data] = await pool.query("SELECT * FROM loans WHERE book_id = ?", [
      book_id,
    ]);
    if (data.length === 0) {
      console.log("No loans found for this book.");
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching loans by book:", error);
    throw error;
  }
}

async function addLoan(email, book_id, loan_date, return_date) {
  try {
    // ... (code for adding a new loan)
  } catch (error) {
    console.error("Error adding loan:", error);
    throw error;
  }
}

async function updateLoan(id, email) {
  console.log(55);
  const currentDate = new Date();

  try {
    // ... (code for updating an existing loan)
  } catch (error) {
    console.error("Error updating loan by book ID:", error);
    throw error;
  }
}

module.exports = {
  getAllLoans,
  getLoansByBook,
  getLoansByUser,
  getLoansOver,
  addLoan,
  updateLoan,
};
