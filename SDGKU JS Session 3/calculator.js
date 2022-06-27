function calculator(){
    console.log("Calculating...")
    //get the two values from the prompt
    let num1= Number(prompt("Enter a number"));
    let num2= Number(prompt("Enter a second number"));
    //do all four operations
    document.write(`<p>Addition result: ${num1 + num2}</p>`);
    document.write(`<p>Subtraction result: ${num1 - num2}</p>`);
    document.write(`<p>Multiplication result: ${num1 * num2}</p>`);
    document.write(`<p>Division result: ${num1 / num2}</p>`);
    //display the results of all four operations in the results area of HTML
}

document.getElementById("results").innerHTML = calculator();
