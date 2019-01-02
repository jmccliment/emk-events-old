import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAjW-WF2Nh7mHREY-os5ZThA3I0cknpqG0",
  authDomain: "east-mesa-karate-events.firebaseapp.com",
  databaseURL: "https://east-mesa-karate-events.firebaseio.com",
  projectId: "east-mesa-karate-events",
  storageBucket: "east-mesa-karate-events.appspot.com",
  messagingSenderId: "1002918899966"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;