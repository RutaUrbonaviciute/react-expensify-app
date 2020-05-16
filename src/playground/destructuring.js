// const person = {
//   name: 'pyzda',
//   age: 26,
//   location: {
//     city: 'Vilno',
//     temp: '12'
//   }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`${city} in ${temperature}`);
// }


// const book = {
//   title: 'bybiai mano gyvenimas',
//   author: 'sasa p',
//   publisher: {
//     // name: 'aleksandrija'
//   }
// }


// const { name: publisherName = 'Self-pubes' } = book.publisher

// if (publisherName) {
//   console.log(publisherName);
// }

const address = []
const [, , country = 'narnija blet'] = address

console.log(`You are in ${country}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [coffee, , mediumPrice] = item
console.log(`A medium ${coffee} costs ${mediumPrice}`);





