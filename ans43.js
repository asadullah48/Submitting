"use strict";
let magiciansA = ["Alice", "David", "Chris"];
function make_great(magicians) {
    let papularMagicians = [];
    magicians.forEach(magician => {
        papularMagicians.push(`${magician} the Great`);
    });
    return papularMagicians;
}
let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
