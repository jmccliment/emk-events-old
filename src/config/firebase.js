import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FirebaseConfig } from './keys';

firebase.initializeApp(FirebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;



// import * as firebase from 'firebase';
// import { FirebaseConfig } from './keys';
// // import { uiConfig } from './firebaseUi';
// // import firebaseui from 'firebaseui';

// firebase.initializeApp(FirebaseConfig);
// export const provider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();


// const databaseRef = firebase.database().ref();
// export const eventsRef = databaseRef.child('events');
// export const studentsRef = databaseRef.child('students');
// export const classesRef = databaseRef.child('classes');
// export const eventTypesRef = databaseRef.child('eventTypes');

