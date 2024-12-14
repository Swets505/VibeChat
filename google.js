import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf6vzWzw4NEVLqgAUR0dwwL3kyaHxJJ7o",
  authDomain: "vibechat-7a84a.firebaseapp.com",
  projectId: "vibechat-7a84a",
  storageBucket: "vibechat-7a84a.firebasestorage.app",
  messagingSenderId: "1:727253357675:web:07b5bba47b500d8cb7cd2e",
  appId: "1:307123670646:web:450221785169f87ca79957"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
auth.languageCode = 'en';



const google = document.getElementById("google")
google.addEventListener("click", function () {

 signInWithPopup(auth, provider)
  .then((result) => {
   // This gives you a Google Access Token. You can use it to access the Google API.
   const credential = GoogleAuthProvider.credentialFromResult(result);
   const token = credential.accessToken;
   // The signed-in user info.
   const user = result.user;
   window.location.href = "index.html";
  }).catch((error) => {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.customData.email;
   // The AuthCredential type that was used.
   const credential = GoogleAuthProvider.credentialFromError(error);
   // ...
   alert(errorMessage);
  });

})


