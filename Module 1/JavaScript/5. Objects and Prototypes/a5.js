// Event Constructor function
function Event(name, category, maxRegistrations, currentRegistrations = 0) {
    this.name = name;
    this.category = category;
    this.maxRegistrations = maxRegistrations;
    this.currentRegistrations = currentRegistrations;
}

// Add checkAvailability() method to the Event prototype
Event.prototype.checkAvailability = function () {
    if (this.currentRegistrations < this.maxRegistrations) {
        console.log(`${this.name} is available for registration.`);
        return true;
    } else {
        console.log(`${this.name} is fully booked.`);
        return false;
    }
};

// List the keys and values of the event object
function listEventDetails(event) {
    const details = Object.entries(event); // Get key-value pairs
    console.log("Event Details:");
    details.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
}

// Example usage
const musicConcert = new Event("Music Concert", "Music", 100, 50);
const techTalk = new Event("Tech Talk", "Technology", 50, 50);

// Check availability for both events
musicConcert.checkAvailability(); // Available
techTalk.checkAvailability(); // Fully booked

// List details of the musicConcert event
listEventDetails(musicConcert);

// List details of the techTalk event
listEventDetails(techTalk);
