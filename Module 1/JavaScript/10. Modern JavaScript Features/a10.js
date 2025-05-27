// Sample event data
const communityEvents = [
    { name: "Rock Concert", category: "Music", registrations: 0 },
    { name: "Cooking Workshop", category: "Workshop", registrations: 0 },
    { name: "Music Festival", category: "Music", registrations: 0 },
    { name: "Art Exhibition", category: "Art", registrations: 0 }
];

// Access the container and loading spinner
const eventsContainer = document.querySelector('#events-container');
const loadingSpinner = document.querySelector('#loading');

// Access filter and search controls
const categoryFilter = document.querySelector('#category-filter');
const searchInput = document.querySelector('#search');

// Function to render events
const renderEvents = (events = communityEvents) => {
    eventsContainer.innerHTML = events.length
        ? events.map(({ name, category, registrations }) => `
            <div class="event-card">
                <h3>${name}</h3>
                <p>Category: ${category}</p>
                <p>Registrations: ${registrations}</p>
                <button class="event-button" onclick="registerEvent('${name}')">Register</button>
            </div>
        `).join('')
        : '<p>No events found.</p>';
};

// Function to register for an event
const registerEvent = (eventName) => {
    const event = communityEvents.find(({ name }) => name === eventName);
    if (event) {
        event.registrations++;
        renderEvents(); // Re-render after registration
        alert(`You have registered for ${eventName}!`);
    }
};

// Function to filter events by category
const filterEvents = () => {
    const selectedCategory = categoryFilter.value;
    const filteredEvents = selectedCategory === 'all'
        ? [...communityEvents] // Clone the event list
        : communityEvents.filter(({ category }) => category === selectedCategory);
    renderEvents(filteredEvents);
};

// Function to search events by name
const searchEvents = ({ target: { value } }) => {
    const filteredEvents = communityEvents.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
    );
    renderEvents(filteredEvents);
};

// Event listener for category filter
categoryFilter.addEventListener('change', filterEvents);

// Event listener for search input (keydown)
searchInput.addEventListener('keydown', searchEvents);

// Initial render of events
renderEvents();
