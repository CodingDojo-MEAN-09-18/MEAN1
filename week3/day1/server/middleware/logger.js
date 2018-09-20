const color = require('colors');

/**
* Create middleware that reports information about the incoming http request
* Certain elements will be objects(body, etc), display the key value pairs
* Items to report iff they have value, use colors (an external module):
*                 method
*                 hostname
*                 ip
*                 body
*                 params
*                 protocol
*                 route
*                 path
*                 query
*/

module.exports = function (request, _response, next) {
  const keys = ["method", 'hostname', 'ip', 'body', 'params', 'path', 'protocol', 'route', 'query'];

  keys.forEach(function (key) {
    const data = request[key];

    if (data) {
      if (typeof data === 'object') {
        // then handle object
        if (Object.keys(data).length) {
          console.log(color.red(`The request ${key} object has these properties:`));

          // [ name, Bob ]
          for (const [k, v] of Object.entries(data)) {
            // // console.log('prop', prop, data[prop]);
            // const k = prop[0];
            // const v = prop[1];

            console.log(color.blue(`\t${k} => ${v}`));
          }
        }
      } else {
        console.log(color.magenta(`The request ${key} is ${data}`));
      }
    }
  });

  next();
};


// request = {
//   method: 'GET',
//   body: {
//     name: 'bob'
//   }
// }

// key = 'body';
// prop = 'name';

// request[key][prop]
