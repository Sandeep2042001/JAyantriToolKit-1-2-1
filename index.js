function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('pass').value;

    // Check if the entered credentials are valid
    if (username === 'Pappu' && password === '808658') {
        // Redirect to new.html on successful login
        window.location.href = 'GenerateJyntri.html';
    } else {
        // Display an error message
        alert('Invalid username or password. Please try again.');
    }
}