// Store event name and date using const
const eventName = "Community Clean-Up Day";
const eventDate = "2025-06-15";

// Store available seats using let (as it changes)
let availableSeats = 50;

// Concatenate and display event info using a template literal
const eventInfo = `📅 Event: ${eventName}\n🗓️ Date: ${eventDate}\n🎟️ Available Seats: ${availableSeats}`;
console.log(eventInfo);

// Simulate a registration
function registerUser() {
    if (availableSeats > 0) {
        availableSeats--; // decrease seat count
        console.log(`✅ Registration successful! Seats left: ${availableSeats}`);
    } else {
        console.log("❌ Sorry, the event is fully booked.");
    }
}

// Simulate some test registrations
registerUser(); // Now seats = 49
registerUser(); // Now seats = 48
