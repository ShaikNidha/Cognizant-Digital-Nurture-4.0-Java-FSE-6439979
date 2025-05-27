// Mock API URL for fetching events (You can replace it with a real URL)
const apiUrl = 'https://api.example.com/events';

// Access the container and loading spinner
const eventsContainer = document.querySelector('#events-container');
const loadingSpinner = document.querySelector('#loading');

// Function to fetch events using .then() and .catch()
function fetchEvents() {
    // Show the loading spinner
    loadingSpinner.style.display = 'block';

    // Fetch the events data from the mock API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(events => {
            // Hide the loading spinner
            loadingSpinner.style.display = 'none';

            // Display the events
            displayEvents(events);
        })
        .catch(error => {
            // Hide the loading spinner
            loadingSpinner.style.display = 'none';

            // Display an error message
            eventsContainer.innerHTML = `Error fetching events: ${error.message}`;
        });
}

// Function to display events on the page
function displayEvents(events) {
    events.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
        `;
        eventsContainer.appendChild(card);
    });
}

// Call fetchEvents to load data
fetchEvents();
