
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCf6vzWzw4NEVLqgAUR0dwwL3kyaHxJJ7o",
    authDomain: "vibechat-7a84a.firebaseapp.com",
    projectId: "vibechat-7a84a",
    storageBucket: "vibechat-7a84a.firebasestorage.app",
    messagingSenderId: "727253357675",
    appId: "1:727253357675:web:07b5bba47b500d8cb7cd2e",
    measurementId: "G-NEMMEB9WH6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
