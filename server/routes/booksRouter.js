const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get("/books", bookController.getAllBooks, (req, res) => {
    return res.status(200).json(res.locals.books);
})

router.get("/books/:id", bookController.getBook, (req, res) => {
    return res.status(200).json(res.locals.book);
})

router.post("/books/create", bookController.addBook, (req, res) => {
    return res.status(200).json(res.locals.book);
})

router.patch("/books/:_id", bookController.updateBook, (req, res) => {
    return res.status(200).json(res.locals.book);
})

router.delete("/books/:id", bookController.deleteBook, (req, res) => {
    return res.status(200).json(res.locals.book);
})

module.exports = router;