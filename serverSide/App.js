const express = require("express");
const { userRoutes } = require("./routes/Users");
const { adminRoutes } = require("./routes/Admin");
const { loansRoutes } = require("./routes/loans");
const { booksRoutes } = require("./routes/books");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Mounting userRoutes under /api/user
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/loans", loansRoutes);
app.use("/api/books", booksRoutes);

// Error handling middleware (example)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const port = process.env.PORT || 9999;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
