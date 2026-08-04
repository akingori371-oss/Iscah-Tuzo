
const loginButton = document.getElementById('login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const loginForm = document.querySelector('form');

function signInUser() {
    const email = emailInput?.value.trim() 
    const password = passwordInput?.value 
    const username = usernameInput?.value.trim() 

    if (!email || !password || !username) {
        alert('Please fill in all fields.');
        return;
    }

    if (!email.endsWith('@gmail.com') || password.length < 8) {
        alert('Invalid email or password. Please try again.');
        return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('username', username);
    window.location.href = 'user.html';
}

if (loginButton) {
    loginButton.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        signInUser();
    });
}