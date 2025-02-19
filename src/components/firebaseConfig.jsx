import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0Sf88vsTZx6kcJLPOV4hTevu5mPn-pcE",
    authDomain: "raviolandia-bb645.firebaseapp.com",
    projectId: "raviolandia-bb645",
    storageBucket: "raviolandia-bb645.firebasestorage.app",
    messagingSenderId: "717057749513",
    appId: "1:717057749513:web:43f21f1751316e8984bed8",
    measurementId: "G-VVBY18FSLM"
  };
  
  const App = initializeApp(firebaseConfig);
  const analytics = getAnalytics(App);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();