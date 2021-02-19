import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBS9LkXRDbZKznY1llIY6w3tXl82y2Ge_8",
    authDomain: "react-appchat.firebaseapp.com",
    projectId: "react-appchat",
    storageBucket: "react-appchat.appspot.com",
    messagingSenderId: "441911005645",
    appId: "1:441911005645:web:d66fee477f9cdc97483484"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const database = app.firestore();

  export default database;