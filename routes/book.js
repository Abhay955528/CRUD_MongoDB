const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/book');

router.post('/user-newBooks',bookControllers.addBook);
router.get('/user-allBooks',bookControllers.getBook);
router.delete('/user-dltBooks:_id',bookControllers.deleteBook)

module.exports = router;