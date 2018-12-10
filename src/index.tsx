import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

import firebaseConfig from './config/firebase';
import rootReducer from './store/reducers/rootReducer';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store : any = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebaseConfig),
  reactReduxFirebase(firebaseConfig, {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true
  })
));

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();