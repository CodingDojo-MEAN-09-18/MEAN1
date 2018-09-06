

function Person(name, items) {

  if (!(this instanceof Person)) {
    console.log(name, ' is an not instance of person');

    return new Person(name, items);
  }
  this.name = name;
  const person = { name };

  // console.log('this context', this);

  this.items = items;

  // this.take = take;


}

Person.prototype.take = function take(item, target) {
  console.log('inside take', this);

  if (!target || !Array.isArray(target.items)) {
    // console.log('target does not have items array');
    throw new Error('target does not ahve an items array');
  }

  for (let index = 0; index < target.items.length; index++) {
    if (item === target.items[index]) {
      // we found it, do something
      // ['gold', 'wallet', 'lint']
      // slice // makes copy of content
      // splice // mutates array

      target.items.splice(index, 1);

      this.items.push(item);

      return true;
    }
  }

  return false;
}


const bob = Person('Bob', ['gold', 'wallet', 'lint']);
const alice = new Person('Alice', ['money', 'keys', 'phone']);

console.log(bob);
console.log(alice);


alice.take('gold', bob);
bob.take('keys', alice);


console.log(bob);
console.log(alice);

// interface Target {
//   items: Array<string>;
// }

const backpack = {
  items: ['compass', 'map', 'trailmix']
};

console.log(backpack);

alice.take('trailmix', backpack);

// backpack.take('gold', alice);
bob.take.apply(backpack, ['gold', alice]);

console.log(bob);
console.log(alice);
console.log(backpack);
