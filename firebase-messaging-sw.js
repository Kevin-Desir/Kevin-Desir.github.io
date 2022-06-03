importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js")

const firebaseConfig = {
	apiKey: "AIzaSyAT0FNDvNmqGadzGMem_jx-JwBOOP944VI",
	authDomain: "test-notification-net.firebaseapp.com",
	projectId: "test-notification-net",
	storageBucket: "test-notification-net.appspot.com",
	messagingSenderId: "580269264566",
	appId: "1:580269264566:web:db6c4898586bdf54f66017"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();