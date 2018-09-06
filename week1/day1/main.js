var myString;
var index;

myString = "some string content";

myString = 456345;

console.log(myString);


var array = ['cat', 'dog'];

array[0] = 'fish';

console.log(array.push('cat'));

function myFunc(num, ...rest) {
  function anotherFunc() {
    var childStuff = 'child stuff';
    console.log('inside another func', childContent);

    return childStuff;
  }
  var childContent = 'some child content';

  // console.log(arguments);\
  var stuff = anotherFunc();



  console.log(childContent, num, rest, stuff);
}

myFunc(234234, 'more stuff', true, [], {});
// myFunc.anotherFunc();

// console.log(childContent);
// console.log('index before loop', index);

// for (let index = 0; index < array.length; index++) {
//   console.log('index', array[index]);
// }

// console.log('index after loop', index);

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

function counter() {
  var count = 0;

  function childScope() {
    return ++count;
  }

  return childScope;
}

counter = counter();

console.log(counter);

console.log(counter());
// 1
console.log(counter());
// 2
console.log(counter());
// 3
console.log(counter());
// 4
console.log(counter());
// 5
