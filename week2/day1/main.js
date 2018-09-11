

// function square(array) {
//   const results = [];

//   for (let index = 0; index < array.length; index++) {
//     const number = array[index];
//     results.push(number * number);
//   }

//   return results;
// }

function add(array) {
  const results = [];

  for (let index = 0; index < array.length; index++) {
    const number = array[index];

    results.push(number + number);
  }

  return results;
}

function map(array, callback) {
  const results = [];

  console.log(callback.toString());

  for (let index = 0; index < array.length; index++) {

    const result = callback(array[index]);

    console.log('result from callback', result);

    results.push(result);
  }

  return results;
}


const numArray = [99, 34, 567, 192];
// square
// const res = map(numArray, square);
// const rez = map(numArray, (element) => element + element);

// const toS = map(numArray, element => `this is a string now ${element}`);

// console.log(res, rez, toS);


function square(num) {

  if (num % 2 === 0) {
    return num * num;

  } else {
    return num;
  }
}



// console.log('before');


// function sayHello(name) {
//   setTimeout(function () {
//     console.log(`Hello ${name}`);
//    }, 2000);
// }


// sayHello('Jason');

// console.log('after');


function getThingsFromDB(query, callback) {
  console.log(query);
  setTimeout(function () {
    const data = ['thing 1', 'thing 2', 'thing 3', 'thing 4'];
    console.log('', callback.toString());

    callback(data);
  }, 3000);
}

// python
// const things = getThingsFromDB()

// js method
getThingsFromDB('select * from things;', (things) => {
  console.log('running anon func in the future!@!!', things);

  const results = map(things, thing => `${thing} from the database over time`);

  console.log(results);


});

