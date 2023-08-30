// Iteration 1: Names and Input
let hacker1 = "Jennifer";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Michelle";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    
  } else if (hacker1.length < hacker2.length)
    { console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
     
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
console.log(hacker1.toUpperCase());

let hacker2_rev = "";
for (let i = hacker2.length-1; i>=0; i--) {
  hacker2_rev += hacker2[i];  
}
console.log(hacker2_rev);

if (hacker1 < hacker2) {
  console.log(`${hacker1} goes first.`);
  
} else if (hacker2 < hacker1)
  { console.log(`Yo, ${hacker2} goes first, definitely.`);
   
} else {
  console.log(`What?! You both have the same name?`);
}