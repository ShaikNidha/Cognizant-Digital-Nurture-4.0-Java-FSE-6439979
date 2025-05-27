// Closure for tracking total registrations per category
function createEventTracker() {
    const categoryRegistrations = {}; // Object to hold registrations per category

    return function registerUserForCategory(category) {
        if (!categoryRegistrations[category]) {
            categoryRegistrations[category] = 0; // Initialize the counter
        }
        categoryRegistrations[category]++;
        console.log(`Total registrations for ${category}: ${categoryRegistrations[category]}`);
    };
}

// Event Data Store
let events = [];

// 1. addEvent function to add an event
function addEvent(name, category) {
    events.push({ name, category });
    console.log(`Event added: ${name}, Category: ${category}`);
}

// 2. registerUser function to register users for an event
function registerUser(eventName, tracker) {
    // Find event by name
    const event = events.find(event => event.name === eventName);
    if (event) {
        tracker(event.category); // Call the closure tracker function for the event category
    } else {
        console.log(`Event not found: ${eventName}`);
    }
}

// 3. filterEventsByCategory function to filter events based on category
function filterEventsByCategory(category, callback) {
    const filteredEvents = events.filter(event => event.category === category);
    if (callback) callback(filteredEvents); // Allow a dynamic callback
    return filteredEvents;
}

// Example Usage
// Create the event tracker using the closure
const eventTracker = createEventTracker();

// Add some events
addEvent('Music Concert', 'Music');
addEvent('Tech Talk', 'Technology');
addEvent('Coding Workshop', 'Technology');
addEvent('Art Exhibition', 'Art');

// Register users for events
registerUser('Tech Talk', eventTracker); // Registration for Technology
registerUser('Music Concert', eventTracker); // Registration for Music

// Filter events by category and apply a callback
filterEventsByCategory('Technology', (events) => {
    console.log('Filtered Events in Technology:', events);
});
