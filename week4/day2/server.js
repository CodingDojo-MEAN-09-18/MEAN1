const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;
const { Schema } = mongoose;

app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/book_app', {
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => console.log('Connected to MongoDB Book App'));

const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true
  },
  age: {
    type: Number,
    required: true,
  },
  isAlive: {
    type: Boolean,
    default: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
}, {
    timestamps: true,
});


const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Plese supply a book title'],
  },
  pages: {
    type: Number,
    required: true,
    min: 1,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  publisher: String

});

const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);


app.get('/', function (request, response) {
  response.render('index');
});

app.get('/authors', function (request, response) {
  Author.find({})
    .populate('books')
    .then(authors => response.render('authors/index', { authors }))
    .catch(console.log);
});

app.get('/authors/new', function (request, response) {
  response.render('authors/new');
});

app.post('/authors', function (request, response) {
  // const author = new Author({
  //   name: request.body.name,
  //   age: request.body.age,
  //   isAlive: request.body.isAlive
  // })

  Author.create(request.body)
    .then(author => {
      console.log(author);

      response.redirect('/authors');
    })
    .catch(error => {
      const errors = Object.keys(error.errors).map(key => error.errors[key].message);

      response.render('authors/new', { errors });
    });
});

app.get('/books', function (request, response) {
  Book.find({})
    .populate('author')
    .then(books => response.render('books/index', { books }))
    .catch(console.log);
});

app.get('/books/new', function (request, response) {
  Author.find({})
    .then(authors => response.render('books/new', { authors }))
    .catch(console.log);
});

app.post('/books', function (request, response) {
  Book.create(request.body)
    .then(book => {
      console.log(book);

      return Author.findById(book.author)
        .then(author => {
          author.books.push(book._id)

          return author.save();
        })
        .then(() => {
          response.redirect('/books');
      })

    })
    .catch(error => {
      const errors = Object.keys(error.errors).map(key => error.errors[key].message);

      response.render('authors/new', { errors });
    });
});


app.listen(port, console.log(`Express server listening on port ${port}`));
