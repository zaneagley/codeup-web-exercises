(function () {




"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var enterNumber = confirm("Hello! If you would like to enter a number, please press Ok!");



if (enterNumber) {
    var number = prompt("Alright, please enter a number!");
    oddOrEven(number);
}
else {
    alert("Snooze, ya lose.")
}


//  Initial setup for numbers.

/*if (enterNumber) {
    var number = prompt("Alright, please enter a number!");

    if (number % 2 == 0)
    {
        alert("This number is even!");
        alert((parseInt(number)) + 100);
        (number > 0) ? alert("This number is positive!") : alert("This number is negative!")
    }
    else {
        alert("Thank you for your participation!")
    }

    if (Math.abs(number % 2) == 1)
    {
        alert("This number is odd!");
        alert((parseInt(number)) + 100);
        (number > 0) ? alert("This number is positive!") : alert("This number is negative!")
    }
    else {
        alert("Thank you for your participation!")
    }


}*/

// Splitting the previous code into functions.


function evenNumber(number) {
    if (number % 2 == 0)
    {
        alert("This number is even!");
        alert((number + 100));
        (number > 0) ? alert("This number is positive!") : alert("This number is negative!")
    }
    else {
        alert("Hey. Why didn't you give me a number?")
    }
}

function oddNumber(number) {
    if (Math.abs(number % 2) == 1)
    {
        alert("This number is odd!");
        alert((number + 100));
        (number > 0) ? alert("This number is positive!") : alert("This number is negative!")
    }
    else {
        alert("Hey. Why didn't you give me a number?")
    }
}

function oddOrEven(number) {

    if (number % 2 == 0) {
        evenNumber(number);


    }
    else if (Math.abs(number % 2) == 1) {
        oddNumber(number)
    }

    else {
        alert("Hey. Why didn't you give me a number?")
    }

}










/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];



/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    switch (color) {
        case "red":
            return "Strawberries are red";
            break;
        case "orange":
            return "Oranges are... orange";
            break;
        case "yellow":
            return "Bananas are yellow";
            break;
        case "green":
            return "Grass is green";
            break;
        case "blue":
            return "blue is the color of the sky.";
            break;
        case "indigo":
            return "Indigo is indigo";
            break;
        case "violet":
            return "Violets are violet";
            break;
        default:
            return "I don't know that color.";
    }

}

    console.log(analyzeColor(randomColor));



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("What is your favorite color?");

alert(analyzeColor(userColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var totalAmount = prompt("How much is the total cost?")


 function calculateTotal(luckyNumber, totalAmount) {
        switch (luckyNumber){
            case 1:
                return (10 / 100) * totalAmount;
                break;
            case 2:
                return (25 / 100) * totalAmount;
                break;
            case 3:
                return (35 / 100) * totalAmount;
                break;
            case 4:
                return (50 / 100) * totalAmount;
                break;
            case 5:
                return 0;
                break;
            default:
                return  totalAmount;



        }

}



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);


alert("Your lucky number is: " + (luckyNumber));
alert("Your price BEFORE the discount was: " + (totalAmount));

alert("Your new price after the discount is: " + (totalAmount - (calculateTotal(luckyNumber, totalAmount))));


    console.log(luckyNumber);

})();