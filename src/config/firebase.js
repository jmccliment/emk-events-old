import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';


firebase.initializeApp(FirebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

const databaseRef = firebase.database().ref();
export const eventsRef = databaseRef.child('events');
export const studentsRef = databaseRef.child('students');
export const classesRef = databaseRef.child('classes');
export const eventTypesRef = databaseRef.child('eventTypes');