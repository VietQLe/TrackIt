// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

export { auth };
