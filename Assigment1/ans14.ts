//Question 14: 
//Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
let guestsList: string [] = ["Ifraheem", "Mansoor", "Mohsin", "Sultan", "Usman", "Zakariyah"];
guestsList .forEach(guestsList =>{
    console.log(`Assalaam O Alikum ${guestsList}, Kindly join me tonight for dinner`);
});
let unableToAttend = "Mohsin";
console.log(`${unableToAttend} can't make it to dinner.`);
let newGuest = "Kamal";
guestsList[guestsList.indexOf(unableToAttend)] = newGuest;
guestsList.forEach(guest => {
    console.log(`Assalaam O alikum ${guestsList}, Kindly join me for dinner?`);
});
