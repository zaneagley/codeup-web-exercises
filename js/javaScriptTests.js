(function () {




/// Extra script tests
    /*
    var num = '';
    var size = 7;

    for (var counter = 1; counter < size; counter++)
        num = num + counter;
        console.log(num);

    var num = "";
    var size = prompt("Enter the size of the pyramid");
    for(var i=1; i<=size; i++)
    {
        num = num + i;
        console.log(num);
    }*/


/// FizzBuzz -Works!-

    /*

    for (var counter = 0; counter < 100; counter = counter +1)


    if ((((counter % 5) === 0) && (counter % 3)) === 0) {
        console.log("FizzBuzz");
    }
    else if ((counter % 3) === 0) {
        console.log("Fizz");
    }

    else if ((counter % 5) === 0)  {
        console.log("Buzz");
    }
    else {
        console.log(counter)
    }

    */


// Ten Functions Exercise

    /*
    // isTrue

    function isTrue(text) {
        if (text === true) {
            return true;
        }
        else {
            return false;
        }
    }

    //concat

    function concat(input, input2) {
        return input.toString() + input2.toString();
    }

    //isFalse

    function isFalse(text2) {
        if (text2 == false) {
            return true;
        }
        else {
            return false;
        }
    }

    //not

    function not(input3) {
        var input3 = !input3;
        return input3;
    }


    //addOne

    function addOne(input4) {
        return (Number(input4)) + 1;
    }

    //isEven

    function isEven(input5) {
        if (input5 % 2 == 0) {
            return true;
        }

        else if (Math.abs(input5 % 2) == 1) {
            return false;
        }
        else if (isNaN(input5)) {
            return false;
        }
        else {
            return false;
        }
    }

    //isIdentical

    function isIdentical(inputID1, inputID2) {
        if (inputID1 === inputID2) {
            return true;
        }
        else {
            return false;
        }
    }

    //isEqual

    function isEqual(inputEqual1, inputEqual2) {
        if (inputEqual1 == inputEqual2) {
            return true;
        }
        else {
            return false;
        }
    }

    //or

    function or(inputOr, inputOr2) {
        return inputOr || inputOr2;
    }

    //and

    function and(inputAnd1, inputAnd2) {
        return inputAnd1 && inputAnd2;
    }*/


//Calculator fx

    /*
    var total = 0
    var total2 = 0

    var number1 = prompt("What is the first number?");
    var number2 = prompt("What is the second number?");
    var operator = prompt("Please select: add, subtract, multiply, divide, module, neg, square.");


    function square(number) {
        return number * number;
    }


    function operatorChoice(operator) {


            switch (operator) {
                case "add":
                    total = (Number(number1)) + (Number(number2));
                    return operator;
                    break;
                case "subtract":
                    total = (Number(number1)) - (Number(number2));
                    return operator;
                    break;
                case "multiply":
                    total = (Number(number1)) * (Number(number2));
                    return operator;
                    break;
                case "divide":
                    total = (Number(number1)) / (Number(number2));
                    return operator;
                    break;
                case "module":
                    total = (Number(number1)) % (Number(number2));
                    return operator;
                    break;
                case "neg":
                    total = -Math.abs(Number(number1)) - Math.abs(Number(number2));
                    return operator;
                    break;
                case "square":
                    total = square(number1)
                    total2 = square(number2);
                    return operator;
                    break;
            }
        }


    console.log(operator)



    function calculator() {
        operatorChoice(operator, number1, number2);
        return total;
    }

    calculator(number1, operatorChoice(), number2, total);

    console.log(number1);
    console.log(number2);
    console.log(total);
    console.log(total2);*/


//function 'closure'

    /*
    var multifactor = prompt("Give number to multiply with.");
    var number3 = prompt("Enter second number");


    function multiplier(factor) {
        return function(number) { return number * factor;
    }; }
    var twice = multiplier(multifactor);
    console.log(twice(number3));
    */


    /*
        Bonus 1
        Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
        - Catch any invalid inputs.
        - Write the logic using if/else ifs and then refactor using a switch case

        // Conditional Bonuses

        //if and if else
    /*

    // weekDayMessage();

    function weekDayMessage(input) {
        var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        input = prompt("What is your favorite day of the week?");
        if (weekDays.indexOf(input) > -1) {
            if (input == "Monday") {
                alert("Really? Mondays are usually the most hated.  Good for you!")
            }
            else if (input == "Tuesday") {
                alert("Nice, there is some good deals for pizza on Tuesdays!")
            }
            else if (input == "Wednesday") {
                alert("It'sssssssss... Hump day!")
            }
            else if (input == "Thursday") {
                alert("Sure happy its Thursday.")
            }
            else if (input == "Friday") {
                alert("TGIF! TGIF!")
            }
            else if (input == "Saturday") {
                alert("Saturdays are pretty nice... long as not working.")
            }
            else if (input == "Sunday") {
                alert("Sunday Funday!.. Until the Monday.")
            }


        } else {
            alert("Please enter a valid date.")
        }
    }
    */
    /*

        function weekDayMessage(input) {
            var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            input = prompt("What is your favorite day of the week?");
            switch (weekDays.indexOf(input) > -1) {
                case (input === "Monday"): {
                    alert("Really? Mondays are usually the most hated.  Good for you!");
                    break;
                }
                case (input === "Tuesday"): {
                    alert("Nice, there is some good deals for pizza on Tuesdays!");
                    break;
                }
                case (input === "Wednesday"): {
                    alert("It'sssssssss... Hump day!");
                    break;
                }
                case (input === "Thursday"): {
                    alert("Sure happy its Thursday.");
                    break;
                }
                case (input === "Friday"): {
                    alert("TGIF! TGIF!");
                    break;
                }
                case (input === "Saturday"): {
                    alert("Saturdays are pretty nice... long as not working.");
                    break;
                }
                case (input === "Sunday"): {
                    alert("Sunday Funday!.. Until the Monday.");
                    break;
                }
                default: {
                    alert("Invalid input, please enter a date.");
                    break;
                }

            }
        }

        */


    /*
        Bonus 2
    Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
    - use an if/else
        - refactor to use a ternary operator


*/

    /*

    var number = 0

            function isNumber(input) {
        if (!isNaN(input)) {
            number = input;
            alert(input + " is a number!")
        }
        else {
            alert(input + " is not a number.")
        }
    }
    */


// var number = isNumber(prompt("Please give us a number!")) ? alert(number + " is a number!" ) : alert(number + " is not a number");

    /*

        Bonus 3
        Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
        - account for any invalid user input
        - case of input should not matter
        - accept both abbreviations and full names of the months

    */

/*
    while (true) {
        var season = prompt("Please enter a season: Spring, Summer, Fall, or Winter");
        var season = season.toLowerCase();
        if (season === "spring", "summer", "fall", "winter") {
            switch (season) {
                case "spring":
                    alert("Spring.");
                    var month = prompt("Please choose a month: March, April, May");
                    var month = month.toLowerCase()
                    if (month == "mar", "march", "apr", "april", "may") {
                        switch (month) {
                            case "mar":
                            case "march":
                                alert("March");
                                break;
                            case "apr":
                            case "april":
                                alert("April");
                                break;
                            case "may":
                                alert("May");
                                break;
                            default:
                                alert("Please enter a valid month.")
                        }

                        break;
                    }
                case "summer":
                    alert("Summer.");
                    var month = prompt("Please choose a month: June, July, August");
                    var month = month.toLowerCase()
                    if (month == "jun", "june", "jul", "july", "aug", "august") {
                        switch (month) {
                            case "jun":
                            case "june":
                                alert("June");
                                break;
                            case "jul":
                            case "july":
                                alert("July");
                                break;
                            case "aug":
                            case "august":
                                alert("August");
                                break;
                            default:
                                alert("Please enter a valid month.")
                        }
                        break;
                    }
                case "fall":
                    alert("Fall.");
                    var month = prompt("Please choose a month: September, October, November");
                    var month = month.toLowerCase()
                    if (month == "sep", "september", "oct", "october", "nov", "november") {
                        switch (month) {
                            case "sep":
                            case "september":
                                alert("September");
                                break;
                            case "oct":
                            case "october":
                                alert("October");
                                break;
                            case "nov":
                            case "november":
                                alert("November");
                                break;
                            default:
                                alert("Please enter a valid month.")
                        }
                        break;
                    }
                case "winter":
                    alert("Winter.");
                    while (true) {
                        var month = prompt("Please choose a month: December, January, February");
                        var month = month.toLowerCase()
                        if (month === "dec", "december", "jan", "january", "feb", "february") {
                            switch (month) {
                                case "dec":
                                case "december":
                                    alert("December");
                                    break;
                                case "jan":
                                case "january":
                                    alert("January");
                                    break;
                                case "feb":
                                case "february":
                                    alert("February");
                                    break;
                                default:
                                    alert("Please enter a valid month.");
                                    break;
                            }
                            break;
                        }
                        else {
                            continue;
                        }

                    }

                default:
                    alert("Please enter a valid season.")
                    break;
            }
        }

    }

    */

    /*
        GOLD STAR BONUS
        Create a distance unit conversion application.
            Prompt the user for unit of measurement.
            Prompt the user for a value.
            Prompt the user for a second unit of measurement to convert to.
            Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
        then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
        Use these conversion functions to make the correct unit conversion
        Potentially, you will need a large switch case to account for the possible unit conversions,
            i.e. what conversion functions will need to be called in and in what order.
            DOUBLE GOLD STAR BONUS
            Allow unit conversion to metric system units
    */











// Array Bonuses

/*
    BONUSES 1:
    Write a program to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
        Example input: "aBc12#""
    Example output: "AbC12#"
    */


/*

    var letters = ['a', 'b', 'c', 'A', 'B', 'C', '(', ')', '+', '-', '~', '*'];



    for (var i = 0; i<letters.length; i++) {
        if (letters[i] === letters[i].toUpperCase()
            && letters[i] !== letters[i].toLowerCase()) {
            console.log(letters[i].toLowerCase());
        }
        else if (letters[i] === letters[i].toLowerCase()
            && letters[i] !== letters[i].toUpperCase()) {
            console.log(letters[i].toUpperCase());
        }
        else {
            console.log(letters[i])
        }
    }
*/


var bodyBackground = document.getElementById("test");
var testButtonJS = document.getElementById("testButton");
console.log(bodyBackground);
console.log(testButtonJS);

testButtonJS.addEventListener("click", function () {
    bodyBackground.classList.toggle("BGforBody");

})


    // code for clean phone numbers given as 512-435-2466 into 5124352466

/*
function cleanPhoneNumbers(phoneNums) {
    var phoneNumsArrs = phoneNums.split("\n");
        var cleanNumsArrs = [];

    phoneNumsArrs.forEach(function(phoneNum) {
        var formattedNumber = phoneNum.split("-").join("");
        cleanNumsArrs.push(formattedNumber);
    });
    return cleanNumsArrs;

    }
    */

})();