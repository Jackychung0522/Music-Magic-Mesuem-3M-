import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import * as Tone from "tone";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQS89JYSQnUnncgGtEMEtv6ngg-wRz5lc",
  authDomain: "pui-final-85e2c.firebaseapp.com",
  projectId: "pui-final-85e2c",
  storageBucket: "pui-final-85e2c.appspot.com",
  messagingSenderId: "469650057592",
  appId: "1:469650057592:web:7081671deae1ac1a96008d",
  measurementId: "G-81V9GRLMGV",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const root = ReactDOM.createRoot(document.getElementById("root"));
window.Tone = Tone;
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default db;
