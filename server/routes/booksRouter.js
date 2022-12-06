const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', bookController.getAllBooks, (req, res) => {
    return res.status(200).json(res.locals.books);
})

router.get('/:id', bookController.getBook, (req, res) => {
    return res.status(200).json(res.locals.book);
})

router.post('/create', bookController.addBook, (req, res) => {
    return res.status(200).json(res.locals.book);
})

router.patch('/:_id', bookController.updateBook, (req, res) => {
    return res.status(200).json(res.locals.book);
})

router.delete('/:id', bookController.deleteBook, (req, res) => {
    return res.status(200).json(res.locals.book);
})

module.exports = router;