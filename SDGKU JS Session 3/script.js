// arrays
let myArray = [1, 2, 3, 4];
myArray[1] =5;
console.log(myArray[1]);

let myArray2 = ["what is the meaning of life?", 42, true];
console.log(myArray2[0]);

//array declarations
const numbers = [10, 20, 30, 40, 50, 60];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

//methods for arrays
numbers.push(60, 70, 80);  //adds to back of the array
numbers.unshift(-30, -20, -10, 0); //adds to front of the array
months.pop(); //removes the last element from the array
months.shift(); //removes the first element from the array
months.splice(1, 1) //removes replaces elements

//travel array using for loops
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//display the array
console.table(numbers);
console.table(months);