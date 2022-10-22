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

db = firebase.firestore()

var provider = new firebase.auth.GoogleAuthProvider();
let userLoggedIn = 'false'


function showLogin(){
    if (userLoggedIn == 'true') {
        firebase.auth().signOut()
        alert('Logged out successfully')
    } else {
        firebase.auth().signInWithRedirect(provider)
        firebase.auth().getRedirectResult().then((result) => {
            bruh = result.user
            console.log(bruh)
        }).catch(e => {
            console.log(e)
        })
    }

}

firebase.auth().onAuthStateChanged((user) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      dnm = user.displayName;
      userid = user.uid
      document.getElementById('loginstuff').innerHTML = 'Log out'
      document.getElementById('displayName').innerHTML = 'Hi ' + dnm
      userLoggedIn = 'true'
      db.collection(userid).get().then(snapshot => {
          snapshot.docs.forEach(docs => {
              addToTaskList(docs.data().task)
          })
      })

      // ...
    } else {
      // User is signed out
      document.getElementById('loginstuff').innerHTML = 'Login'
      document.getElementById('displayName').innerHTML = ''
      userLoggedIn = 'false'
    }
});
