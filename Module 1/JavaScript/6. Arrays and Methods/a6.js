// Array to store community events
let communityEvents = [];

// Function to add a new event using .push()
function addEvent(name, category) {
    const newEvent = { name, category };
    communityEvents.push(newEvent);
    console.log(`Event added: ${name}`);
}

// Function to filter events by category (e.g., music events)
function showMusicEvents() {
    const musicEvents = communityEvents.filter(event => event.category === 'Music');
    console.log('Music Events:');
    musicEvents.forEach(event => console.log(event.name));
}

// Function to format display cards for each event using .map()
function displayEventCards() {
    const formattedCards = communityEvents.map(event => {
        return `Event: ${event.name} - Category: ${event.category}`;
    });
    console.log('Event Cards:');
    formattedCards.forEach(card => console.log(card));
}

// Example Usage
addEvent("Rock Concert", "Music");
addEvent("Cooking Workshop", "Workshop");
addEvent("Music Festival", "Music");
addEvent("Art Exhibition", "Art");

// Show only music events using .filter()
showMusicEvents();

// Display formatted cards using .map()
displayEventCards();
