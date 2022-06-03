  // Your web app's Firebase configuration
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

function SubscribeUser() {
	//console.log('Worting');
	Notification.requestPermission().then(permission=>{
		console.log(permission)
		if (permission == "granted"){
		  messaging.getToken({vapidKey:"BH998hoaRinWc5iG9o9uhHeHESsDrI4GU3_5DU-klMLr5AuhjJys8Cm5RMlmIW3DoKKz7xYKNFjEVhWQ3zhwoys"}).then(currentToken=>{
			console.log(currentToken)
			document.getElementById('tokenId').innerHTML = currentToken
		  })
		}
	  })
}

messaging.onMessage(res=>{
	console.log(res)
})

function SendNotification() {
	const token = document.getElementById('token').value
	const title = document.getElementById('title').value
	const msg = document.getElementById('msg').value

	let body = {
		to: token,
		notification: {
			title: title,
			body: msg,
			icon: "img.png",
			click_action: "https://github.com/nodesource/distributions"
		}
	}

	let options = {
		method: "POST",
		headers: new Headers({
			Authorization: "key=AAAAhxq-TrY:APA91bGnNYFA9SEtmXmTiB8rL0xN36QJpZCyO3XYgwVBGXXZqfiyEur8XvvZqUwmLMhK_vlrwHJM3gIOEqUbKprujLBJeCGYDLbGsUp7pKeMliizEJMyZOCM_odcoumXspuTUojBFzzk",
			"Content-Type" : "application/json"
		}),
		body:JSON.stringify(body)
	}

	fetch("https://fcm.googleapis.com/fcm/send", options).then(res=>{
		console.log(res)
		console.log("SENT")
	}).catch(e=>console.log(e))

	console.log(body)
}