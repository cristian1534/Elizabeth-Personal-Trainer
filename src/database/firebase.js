import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvv6bzUHI5xkY_Y2wiUZW99srprZd2sOo",
  authDomain: "marianaweb-27b07.firebaseapp.com",
  projectId: "marianaweb-27b07",
  storageBucket: "marianaweb-27b07.appspot.com",
  messagingSenderId: "862868636654",
  appId: "1:862868636654:web:8db3ba1e866b28452784ff",
});

const db = firebase.firestore();

export { db, firebaseApp };
