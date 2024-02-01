const mysql = require('mysql2/promise');
// import mysql from 'mysql2/promise'


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'library',
    password: '0523648679',
});


// async function booksGetALL() {
//     try {
//       const [data] = await pool.query(`SELECT * FROM books`);
//       if (data.length > 0) {
//         console.log(data);
//         // return data;
//       } else {
//         console.log(null);
//         // return null;
//       }
//     } catch (error) {
//       console.error("Error in todosGetALL:", error);
//     //   throw error;
//     }
//   }
//   booksGetALL();
module.exports = {pool};