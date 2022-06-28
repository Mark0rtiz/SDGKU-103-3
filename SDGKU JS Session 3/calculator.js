function calculator(){
    console.log("Calculating...")
    //get the two values from the prompt
    let num1= Number(prompt("Enter a number"));
    let num2= Number(prompt("Enter a second number"));
    //do all four operations
    let result= `<p> ${num1 + num2}</p><p> ${num1 - num2}</p><p> ${num1 * num2}</p><p> ${num1 / num2}</p>`;


    document.getElementById("results").innerHTML = result;
    //display the results of all four operations in the results area of HTML
}


