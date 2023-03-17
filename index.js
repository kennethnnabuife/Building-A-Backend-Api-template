const express = require("express");
const cors = require("cors");

const products = require("../backend/products");

const app = express();

app.use(express.json());
//for choosing which link can view my backend
app.use(cors());

//to display something in the home page
app.get("/", (req, res) => {
  res.send("You're viewing my dope ass API");
});

//to display something in another page
app.get("/products", (req, res) => {
  res.send([1, 2, 3, 4]);
});

//to display progress/starting of server, and the port it's running on.
const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running on port ${port}`));
