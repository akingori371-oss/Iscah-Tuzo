
const loginButton = document.getElementById('login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const username = document.getElementById('username');

loginButton.addEventListener('click', () => {
  window.location.href = 'login.html';
});

function signInUser(){
    
    windows.location.href = 'user.html';
}

const email = emailInput.value;
const password = passwordInput.value;
const username = username.value;

if(email.endsWith(".gmail.com") && password.length >= 8){
    signInUser();
}else{
    alert("Invalid email or password. Please try again.");
}

localStorage.setItem('email', email);
localStorage.setItem('password', password);
localStorage.setItem('username', username);

if(email === "" || password === "" || username === ""){
    alert("Please fill in all fields.");
}