const bookModel = require('../models/bookModel');

const bookController = {

    getAllBooks: async (req, res, next) => {
        const books = await bookModel.find({});
        const parsedBooks = JSON.parse(books);

        res.locals.books = parsedBooks;
        return next();
    },

    getBook: async (req, res, next) => {
        const {_id} = req.params;
        const book = await bookModel.findOne({_id});
        const parsedBook = JSON.parse(book);

        res.locals.book = parsedBook;
        return next();
    },

    addBook: async (req, res, next) => {
        const {title, author} = req.body;
        const book = await bookModel.create({title, author});

        res.locals.book = book;
        return next();
    },

    updateBook: async (req, res, next) => {
        const {title, author} = req.body;
        const {_id} = req.params;

        const book = await bookModel.findOneAndUpdate({_id}, {title, author}, {new:true});
        const parsedBook = JSON.parse(book);

        res.locals.book = parsedBook;
        return next();
    },

    deleteBook: async (req, res, next) => {
        const {_id} = req.params;

        const book = await bookModel.findOneAndDelete({_id});
        const parsedBook = JSON.parse(book);

        res.locals.book = parsedBook;
        return next();
    }
}

module.exports = bookController;