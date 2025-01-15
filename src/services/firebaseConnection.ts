import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZhSEWarpJz0SSP5Q4_irZyoVKSeKdEFE",
  authDomain: "reactlinks-d48e2.firebaseapp.com",
  projectId: "reactlinks-d48e2",
  storageBucket: "reactlinks-d48e2.firebasestorage.app",
  messagingSenderId: "259516021965",
  appId: "1:259516021965:web:af5ceb30c54a9eceb37d84"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};