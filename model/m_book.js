const mongoose = require("mongoose");

const Book = new mongoose.Schema({

  title: {
    type: String,
    requried: true,
  },
  author: {
    type: String,
    requried: true,
  },
  summary: {
    type: String,
    requried: true,
  },
});

const User = mongoose.model("books", Book);

module.exports = User;
