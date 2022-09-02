const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const usersRoutes = require("./routes/users.route.js");

app.use(cors());
app.use(express.json());

//Routes
app.use("/user", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello From Assignment 1");
});

app.all("*", (req, res) => {
  res.send("No route found.");
});

app.listen(port, () => {
  console.log(`Assignment 1 app listening on port ${port}`);
});
