const express = require("express");

const {
  getUser,
  addUser,
  getUsersByLetter,
  getUserById,
  deleteUser,
  getAllUsers,
} = require("../database/Users");
const {
  getToken,
  validateToken,
  validateAdmin,
} = require("../middleware/auth");
const { login } = require("../database/login");

const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
  console.log(11);

  try {
    const data = await getAllUsers();
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

userRoutes.post("/login", async (req, res) => {
  console.log(11);

  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(10);
    const data = await getUser(email, password);
    if (!data) {
      console.log("Data is null, returning 404");
      res.status(404).send("user is not found");
      return;
    }
    const token = { email: email, permission: "user" };
    res.json({ data: data, token: await getToken(token) });
    // res.json(data);
  } catch (err) {
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal Server Error");
  }
});
userRoutes.get("/:id", async (req, res) => {
  console.log(11);
  const id = req.params.id;
  try {
    const data = await getUserById(id);
    if (!data) {
      console.log("Data is null, returning 404");
      res.status(404).send("user is not found");
      return;
    }
    res.json(data);
  } catch (err) {
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal Server Error");
  }
});
userRoutes.get("/:userLetter", async (req, res) => {
  console.log(44);

  try {
    const letter = req.params.userLetter; // Use a different name for the variable
    const data = await getUsersByLetter(letter);
    if (!data) {
      console.log("Data is null, returning 404");
      res.status(404).send("Letter is not found");
      return;
    }
    res.json(data);
  } catch (err) {
    console.error("Error in letter:", err);
    res.status(500).send("Internal Server Error");
  }
});

userRoutes.post("/", validateToken, validateAdmin, async (req, res) => {
  console.log(22);

  try {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const idNumber = req.body.idNumber;
    const password = req.body.password;
    const phone = req.body.phone;

    const data = await addUser(
      first_name,
      last_name,
      phone,
      idNumber,
      password,
      email
    );
    if (data) {
      res.status(201).json(data);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(36);
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal Server Error");
  }
});

userRoutes.delete("/", validateToken, validateAdmin, async (req, res) => {
  // userRoutes.delete("/",  async (req, res) => {
  // userRoutes.delete("/", async (req, res) => {
  console.log(1111);
  const id = req.body.id;
  const email = req.body.email;
  console.log(id);

  try {
    const data = await deleteUser(id, email);
    if (!data) {
      console.log("Data is null, returning 404");
      res.status(404).send("Letter is not found");
      return;
    }
    res.json(data);
  } catch (err) {
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal 789 Server Error");
  }
});

module.exports = { userRoutes };
