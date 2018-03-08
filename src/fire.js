import firebase from 'firebase'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyAxL_fCVS8P80L6vGdIwtCGKBqQziF1e8o",
    authDomain: "fir-tests-757aa.firebaseapp.com",
    databaseURL: "https://fir-tests-757aa.firebaseio.com",
    projectId: "fir-tests-757aa",
    storageBucket: "fir-tests-757aa.appspot.com",
    messagingSenderId: "255318999135"
};

const fire = firebase.initializeApp(config);

export default fire
