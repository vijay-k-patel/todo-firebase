import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// const app = firebase.initializeApp({
//   apiKey: String(process.env.REACT_APP_FIREBASE_API_KEY),
//   authDomain: String(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
//   projectId: String(process.env.REACT_APP_FIREBASE_PROJECT_ID),
//   storageBucket: String(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
//   messagingSenderId: String(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
//   appId: String(process.env.REACT_APP_FIREBASE_APP_ID),
//   measurementId: String(process.env.MEASUREMENT_ID),
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyDwBqcJOoc2YusIGcjdGpU32eUi0lYa-jQ",
  authDomain: "frontend-assignment-57063.firebaseapp.com",
  projectId: "frontend-assignment-57063",
  storageBucket: "frontend-assignment-57063.appspot.com",
  messagingSenderId: "1077362191354",
  appId: "1:1077362191354:web:3920a4c3b2e8d3e5c4d243",
  measurementId: "G-FE2Z2C77KW"
});

export const auth = app.auth();
export default app;
