// //create function
// //local variables
// function greet(userName){
//     return "Hello " + userName + "!";
// }

let greet = function(userName){
    x++;
    return `Hello ${userName} id: ${x}`;
}; // another type of function

//call function
document.write(`<p>${greet("Mark")} </p>`);