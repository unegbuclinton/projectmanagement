import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

// const baseURL = process.env.REACT_APP_BASE_URL;

const firebaseConfig = {
  apiKey: 'AIzaSyDjch1h3Ly1lwECEhU5NiDJIp1RqM3wxx4',
  authDomain: 'project-management-9e2e5.firebaseapp.com',
  projectId: 'project-management-9e2e5',
  storageBucket: 'project-management-9e2e5.appspot.com',
  messagingSenderId: '603414599804',
  appId: '1:603414599804:web:86b51b9ea52df2999ed1f9',
  measurementId: 'G-Y22NDWKZDJ',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
