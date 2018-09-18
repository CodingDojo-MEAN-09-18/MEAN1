const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'))

const names = ['Jason', 'Marco', 'Jose', 'Krish'];

app
  .use(parser.urlencoded({ extended: true }))
  .use(express.static(path.resolve('static')));

app.get('/', function (request, response) {
  console.log('at index');
  response.render('index');
});

app.post('/names', function (request, response) {
  console.log('posting content', request.body);

  const name = request.body.name;

  names.push(name);

  // response.render('names', { name, names: names })
  response.redirect('/');
});

app.get('/names/:name_id', function (request, response) {
  console.log(request.params);
  response.send(names[request.params.name_id]);
})


app.listen(port, () => console.log(`Express server listening on port ${port}`));
