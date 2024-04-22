const express = require('express');
const router = express.Router();
const Book = require('../controllers/book');

router.get('/', Book.getBooksList);

module.exports = router;
