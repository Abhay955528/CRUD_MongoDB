const express = require("express");
const app = express();

const connectMongoDb = require("./util/mongodb");

require("dotenv").config();
const boydParser = require("body-parser");

const bookRoutes = require("./routes/book");
const cors = require("cors");

app.use(cors());

app.use(boydParser.json());
app.use(bookRoutes);

connectMongoDb(process.env.MOGOOSE_CONNECTION)
  .then(() => {
    console.log("Mogoose Connected");
  })
  .catch(() => {
    console.log("Mogoose Error");
  });

app.listen(process.env.PORT, () => {
  console.log("Your Are Live..");
});