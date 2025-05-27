// Get the form and elements
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const eventSelect = document.getElementById('event');
const confirmationMessage = document.getElementById('confirmation-message');

// Function to validate inputs
const validateForm = () => {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validate name
    if (!nameInput.value.trim()) {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    if (!emailInput.value.trim()) {
        document.getElementById('email-error').textContent = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    // Validate selected event
    if (!eventSelect.value) {
        document.getElementById('event-error').textContent = 'Please select an event.';
        isValid = false;
    }

    return isValid;
};

// Function to simulate sending data to the server
const sendRegistrationData = (userData) => {
    return new Promise((resolve, reject) => {
        // Simulate a delay (e.g., 2 seconds)
        setTimeout(() => {
            // Mock success/failure response from the "server"
            const isSuccess = Math.random() > 0.2; // 80% chance of success

            if (isSuccess) {
                resolve({ success: true, message: 'Registration successful!' });
            } else {
                reject({ success: false, message: 'Registration failed. Please try again later.' });
            }
        }, 2000); // Simulate 2 seconds delay
    });
};

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs
    if (validateForm()) {
        // Capture user data from the form
        const userData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            event: eventSelect.value
        };

        // Show loading message while waiting for the response
        confirmationMessage.textContent = 'Processing your registration...';

        // Send data to the server (simulate backend communication)
        sendRegistrationData(userData)
            .then(({ message }) => {
                // Show success message
                confirmationMessage.textContent = message;
                confirmationMessage.style.color = 'green';

                // Optionally, clear the form
                form.reset();
            })
            .catch(({ message }) => {
                // Show error message
                confirmationMessage.textContent = message;
                confirmationMessage.style.color = 'red';
            });
    } else {
        // Clear any previous success messages
        confirmationMessage.textContent = '';
    }
});
