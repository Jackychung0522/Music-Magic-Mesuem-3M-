import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import * as Tone from "tone";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAxnqruF8urRixdyQTvwqVBKevsOEWBq8M",
  authDomain: "pui-final-a405a.firebaseapp.com",
  projectId: "pui-final-a405a",
  storageBucket: "pui-final-a405a.appspot.com",
  messagingSenderId: "829177662332",
  appId: "1:829177662332:web:6be012c15e71e7ebdf72f9",
  measurementId: "G-8BTML5DSC8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
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
