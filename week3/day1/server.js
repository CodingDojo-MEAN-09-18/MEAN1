const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;


const logger = require('./server/middleware/logger');

// console.log('logger', logger);
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'))





const names = ['Jason', 'Marco', 'Jose', 'Krish'];

app
  .use(parser.urlencoded({ extended: true }))
  .use(express.static(path.resolve('static'), {
    index: false
  }))
  .use(logger)
  .use(function (request, response, next) {
    console.log(next);

    const error = new Error('something went wrong!!!');

    next(error);
  });



app.get('/', function (request, response, next) {
  console.log('at index');
  response.render('index');
});

app.post('/names', function (request, response) {
  console.log('posting content', request.body);

  const name = request.body.name;

  names.push(name);

  response.render('names', { name, names: names })
  // response.redirect('/');
});

app.get('/names/:name_id', function (request, response) {
  console.log(request.params);
  response.send(names[request.params.name_id]);
});

app.use(function (error, request, response, next) {
  console.log('handling error.....');

  // log error to db
  console.log(error.message);

  next(error);
});

app.use(function (error, request, response, next) {
  response.send(error.message);
});


app.listen(port, () => console.log(`Express server listening on port ${port}`));
