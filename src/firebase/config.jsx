import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDKAioI1MJTjDj49Xe7MaqtysYADme91CY",
  authDomain: "ebeverages-30dba.firebaseapp.com",
  projectId: "ebeverages-30dba",
  storageBucket: "ebeverages-30dba.appspot.com",
  messagingSenderId: "878307496640",
  appId: "1:878307496640:web:5b2415e313499221b0d325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;