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

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs
    if (validateForm()) {
        // If valid, display confirmation message
        confirmationMessage.textContent = `Successfully registered for ${eventSelect.value}!`;
        confirmationMessage.style.color = 'green';

        // Optionally, clear the form
        form.reset();
    } else {
        // If invalid, display error message
        confirmationMessage.textContent = '';
    }
});
