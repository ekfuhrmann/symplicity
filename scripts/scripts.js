function showPassword() {
   var passwordInput = document.getElementById('password');
   passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
}

// Alerts Controls
function showAlert(message) {
    message = message || 'This is a test message.';
    document.getElementById('alert').innerHTML = message;
    document.getElementById('alert').className = 'main__alert--validation';
};

function clearAlert() {
    document.getElementById('alert').className = 'main__alert';
};

function checkForm(event) {
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    if (username.value == '' && password.value == '') {
        event.preventDefault();
        showAlert('The username and password fields can not be blank.');
        username.className = 'main__form_input--validation';
        password.className = 'main__form_input--validation';
    } else if (username.value == '') {
        event.preventDefault();
        showAlert('The username field can not be blank.');
        username.className = 'main__form_input--validation';
        password.className = 'main__form_input';
    } else if (password.value == '') {
        event.preventDefault();
        showAlert('The password field can not be blank.');
        password.className = 'main__form_input--validation';
        username.className = 'main__form_input';
    } else if (password.value.match(/^[0-9a-zA-Z]+$/) || password.value.length < 6) {
        event.preventDefault();
        showAlert('The password field must be at least 6 characters long and contain at least one capital letter and at least one non-alphanumeric character.');
        password.className = 'main__form_input--validation';
        username.className = 'main__form_input';
    } else {
        event.preventDefault();
        password.className = 'main__form_input';
        username.className = 'main__form_input';
        document.getElementById('alert').className = 'main__alert';
    }
};
