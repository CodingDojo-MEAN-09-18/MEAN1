const mongoose = require('mongoose');

const { Schema } = mongoose;
// const Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost:27017/animalsssssssss', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Connected to Mongodb'));

// const o = {
//   a: 'this is a',
//   b: 'this is b'
// };

// const a = 'a exists';
// // const b = o.b;
// const { a: c, b } = o;
// console.log('variables', a, b, c);

const animalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Animal name is required']
  },
  age: {
    type: Number,
    required: true
  },
  legs: {
    type: Number,
    required: true,
    min: [0, 'Legs less than 0?!?!?!?!']
  },
  eatsPeople: {
    type: Boolean,
    default: false
  }
});

// Animal => collection => animals
const Animal = mongoose.model('Animal', animalSchema);

const animal = new Animal({
  name: "George",
  age: 23,
  legs: 23
});


// animal.save(function (error, animal) {
//   if (error) {
//     throw error;
//   }

//   console.log(animal);
// });


animal.save()
  .then(animal => {
    console.log(animal);
  })
  .catch(error => {
    console.log(error.errors.name.message);


    const errors = Object.keys(error.errors).map(key => error.errors[key].message);


    // for (let index = 0; index < keys.length; index++) {
    //   console.log(keys, index, keys[index]);
    //   console.log(error.errors[keys[index]].message);

    //   errors.push(error.errors[keys[index]].message);
    // }


    console.log(errors);

    // response.render('form', { errors });
  })
