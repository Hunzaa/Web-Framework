const express = require('express');
const router = express.Router();
const ctrlBooks = require('../controllers/books'); 
const ctrlOthers = require('../controllers/others');

/* Books pages */
router.get('/', ctrlBooks.homelist);
router.get('/book', ctrlBooks.bookInfo);
router.get('/book/review/new', ctrlBooks.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;

