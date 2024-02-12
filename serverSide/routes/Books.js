const express = require("express");

const {
    getAllBooks,
    getAllBooksAvailable,
    getABooksByYear,
    getABooksByGenre,
    getABooksByPage,
    getABooksByAudience,
    searchByStartingLetterInCategory,
    deleteBookById,
    addBook
} = require("../database/books");
const { login } = require("../database/login");

const booksRoutes = express.Router();

booksRoutes.get("/", async (req, res) => {
    console.log(11);
  
    try {
      
      const data = await getAllBooks();
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

  booksRoutes.get("/Available", async (req, res) => {
    console.log(11);
  
    try {
      
      const data = await getAllBooksAvailable();
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

booksRoutes.get("/:year", async (req, res) => {
  console.log(11);

  try {
    const year=req.params.year;
    const data = await getABooksByYear(year);
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
booksRoutes.get("/:genre", async (req, res) => {
  console.log(11);

  try {
    const genre=req.params.genre;
    const data = await getABooksByGenre(genre);
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
booksRoutes.get("/:page", async (req, res) => {
  console.log(11);

  try {
    const page=req.params.page;
    const data = await getABooksByPage(page);
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
booksRoutes.get("/:audience", async (req, res) => {
  console.log(11);

  try {
    const audience=req.params.audience;
    const data = await getABooksByAudience(audience);
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
booksRoutes.get("/:category/:letter", async (req, res) => {
  console.log(11);
const letter = req.body.letter;
const category = req.body.category;

  try {
    
    const data = await searchByStartingLetterInCategory(category,letter);
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
booksRoutes.delete("/:id", async (req, res) => {
  console.log(11);
  const id = req.body.id;

  try {
    
    const data = await deleteBookById(id);
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

booksRoutes.post("/", async (req, res) => {
  console.log(22);

  try {
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre;
    const release_year = req.body.release_year;
    const page = req.body.page;
    const audience = req.body.audience;
    const status = req.body.status;
    const data = await addBook(title, author, genre, release_year, page, audience, status);
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
// booksRoutes.put("/", async (req, res) => {
//   console.log(22);

//   try {
//     const email = req.body.email;
//     const id = req.body.id;

//     const data = await updateLoan (id, email);
//     if (data) {
//       res.status(201).json(data);
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     console.error("Error in postsRoutes:", err);
//     res.status(500).send("Internal Server Error");
//   }
// });

module.exports = { booksRoutes };
