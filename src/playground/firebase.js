// CONFIG
// import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyAHVu7JG4vYI4MoU7Nr9YeN5_6Qz3Djqog",
//   authDomain: "expensify-d6f86.firebaseapp.com",
//   databaseURL: "https://expensify-d6f86.firebaseio.com",
//   projectId: "expensify-d6f86",
//   storageBucket: "expensify-d6f86.appspot.com",
//   messagingSenderId: "687670449609",
//   appId: "1:687670449609:web:c2f1dca754718b265c8418",
//   measurementId: "G-VH6WJBE6FG"
// };

// firebase.initializeApp(firebaseConfig)
// const database = firebase.database()


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses').once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);
//   })
//   .catch()

// database.ref('expenses').push({
//   description: 'Sokoladas',
//   note: 'labai skanus',
//   amaount: 2,
//   createdAt: 10000
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log(expenses);
// })



// SOTRING LIST BASED DATA WITH OBJECTS
// database.ref('notes').push({
//   title: 'uf course topics',
//   body: 'react, html, bla bla bla'
// })

// // STORING ARRAY (nepalaiko array, pakeicia struktura)
// const notes = [{
//   id: '12',
//   title: 'best name ever',
//   body: 'sudu malunas'
// }, {
//   id: '1222',
//   title: 'worst name ever',
//   body: 'myzalu malunas'
// }]

// database.ref('notes').set(notes)


// FETCH over and over again (subscription examples)
// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (error) => {
//   console.log(error);
// })
// database.ref().on('value', (snapshot) => {
//   const data = snapshot.val()
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (error) => {
//   console.log('error occured: ', error);
// })


// FETCH ONCE
// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val);

//   })
//   .catch((e) => {
//     console.log(e);

//   })


// SET EXAMPLE
// database.ref().set({
//   name: 'Rutka Urbo',
//   age: 18,
//   stressLevel: 6,
//   job: {
//     title: 'sudu developer',
//     company: 'sudu comapy'
//   },
//   isGay: true,
//   location: {
//     city: 'Vilnius',
//     country: 'Lithuania'
//   }
// }).then(() => {
//   console.log('data is savedaa');
// }).catch((error) => {
//   console.log('error:', error);
// })


// UPDATE EXAMPLES
// database.ref().update({
//   name: 'kakutis',
//   age: 10
// })
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Sudas'
// })


// REMOVE EXAMPLE
// database.ref('isGay').remove()


// PROMISE EXAMPLE
// database.ref('attributes').set({
//   height: 160,
//   weight: 54
// }).then(() => {
//   console.log('pavyko');
// }).catch((error) => {
//   console.log('erroras: ', error);
// })

