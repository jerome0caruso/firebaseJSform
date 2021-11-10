console.log('Hello we are connected')


const firebaseConfig = {
    apiKey: "AIzaSyDpvXNkcm0iIqlqGZ2nGC55lyDm8bPaOTk",
    authDomain: "javascriptnosql.firebaseapp.com",
    databaseURL: "https://javascriptnosql-default-rtdb.firebaseio.com",
    projectId: "javascriptnosql",
    storageBucket: "javascriptnosql.appspot.com",
    messagingSenderId: "67244412011",
    appId: "1:67244412011:web:1749afcf078b6dbd15352e",
    measurementId: "G-HZ958B50JQ"
  };

// Initialize the firebase app with the Configuration from the App
firebase.initializeApp(firebaseConfig);
console.log(firebase);

// Get a reference to our Realtime Database
const database = firebase.database();

console.log(database);

database.ref().once('value')
    .then(snapshot => snapshot.val())
    .then(rawData => {
        console.log(rawData)
        let studentList = document.getElementById('list');
        rawData.forEach(item => {
            let firstName = item.first_name;
            let lastName = item.last_name;
            studentList.innerHTML += `<li style='list-style: none;' class='list-grou-item'>${firstName} ${lastName}</li>`;
        })
    })

const form = document.getElementById('form');
form.addEventListener('submit', addHardData)


    function addHardData(e) {
        let personCount = document.getElementsByTagName('li').length;
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        e.preventDefault()
       
        console.log("here")
        database.ref(personCount.toString()).set({
            id: personCount + 1,
            first_name: firstName,
            last_name: lastName
        })
        location.reload();
    }