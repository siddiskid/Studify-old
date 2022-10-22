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

function addToTaskList(taskBruh){
    let newtoadd = document.createElement('div')
    newtoadd.className = 'tasks'
    newtoadd.id = 'tasks'

    let bruh1 = document.createElement('div')
    bruh1.className = 'taskName'
    bruh1.id = 'taskName'

    let butt = document.createElement('button')
    butt.id = 'omgwy'
    butt.innerHTML = 'Done'
    butt.onclick = function(abcd){
        document.getElementById('omgwy').parentElement.parentElement.remove()
        db.collection(userid).doc(taskBruh).delete()

    }

    let bruh2 = document.createElement('div')
    bruh2.className = 'btnnnn'
    bruh2.id = 'btnnnn'

    bruh1.innerHTML = taskBruh
    bruh2.appendChild(butt)

    newtoadd.appendChild(bruh1)
    newtoadd.appendChild(bruh2)
    document.getElementById('task-stuff').appendChild(newtoadd)
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
      document.getElementById('task-stuff').innerHTML = 'Task list'
      userLoggedIn = 'false'
    }
});

function addTask(){

    toaddthing = document.getElementById('add-task-input').value
    console.log(toaddthing)

    if (toaddthing.length > 30){
        alert('Please shorten the task name')
    } else {
        if (userLoggedIn == 'true'){
            db.collection(userid).doc(toaddthing).set({
                task: toaddthing
            })
            document.getElementById('task-stuff').innerHTML = 'Task list'
            db.collection(userid).get().then(snapshot => {
                snapshot.docs.forEach(docs => {
                    addToTaskList(docs.data().task)
                })
            })
        } else {
            addToTaskList(toaddthing)
        }
    }
}