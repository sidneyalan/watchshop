//import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/css/style.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIY7XT6TPdIT5LEiWuFQmAZOCsfL6R9qM",
  authDomain: "shopwatch-a9d44.firebaseapp.com",
  projectId: "shopwatch-a9d44",
  storageBucket: "shopwatch-a9d44.appspot.com",
  messagingSenderId: "802038247496",
  appId: "1:802038247496:web:fc9331f11f75c65b4a287d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   
    <App />

  </React.StrictMode>,
)
