function login(event) {
	event.preventDefault();
	let username = document.getElementById("login-username").value;
	let password = document.getElementById("login-password").value;
	let users = JSON.parse(localStorage.getItem("users"));
	if(users == null){
		alert("No users found, please sign up!");
		return;
	}
	var inputVal = document.getElementById("login-username").value;
	for(let i=0; i<users.length; i++){
		if(users[i].username == username){
			if(users[i].password == password){
				localStorage.setItem("loggedInUser", username);
				localStorage.setItem("inputValue", inputVal)
				window.location.replace("dashboard.html");
				return;
			} else {
				alert("Incorrect password!");
				return;
			}
		}
	}
	displayMessage("error", "Username not found!");
}

function signup(event) {
	event.preventDefault();
	let username = document.getElementById("signup-username").value;
	let email = document.getElementById("signup-email").value;
	let password = document.getElementById("signup-password").value;
	let users = JSON.parse(localStorage.getItem("users"));
	if(users == null){
		users = [];
	}
	for(let i=0; i<users.length; i++){
		if(users[i].username == username){
			alert("Username already exists!");
			return;
		}
	}
	let user = {username: username, email: email, password: password};
	users.push(user);
	localStorage.setItem("users", JSON.stringify(users));
	alert("User registered successfully!");
	window.location.replace("login.html");
	return;
}

function displayMessage(type, message){
	let messageDiv = document.getElementById("message");
	messageDiv.innerHTML = message;
	messageDiv.style.color = (type == "success") ? "green" : "red";
}



