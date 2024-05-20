"use strict";
function Papular(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
console.log('magicians');
"Papular(magicians)"; // Modifies the original array
`show_magicians('magicians')`; // Shows modified names
