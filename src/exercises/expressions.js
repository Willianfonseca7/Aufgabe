const isAdult = true;
const hasTicket = false;

const canEnterClub = isAdult && hasTicket; // AND
const canEnterWithGuest = isAdult || hasTicket; // OR
const notAdult = !isAdult; // NOT

console.log("\n=== Logical ===");
console.log("Adult AND ticket:", canEnterClub);
console.log("Adult OR ticket:", canEnterWithGuest);
console.log("NOT adult:", notAdult);

