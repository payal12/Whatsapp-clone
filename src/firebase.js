import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1k0DNKy9PTNAmf_KYR4mCV_O-UKfRtOQ",
    authDomain: "whatsapp-clone-dfc4d.firebaseapp.com",
    projectId: "whatsapp-clone-dfc4d",
    storageBucket: "whatsapp-clone-dfc4d.appspot.com",
    messagingSenderId: "544826665295",
    appId: "1:544826665295:web:8496f12f409ffdee5f3d3a",
    measurementId: "G-46SE6KD8WJ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider};
  export default db;