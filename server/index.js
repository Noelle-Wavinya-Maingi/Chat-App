const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute")

const app = express();
//Configuration of the dotenv package
require("dotenv").config();

//Middleware functions
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute)

//CRUD Operations
app.get("/", (req, res) => {
  res.send("Welcome to our ChatApp API.");
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server running on port...: ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established successfully."))
  .catch((error) => console.log("MongoDB connection failed:", error.message));
