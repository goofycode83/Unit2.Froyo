
/*
1. Make a prompt that askes the user for a list or there order
2. Parse the list of flavors
3.
*/



const userInputs = prompt(`Please enter your desired froyo flavors:`);
const inputStored = userInputs.split(",");

//for...in gives back properties of the array and object
for (let i in inputStored) {
  console.log(inputStored[i]);
} 

console.table(inputStored);





