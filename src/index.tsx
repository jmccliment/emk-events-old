import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store from './store';
import { props } from './store';

const app = (<App />);
const RRFP = (<ReactReduxFirebaseProvider {...props}>{app}</ReactReduxFirebaseProvider>);
const provider = (<Provider store={store}>{RRFP}</Provider>);
const start = () => ReactDOM.render(provider, document.getElementById('root'));

start();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
