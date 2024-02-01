const mysql = require("mysql2/promise");
const { pool } = require("./Pool.js");

async function getAllBooks() {
  try {
    const data = await pool.query("SELECT * FROM books");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching all books:", error);
    throw error;
  }
}

async function getAllBooksAvailable() {
  try {
    const data = await pool.query(
      "SELECT * FROM books WHERE status = 'Available'"
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching available books:", error);
    throw error;
  }
}

async function getABooksByYear(year) {
  try {
    const [data] = await pool.query(
      "SELECT * FROM books WHERE release_year = ?",
      [year]
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching books by release year:", error);
    throw error;
  }
}

async function getABooksByGenre(genre) {
  try {
    const [data] = await pool.query("SELECT * FROM books WHERE genre = ?", [
      genre,
    ]);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching books by genre:", error);
    throw error;
  }
}

async function getABooksByPage(page) {
  try {
    const [data] = await pool.query("SELECT * FROM books WHERE page = ?", [
      page,
    ]);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching books by page:", error);
    throw error;
  }
}

async function getABooksByAudience(audience) {
  try {
    const [data] = await pool.query("SELECT * FROM books WHERE audience = ?", [
      audience,
    ]);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching books by audience:", error);
    throw error;
  }
}

async function searchByStartingLetterInCategory(letter, category) {
  if (category !== "title" && category !== "author" && category !== "genre") {
    console.log(null);
    return null;
  } else {
    try {
      const query = `SELECT * FROM books WHERE ${category} LIKE CONCAT(?, '%')`;
      const params = [letter];

      const [data] = await pool.query(query, params);

      if (data.length === 0) {
        console.log("No books found for this category and starting letter.");
      }
      console.log(data);
      return data;
    } catch (error) {
      console.error(
        "Error fetching books by category and starting letter:",
        error
      );
      throw error;
    }
  }
}

//   getABooksByPage('c2')
//   getABooksByAudience('teen')
//   getABooksByGenre('Fiction')
//   searchByStartingLetterInCategory( 'y' ,'genre');
// getABooksByYear(2016)

module.exports = {
  getAllBooks,
  getAllBooksAvailable,
  getABooksByYear,
  getABooksByGenre,
  getABooksByPage,
  getABooksByAudience,
  searchByStartingLetterInCategory,
};
