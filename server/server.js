const express = require('express');
const path = require('path');
const booksRouter = require('./routes/booksRouter');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res, next)=> {
    res.status(200).send("Hello Express");
})
app.use('/books', booksRouter);

app.listen(3000);

module.exports = app;