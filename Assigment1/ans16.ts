//Question 16: 
//More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests: string[] = ["Usman", "Mansoor", "Mohsin", "Sultan", "Ifraheem", "Zakariyah", "Asadullah"];
console.log("Alhamdurillah, Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Kamal");
guests.splice(guests.length / 2, 0, "Tariq");
guests.push("Muzamil");

guests.forEach(guest => {
    console.log(`Assalaam O Alikum ${guest}, kindly attend dinner with me, & enjoy together`);
});


