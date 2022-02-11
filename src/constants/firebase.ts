// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import { Alert } from 'react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyAzSK-8z2Mz5_ypsEF5B8ORWHAMQEXd9iI',
  authDomain: 'trackit-4f7b6.firebaseapp.com',
  projectId: 'trackit-4f7b6',
  storageBucket: 'trackit-4f7b6.appspot.com',
  messagingSenderId: '37622194677',
  appId: '1:37622194677:web:84be8bc5496992c030c0bc',
  measurementId: 'G-WKRESL9LXK',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.log(err);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  logout,
};
