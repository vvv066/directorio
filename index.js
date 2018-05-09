const admin = require('firebase-admin');
const functions = require('firebase-functions');
const firebase = require('firebase')

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAw5pLYHpU_EWg46M6AhP0ul4MuxBPFNk8",
    authDomain: "sigahabitat-2018.firebaseapp.com",
    databaseURL: "https://sigahabitat-2018.firebaseio.com",
    projectId: "sigahabitat-2018",
    storageBucket: "sigahabitat-2018.appspot.com",
    messagingSenderId: "908657380528"
  };
  firebase.initializeApp(config);

var db = admin.firestore();


var docRef = db.collection('users').doc('alovelace');

var setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
});