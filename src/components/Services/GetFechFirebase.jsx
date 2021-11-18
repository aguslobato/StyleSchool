import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBO6GtW56lFk522SlfUXKPiNoAKLHJQ3Kc",
  authDomain: "styleschool-182b9.firebaseapp.com",
  databaseURL: "https://styleschool-182b9-default-rtdb.firebaseio.com",
  projectId: "styleschool-182b9",
  storageBucket: "styleschool-182b9.appspot.com",
  messagingSenderId: "988958474513",
  appId: "1:988958474513:web:198397d223cf3f7f31ccb0",
  measurementId: "G-ZT8Y9VPWYF"
};


const items = firebase.initializeApp(firebaseConfig)

export function GetFechFirebase(){    
    return firebase.firestore(items)
}