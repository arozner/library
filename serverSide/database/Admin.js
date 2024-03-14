const mysql = require("mysql2/promise");
const { pool } = require("./Pool.js");

async function getAdmin(email, password) {
  console.log(22);
  console.log("adminName :", email, "password :", password); 
  try {
    const [data] = await pool.query(
      `SELECT * FROM admins WHERE email = ? AND password =? `,
      [email, password]
    );
    if (data.length > 0) {
      console.log(data);
      return data;
    } else {
      console.log(data);
      console.log(null);
      return null;
    }
  } catch (error) {
    console.error("Error in todosGetByUserId:", error);
    throw error;
  }
}
// getAdmin("admin1", "password1")
// getAdmin("admin1", "password1")

module.exports = { getAdmin };
