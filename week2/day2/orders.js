function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        },
        tarp: {
          product: 'A large tarp',
          directions: function() { return 'cover the floor!' }
        }
      };

      console.log('item is ready', item);

      if (item in warehouse) {
        resolve(warehouse[item]);
      } else {
        reject(new Error(`${item} is out of stock`));
      }

    }, deliveryTime);
  });
}


function receivedItem(item) {
  console.log(`Received ${ item.product } time to ${ item.directions() }`);
}

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');
const roller = orderSupplies('roller').catch(function (error) {
  console.log(error.message);
});

// tarp
//   .then(function (item) {
//     receivedItem(item);
//     return paint;
//   })
//   .then(receivedItem)
//   .then(function () {
//     return brush;
//   })
//   .then(function (item) {
//     receivedItem(item);

//     return roller;
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });


Promise.all([tarp, paint, brush])
  .then(items => {
    items.forEach(receivedItem);
  })



// orderSupplies('paint', function (item) {
//   receivedItem(item);
//   orderSupplies('brush', receivedItem);
// });



// let havePaint = false;

// orderSupplies('paint', function (item) {
//   receivedItem(item);

//   havePaint = true;
// });

// orderSupplies('brush', function (item) {
//   if (havePaint) {
//     receivedItem(item);
//   } else {
//     const timer = setInterval(function () {
//       console.log('.....checking for paint....');
//       if (havePaint) {
//         clearInterval(timer);
//         return receivedItem(item);
//       }
//     }, 50);
//   }
// });

// orderSupplies('brush', handleBrush);


// function handleBrush(item) {
//   console.log('.. checking for paint', item);
//   if (havePaint) {
//     return receivedItem(item);
//   }

//   // handleBrush(item);
//   setTimeout(handleBrush, 50, item);
// }


// const items = ['tarp', 'paint', 'brush'];

// function orders(items) {
//   const received = [];

//   for (let index = 0; index < items.length; index++) {
//     const item = items[index];


//     orderSupplies(item, function (product) {
//       received[index] = product;
// // [ , , , product]
//       console.log('got product', index);

//       if (received.filter(p => p).length === items.length) {
//         received.forEach(receivedItem);
//       }
//     });
//   }
// }


// orders(items);


// const paint = new Promise(function (resolve, reject) {
//   console.log(resolve, reject);

//   orderSupplies('paint', resolve);
// });

// const brush = new Promise(function (resolve, reject) {
//   console.log(resolve, reject);

//   orderSupplies('brush', resolve);
// });

// const tarp = new Promise(function (resolve, reject) {
//   console.log(resolve, reject);

//   orderSupplies('tarp', resolve);
// });

// tarp
//   .then(receivedItem)
//   .then(function () {
//     return paint;
//   })


//   .then(function (item) {
//     // success

//     receivedItem(item)
//     return brush

//   })
//   .then(function (item) {
//     // success

//     receivedItem(item)
//   });








