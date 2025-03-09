 document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Get error message elements
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
    var passwordLengthError = document.getElementById('passwordLengthError');

    var usernamecontentError = document.getElementById('usernameLengthError');
    
    
    // Reset error messages
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    passwordLengthError.style.display = 'none';
    usernameLengthError.style.display = 'none';

    // Validate the form
    var isValid = true;


    if (username === "") {
        usernameError.style.display = 'block';
        isValid = false;
    }else if (username.length <5) {
        usernameLengthError.style.display = 'block';
        isValid = false;
    }


    // Check password
    if (password === "") {
        passwordError.style.display = 'block';
        isValid = false;
    } else if (password.length < 6) {
        passwordLengthError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert("Hello"+" "+ username +" "+"Login successful!");
        
    }
});