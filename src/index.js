import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global-styles';

import { FirebaseContext } from './context/context_firebase';

const config = {
  apiKey: 'AIzaSyCgJ3_2ydm4CLdfqDJYxtv8JWDanoJtpCM',
  authDomain: 'stanetflix.firebaseapp.com',
  databaseURL:
    'https://stanetflix-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'stanetflix',
  storageBucket: 'stanetflix.appspot.com',
  messagingSenderId: '182516127561',
  appId: '1:182516127561:web:6238661ab1b0b4f4676c98',
};

const firebase = window.firebase.initializeApp(config);
// must be done only once after need to be remove
/**
 Change the rule in the firestore
 // orignal one 
 rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
// new rule
    match /{document=**} {
      allow read, write: if false;
    }
 */

// import { seedDatabase } from './seed';

// must be done only once after need to be remove
// seedDatabase(firebase);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
