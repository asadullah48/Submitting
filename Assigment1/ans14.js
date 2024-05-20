"use strict";
//Question 14: 
//Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
let guestList = ["Ifraheem", "Mansoor", "Mohsin", "Sultan", "Usman", "Zakariyah"];
guestList.forEach(guestList => {
    console.log(`Assalaam O Alikum ${guestList}, Kindly join me tonight for dinner`);
});
let unableToAttend = "Mohsin";
console.log(`${unableToAttend} can't make it to dinner.`);
let newGuest = "Kamal";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
guestList.forEach(guest => {
    console.log(`Assalaam O alikum ${guestList}, Kindly join me for dinner?`);
});
