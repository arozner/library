const mysql = require("mysql2/promise");
const { pool } = require("./Pool.js");

async function getUser(username, password) {
  try {
    const [data] = await pool.query(
      `SELECT * FROM customers WHERE name = ? AND password =? `,
      [username, password]
    );
    if (data.length > 0) {
      console.log(data);
      return data;
    } else {
      console.log(null);
      return null;
    }
  } catch (error) {
    console.error("Error in todosGetByUserId:", error);
    throw error;
  }
}
async function getUsersByLetter(letter) {
  try {
    const query = `SELECT * FROM customers WHERE name LIKE CONCAT(?, '%')`;
    const params = [letter];
    const [data] = await pool.query(query, params);
    if (data.length > 0) {
      console.log(data);
      return data;
    } else {
      console.log(null);
      return null;
    }
  } catch (error) {
    console.error("Error in getUsersByLetter:", error);
    throw error;
  }
}

async function addUser(name, phone, idNumber, password, email) {
  console.log(33);
  try {
    // Check if the user already exists based on email and idNumber
    const [existingUsers] = await pool.query(
      "SELECT * FROM customers WHERE email = ? OR Israeli_ID = ?",
      [email, idNumber]
    );

    if (existingUsers.length > 0) {
      // User with the same email or idNumber already exists
      console.log("User already exists:", existingUsers);
      return null; // Indicate that the user was not added
    }

    // User does not exist, so insert a new user
    const [result] = await pool.query(
      "INSERT INTO customers ( name, email, phone, Israeli_ID, password) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, idNumber, password]
    );

    // Check if the user was successfully added
    if (result.affectedRows === 1) {
      console.log("User added successfully");
      return result.insertId; // Return the ID of the newly inserted user
    } else {
      console.log("Failed to add user");
      return null; // Indicate that the user was not added
    }
  } catch (error) {
    console.error("Error in addUser:", error);
    throw error;
  }
}

// addUser("ar", "05236482679", "311201826", "748219", "rozner@GamesOutlined.com")

// Call the function
// ss();
// addUser("ar", "0523648679", "311201888", "748219", "rozner@GamesOutlined.com")

// getUsersByLetter('1')
module.exports = { getUser, addUser, getUsersByLetter };
