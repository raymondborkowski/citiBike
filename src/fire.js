import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB7_E6_77O_G1Y7qJnqVT_dgEJHRqVhii4",
    authDomain: "citibike-60951.firebaseapp.com",
    databaseURL: "https://citibike-60951.firebaseio.com",
    storageBucket: "citibike-60951.appspot.com",
    messagingSenderId: "582522820397"
};

var fire = firebase.initializeApp(config);
export default fire;