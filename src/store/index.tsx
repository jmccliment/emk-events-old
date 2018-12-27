import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

import firebaseConfig from '../config/firebase';
import rootReducer from '../reducers';

const store: any = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebaseConfig),
  reactReduxFirebase(firebaseConfig, {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true
  })
));

export default store;