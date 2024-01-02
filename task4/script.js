const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful!');
       
    } else {
        alert('Invalid username or password');
    }
}

function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    
    if (users.some(u => u.username === newUsername)) {
        alert('Username already taken. Please choose another.');
    } else {
        
        users.push({ username: newUsername, password: newPassword });
        alert('Registration successful! You can now login.');
       
    }
}

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}