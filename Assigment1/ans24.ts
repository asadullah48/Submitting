//More Conditional Tests: Expand your conditional tests...
//to cover a wider range of comparisons.
// Equality with strings
console.log("Testing equality with strings:");
console.log("orange" == "orange"); // True
console.log("'orange' == 'Orange'"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Orange".toLowerCase() == "orange"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(571 > 3); // True
console.log(991 < 7); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true,false); // True

// Test whether an item is in a array
let basket = ["orange","apple", "banana", "graps"];
console.log("Is 'orange' in basket?");
console.log(basket.includes ("orange")); // True
console.log("Is 'mango' not in basket?");
console.log(!basket.includes("mango")); // True


// Test whether an item is not in a array


