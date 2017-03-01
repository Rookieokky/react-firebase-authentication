import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBhrr0x1428BOsE1-9Cl7cQfsCTLZuU_9g',
  authDomain: 'vue-test-aef9d.firebaseapp.com',
  databaseURL: 'https://vue-test-aef9d.firebaseio.com',
  storageBucket: 'vue-test-aef9d.appspot.com',
  messagingSenderId: '332144500364'
};

const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;
