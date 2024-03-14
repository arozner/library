const express = require("express");

const { getAdmin } = require("../database/Admin");

const { login } = require("../database/login");
const { getToken, validateToken, validateAdmin } =require("../middleware/auth")

const adminRoutes = express.Router();

// async function authenticate(req, res, next) {
//   try {
//     const auth = req.headers.auth;
//     const [username, password] = auth.split(":");

//     const user = await login(username, password);

//     if (!user) {
//       res.status(400).send();
//       return;
//     }

//     req.user = user;
//     next();
//   } catch (err) {
//     console.error("Error in postsRoutes:", err);
//     res.status(500).send("Internal Server Error");
//     return;
//   }
// }

// userRoutes.get("/:username/: password", async (req, res) => {
adminRoutes.post("/", async (req, res) => {
  console.log(11);

  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(10);
    const data = await getAdmin(email, password);
    if (!data) {
      console.log("Data is null, returning 404");
      res.status(404).send("admin is not found");
      return;
    }
    const token = { email: email, permission: "admin" };
    res.json({ data: data, token: await getToken(token) });

  } catch (err) {
    console.error("Error in postsRoutes:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = { adminRoutes };
