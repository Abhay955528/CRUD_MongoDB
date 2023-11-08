// const Book = require("../model/book"); //?MySql
const Book = require("../model/m_book"); //?Mogoose

const addBook = async (req, res) => {
  try {
    const { newTitle, newAuthor, newSummary } = req.body;
    console.log(newTitle, newAuthor, newSummary);
    const result = await Book.create({
      title: newAuthor,
      author: newAuthor,
      summary: newSummary,
    });
    res.status(200).json({ newBook: result, message: "CREATE SUCCESFUL" });
  } catch (error) {
    console.log(error);
  }
};

const getBook = async (req, res) => {
  try {
    const result = await Book.find();
    res.status(200).json({ allBook: result, message: "GET ALL DATA" });
  } catch (error) {
    console.log(error);
  }
};

const editBook = async(req,res) =>{
  
}

const deleteBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params._id);
    res.status(201).json({ message: "Delete Succesfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBook,
  getBook,
  deleteBook
};
