var firebaseConfig = {
    apiKey: "AIzaSyCEaEkWvuCitN_DJ1UULZ6by7z-MRNI_yI",
    authDomain: "studify-c95ff.firebaseapp.com",
    projectId: "studify-c95ff",
    storageBucket: "studify-c95ff.appspot.com",
    messagingSenderId: "620244830376",
    appId: "1:620244830376:web:20e789b5a06f274a6cda9d",
    measurementId: "G-5BJ9QCLQ0Z"
};

firebase.initializeApp(firebaseConfig)

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged((user) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      dnm = user.displayName;
      userid = user.uid
      document.getElementById('greeting').innerHTML = 'Hello ' + dnm + '!'

      document.getElementById('greeting').style.left = '41.5%'

      userLoggedIn = 'true'
      // ...
    } else {
      // User is signed out
      document.getElementById('greeting').innerHTML = 'Hello!'

      document.getElementById('greeting').style.left = '48%'

      userLoggedIn = 'false'
    }
});