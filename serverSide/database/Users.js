const mysql = require("mysql2/promise");
const { pool } = require("./Pool.js");

async function getUser(email, password) {
  try {
    const [data] = await pool.query(
      "SELECT * FROM customers WHERE email = ? AND password = ?",
      [email, password]
    );
    if (data.length > 0) {
      console.log("User found:");
      console.log(data);
      return data;
    } else {
      console.log("User not found.");
      return null;
    }
  } catch (error) {
    console.error("Error in getUser:", error);
    throw error;
  }
}

async function getUsersByLetter(letterByLastName) {
  try {
    const query = `SELECT * FROM customers WHERE last_name LIKE CONCAT(?, '%')`;
    const params = [letterByLastName];
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

async function addUser(first_name, last_name, phone, idNumber, password, email) {
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
      "INSERT INTO customers (email, phone, Israeli_ID, password, first_name, last_name) VALUES (?, ?, ?, ?, ?, ?)",
      [email, phone, idNumber, password, first_name, last_name]
    );
    
console.log(99);
    // Check if the user was successfully added
    if (result.affectedRows === 1) {
      console.log("User added successfully");
      const [data] = await pool.query(
        "SELECT * FROM customers WHERE id = ? ",
        [result.insertId ]
      );
      console.log(data);
      return data; // Return the ID of the newly inserted user
    } else {
      console.log("Failed to add user");
      
    }
  } catch (error) {


    throw error;
  }
}

async function getUserById(id) {
  try {
    const [data] = await pool.query(
      "SELECT * FROM customers WHERE id = ? ",
      [id]
    );
    if (data.length > 0) {
      console.log("User found:");
      console.log(data);
      return data;
    } else {
      console.log("User not found.");
      return null;
    }
  } catch (error) {
    console.error("Error in getUser:", error);
    throw error;
  }
}
// addUser(first_name, last_name, phone, idNumber, password, email)
// addUser("arr","sdss", "05236482679", "388", "123123", "rnr@Galined.com")


// async function testAddUser() {
//   try {
//     const result = await addUser("arr", "sdss", "05236482679", "9999", "123123", "rooozner@Gamutlined.com");
//     console.log("Result:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// testAddUser();

// Call the function
// ss();
// addUser("ar", "0523648679", "311201888", "748219", "rozner@GamesOutlined.com")

// getUsersByLetter('1')
module.exports = { getUser, addUser, getUsersByLetter, getUserById };
