sendRegistrationData(userData)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        console.log('Server Response: ', data);
        // Continue with success logic
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        confirmationMessage.textContent = 'An error occurred. Please try again later.';
        confirmationMessage.style.color = 'red';
    });
