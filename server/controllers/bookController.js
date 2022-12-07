const bookModel = require('../models/bookModel');

const bookController = {

    getAllBooks: async (req, res, next) => {
        const books = await bookModel.find({});

        res.locals.books = books;
        return next();
    },

    getBook: async (req, res, next) => {
        const {_id} = req.params;
        const book = await bookModel.findOne({_id});

        res.locals.book = book;
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

        res.locals.book = book;
        return next();
    },

    deleteBook: async (req, res, next) => {
        const {_id} = req.params;

        const book = await bookModel.findOneAndDelete({_id});

        res.locals.book = book;
        return next();
    }
}

module.exports = bookController;