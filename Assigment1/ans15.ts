//Question 15: Changing Guest 
//List: One of your guests can't make it to the dinner, 
//so you need to send out a new set of invitations with a replacement guest.
let friendlist: string [] = ["Ifraheem", "Mansoor", "Mohsin", "Sultan", "Usman", "Zakariyah"];
friendlist .forEach(friendlist =>{
    console.log(`Assalaam O Alikum ${friendlist}, Kindly join me tonight for dinner`);
});
let unableToAttend = "Mohsin";
console.log(`${unableToAttend} can't make it to dinner.`);
let newGuest = "Kamal";
friendlist[friendlist.indexOf(unableToAttend)] = newGuest;
friendlist.forEach(friendlist => {
    console.log(`Assalaam O alikum ${friendlist}, would you like to join me for dinner?`);
});