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
  apiKey: "AIzaSyDk_hcrntIcqdRSdld9HISx2u3_6XkkJVE",
  authDomain: "shopwatch-b127b.firebaseapp.com",
  projectId: "shopwatch-b127b",
  storageBucket: "shopwatch-b127b.appspot.com",
  messagingSenderId: "51121731145",
  appId: "1:51121731145:web:20c75e05cf684683493198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   
    <App />

  </React.StrictMode>,
)
