import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA9cFmuz_pxmDYKngNwWq1tEnBOA1ztCNw',
  authDomain: 'dojo-blog-556e0.firebaseapp.com',
  projectId: 'dojo-blog-556e0',
  storageBucket: 'dojo-blog-556e0.appspot.com',
  messagingSenderId: '819820677164',
  appId: '1:819820677164:web:5d5d9ad01869bd53472989',
};

// firebase init
firebase.initializeApp(firebaseConfig);

// initialize firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
