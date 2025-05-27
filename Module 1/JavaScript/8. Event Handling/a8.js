// Sample event data
let communityEvents = [
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
function renderEvents(events) {
    // Clear the container before re-rendering
    eventsContainer.innerHTML = '';

    if (events.length === 0) {
        eventsContainer.innerHTML = '<p>No events found.</p>';
    } else {
        events.forEach(event => {
            const card = document.createElement('div');
            card.classList.add('event-card');
            card.innerHTML = `
                <h3>${event.name}</h3>
                <p>Category: ${event.category}</p>
                <p>Registrations: ${event.registrations}</p>
                <button class="event-button" onclick="registerEvent('${event.name}')">Register</button>
            `;
            eventsContainer.appendChild(card);
        });
    }
}

// Function to register for an event
function registerEvent(eventName) {
    const event = communityEvents.find(event => event.name === eventName);
    if (event) {
        event.registrations++;
        renderEvents(communityEvents); // Re-render after registration
        alert(`You have registered for ${event.name}!`);
    }
}

// Function to filter events by category
function filterEvents() {
    const selectedCategory = categoryFilter.value;
    const filteredEvents = selectedCategory === 'all'
        ? communityEvents
        : communityEvents.filter(event => event.category === selectedCategory);
    renderEvents(filteredEvents);
}

// Function to search events by name
function searchEvents(event) {
    const searchText = event.target.value.toLowerCase();
    const filteredEvents = communityEvents.filter(event =>
        event.name.toLowerCase().includes(searchText)
    );
    renderEvents(filteredEvents);
}

// Event listener for category filter
categoryFilter.addEventListener('change', filterEvents);

// Event listener for search input (keydown)
searchInput.addEventListener('keydown', searchEvents);

// Initial render of events
renderEvents(communityEvents);
