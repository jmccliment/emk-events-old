import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

import firebaseConfig from '../config/firebase';
import rootReducer from './reducers/rootReducer';

const store : any = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebaseConfig),
  reactReduxFirebase(firebaseConfig, {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true
  })
));

export default store;