"use strict";
//Question 22: Intentional Error: Try to produce an array index error in one of your programs. 
//Correct the error before finishing.
let guests = ["222", "123r", "435", "13",]; // Intentional error
let list = ["Usman", "Mansoor", "Mohsin", "Sultan", "Ifraheem", "Zakariyah", "Asadullah"]; // correction done
for (let name of list) {
    console.log(`Assalaam O Alikum ${name}, kindly attend iftar with me`);
}
;
