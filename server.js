require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb running")
);

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/post", postRoute);
app.use("/user", userRoute);

app.listen(port, console.log(`express app running on port:${8000}`));
