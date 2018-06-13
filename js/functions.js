(function () {



"use strict";
/*

/!**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 *!/

    function sayHello(greeting) {
        return greeting
}

    console.log(sayHello("Hello!"));

/!**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 *!/

var helloMessage = sayHello("Zack");

console.log(helloMessage);

/!**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 *!/

var myName = "Zack";

sayHello(myName);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/!**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 *!/

    function isTwo(number) {
    var Two = 2;
    return Two == number;

}

    console.log(isTwo(random));


/!**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 *!/

    function calculateTip(bill) {
        var tip = bill * .20;
        return tip;
}

    console.log(calculateTip(10));
/!**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 *!/

var bill = prompt("What is your total bill?");

alert(calculateTip(bill));


/!**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 *!/

var originalPrice = prompt("What is the current total paying for?");
var discountPercent = .2;


 function applyDiscount(originalPrice, dicountPercent) {
   var totalPrice = originalPrice * discountPercent;
   return totalPrice;
}

alert(applyDiscount(originalPrice, discountPercent));

*/


    // ================ SIMPLE FUNCTION DRILLS
    // 1) Make a function called returnTwo() that returns the number 2 when called
    // ---Test this function with console.log(returnTwo())

    function returnTwo() {
        return 2;
    }
    console.log(returnTwo());
    // 2) Make a function called returnName() that returns the string of your name
    // ---Test this function with console.log(returnName())

    function returnName() {
        return "Zack"
    }

    console.log(returnName());
    // 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
    // ---Test this function with console.log(addThree(5))

    function addThree(number) {
        number += 3;
        return number;
    }

    console.log(addThree(3));
    // 4) Make a function called sayString() which returns the string input passed in.
    // ---Test this function with console.log(sayString())

    function sayString(string) {
        return string;
    }

    console.log(sayString("Test"));
    // 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
    // ---Test this function by directly calling sayHowdy()
    // ---Remember this function does not need a defined return value

    function sayHowdy() {
        console.log("Howdy!");
    }

    sayHowdy();

    // ================ CHALLENGE FUNCTION DRILLS
    // Write a function called `identity(input)` that takes in an argument called input and returns that input.

    var input = prompt("Input please");

    function identity(input) {
        return input;
    }

    console.log(identity(input));
    // Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }


    console.log(getRandomNumber(1, 6));

    // Write a function called `first(input)` that returns the first character in the provided string.

    function first(input) {
        return input.charAt(0);
    }

    console.log(first(input));
    // Write a fuction called `last(input)` that returns the last character of a string

    function last(input) {
        return input.charAt(input.length - 1);
    }

    console.log(last(input));
    // Write a function called `rest(input)` that returns everything but the first character of a string.

    function rest(input) {
        return input.slice(1);
    }

    console.log(rest(input));
    // Write a function called `reverse(input)` that takes a string and returns it reversed.

    function reverse(input){
        return input.split("").reverse().join("");
    }

    console.log(reverse(input));
    // Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

    function isNumeric(input) {
        return typeof input === 'number';
    }

    console.log(isNumeric(input));
    // Write a function called `count(input)` that takes in a string and returns the number of characters.

    function count(input) {
        return input.length;
    }

    console.log(count(input));
    // Write a function called `add(a, b)` that returns the sum of a and b

    function add(a, b) {
        return (a + b);
    }

    console.log(add(5, 10));
    // Write a function called `subtract(a, b)` that return the difference between the two inputs.

    function subtract(a, b) {
        return (a - b);
    }

    console.log(subtract(10, 5));
    // Write `multiply(a, b)` function that returns the product

    function multiply(a, b) {
        return (a * b);
    }

    console.log(multiply(5, 10));
    // Write a divide(numerator, denominator) function that returns a divided by b

    function divide(numerator, denominator) {
        return (numerator / denominator);
    }

    console.log(divide(50, 10));
    // Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

    function remainder(number, divisor) {
        return (number / divisor)
    }

    // Write the function `square(a)` that takes in a number and returns the number multiplied by itself.

    function square(a) {
        return (a * a);
    }

    console.log(square(10));
    // # Super Duper Gold-Star Bonus
    // Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

    function sumOfSquares(a, b) {
        return (add(square(a),(square(b))));
    }

    console.log(sumOfSquares(5, 5));
    // Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

    function doMath(operator, a, b) {
        return operator(a, b)
    }

   console.log(doMath(add, 5, 10));
})();