// Sample event list (could come from a server or JSON)
const events = [
    { name: "Clean-Up Day", date: "2025-06-15", seats: 10 },
    { name: "Music Concert", date: "2024-05-01", seats: 0 }, // past & full
    { name: "Holiday Market", date: "2025-07-01", seats: 0 }, // future but full
    { name: "Yoga in the Park", date: "2025-06-20", seats: 5 }
];

// Get today’s date
const today = new Date();

// Display valid upcoming events
console.log("🎉 Upcoming Events with Seats:");
events.forEach(event => {
    const eventDate = new Date(event.date);

    if (eventDate > today && event.seats > 0) {
        console.log(`✅ ${event.name} — ${event.date} (${event.seats} seats left)`);
    } else {
        console.log(`❌ ${event.name} is not available (past or full).`);
    }
});

// Register for an event safely
function registerForEvent(eventName) {
    try {
        const event = events.find(e => e.name === eventName);

        if (!event) throw new Error("Event not found.");

        const eventDate = new Date(event.date);
        if (eventDate <= today) throw new Error("This event has already passed.");
        if (event.seats <= 0) throw new Error("No seats available.");

        event.seats--; // reduce seat count
        console.log(`🎟️ Registered for ${event.name}. Remaining seats: ${event.seats}`);

    } catch (error) {
        console.error(`❌ Registration failed: ${error.message}`);
    }
}

// Example usage:
registerForEvent("Yoga in the Park");
registerForEvent("Holiday Market");  // full
registerForEvent("Unknown Event");   // not found
