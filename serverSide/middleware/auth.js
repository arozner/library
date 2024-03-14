const jwt = require("jsonwebtoken");
require('dotenv').config()

// const cecret = require("../env").CECRET;
const cecret = process.env.CECRET;
async function getToken(user) {
//     user = {email : "aa@bb",
// permission: "user"}
// user.push("user")
  let token = jwt.sign(user, cecret, { expiresIn: "10m" });
//   let authorization ={authorization : token};
  return token;
}

// async function validateToken(req, res, next) {
//   let token = req.headers.authorization.split("Bearer ")[1];
//   try {
//     console.log(333);

//     let user = jwt.verify(token, cecret);

//     req.body.user = user
//     next();
//   } catch {
//     console.log(111);
//     res.sendStatus(401);
//   }
// }
async function validateToken(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
   console.log(99);
    return res.sendStatus(401);
  }
  let token = req.headers.authorization.split("Bearer ")[1];
  try {
    let user = jwt.verify(token, cecret);
    req.body.user = user;
    next();
  } catch {
    res.sendStatus(401);
  }
}


async function validateAdmin(req, res, next) {
  if (req.body?.user.permission == "admin") {
    next();
  } else {
    console.log(222);

    res.sendStatus(401);
  }
}


module.exports = { getToken, validateToken, validateAdmin };
