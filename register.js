import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

const submit = document.getElementById("submit1");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Get email and password values after clicking the submit button
    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;

    // Check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
        alert("Email and password cannot be empty");
        return;
    }

    // Check if the email is in the correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
    }

    // Check if the password is at least 6 characters long
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Creating Account.....");
            window.location.href = "login.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
});
