var myString = "some string content";

myString = 456345;

console.log(myString);


var array = ['cat', 'dog'];

array[0] = 'fish';

console.log(array.push('cat'));

function myFunc(num, ...rest) {
  var childContent = 'some child content';

  // console.log(arguments);

  console.log(childContent, num, rest);
}

myFunc(234234, 'more stuff', true, [], {});


// console.log(childContent);


// for (var index = 0; index < array.length; index++) {
//   console.log('index', array[index]);
// }

// for (var index in array) {
//   console.log('index', array[index]);
// }
//   0       1      2
// ['fish', 'dog', 'cat']

// for (var [index, content] of array.entries()) {
//   // var index = element[0];
//   // var content = element[1];
//   console.log('element', index, content);
// }

// ['Bob', 'Bob', 234]

// var person = {
//   firstName: 'Bob',
//   lastName: 'Bob',
//   age: 234,
//   key: 'this is a key',
//   'eye-color': 'purple'
// };


// person['hairColor'] = 'brown';

// console.log(person['eye-color']);

// for (var key in person) {
//   console.log('key is => ', person[key]);
// }

