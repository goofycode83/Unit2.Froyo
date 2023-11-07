
/*
1. Make a prompt that askes the user for a list or there order
2. Parse the list of flavors
3. Stores it in a array
4. loop through the array vanilla,vanilla,vanilla,strawberry,coffee,coffee
*/
const userInputs = prompt(`Please enter your desired froyo flavors:`);
const inputStored = userInputs.split(",");

for (let i in inputStored) {
  console.log(` You have ordered: ${inputStored[i]} `);
} 
console.table(inputStored);




const froyoFlavors = (vanilla,strawberry,coffee) => {
  let flavors = {
    vanilla: `vanilla`,
    strawberry: `strawberry`,
    coffee: `coffee`
  };
  return flavors;
}

console.log(froyoFlavors(inputStored));
