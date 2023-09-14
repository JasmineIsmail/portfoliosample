// Function to validate the form
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var subjectError = document.getElementById('subjectError');
    var messageError = document.getElementById('messageError');

    var isValid = true;

    // Check if name is empty
    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Check if email is empty and in a valid format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Check if subject is empty
    if (subject.trim() === '') {
        subjectError.textContent = 'Subject is required';
        isValid = false;
    } else {
        subjectError.textContent = '';
    }

    // Check if message is empty
    if (message.trim() === '') {
        messageError.textContent = 'Message is required';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    return isValid;
}

// Attach the validateForm function to the form's submit event
document.getElementById('contactForm').addEventListener('submit', function (e) {
    if (!validateForm()) {
        e.preventDefault(); // Prevent form submission if there are errors
    }
});