const mongoose = require('mongoose');

const URI = 'mongodb+srv://navynot:soloproject@cluster0.qc8zsms.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

mongoose.connect(URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
    dbName: 'OSP-books'
  })
  .then(() => console.log('Connected to Mongo DB'))
  .catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true}
});

const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;