// Array to store community events
let communityEvents = [
    { name: "Rock Concert", category: "Music", registrations: 0 },
    { name: "Cooking Workshop", category: "Workshop", registrations: 0 },
    { name: "Music Festival", category: "Music", registrations: 0 },
    { name: "Art Exhibition", category: "Art", registrations: 0 }
];

// Access the container element to display event cards
const eventsContainer = document.querySelector('#events-container');

// Function to render events as cards
function renderEvents() {
    // Clear the container before re-rendering
    eventsContainer.innerHTML = '';

    // Loop through events array and create event cards
    communityEvents.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('event-card');

        // Event name and category
        const eventName = document.createElement('h3');
        eventName.textContent = event.name;
        const eventCategory = document.createElement('p');
        eventCategory.textContent = `Category: ${event.category}`;

        // Registration button
        const registerButton = document.createElement('button');
        registerButton.textContent = 'Register';
        registerButton.classList.add('event-button');
        registerButton.addEventListener('click', () => registerEvent(event));

        // Cancel button
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('event-button', 'cancel-button');
        cancelButton.addEventListener('click', () => cancelRegistration(event));

        // Append elements to card
        card.appendChild(eventName);
        card.appendChild(eventCategory);
        card.appendChild(registerButton);
        card.appendChild(cancelButton);

        // Append card to container
        eventsContainer.appendChild(card);
    });
}

// Function to handle event registration
function registerEvent(event) {
    event.registrations++;
    alert(`You have registered for the ${event.name}!`);
    renderEvents(); // Re-render events to update the UI
}

// Function to handle event cancellation
function cancelRegistration(event) {
    if (event.registrations > 0) {
        event.registrations--;
        alert(`You have canceled your registration for the ${event.name}.`);
    } else {
        alert(`You have not registered for the ${event.name}.`);
    }
    renderEvents(); // Re-render events to update the UI
}

// Initial render of events
renderEvents();
