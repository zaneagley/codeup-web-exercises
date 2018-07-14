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

    /*
    var bodyBackground = document.getElementById("test");
    var testButtonJS = document.getElementById("testButton");
    console.log(bodyBackground);
    console.log(testButtonJS);

    testButtonJS.addEventListener("click", function () {
        bodyBackground.classList.toggle("BGforBody");

    })
    */



//search bar
//     function myFunction() {
//         var input, filter;
//         input = document.getElementsByClassName('myLinks');
//         filter = document.getElementById('myInput').value.toUpperCase();

// // Loop through all list items, and hide those who don't match the search query

//         for (i = 0; i < input.length; i++) {
//             var currentElem = input[i];
//             var currentElemChild = input[i].children[0]
//             if (currentElemChild.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 currentElem.style.display = "";
//             } else {
//                 currentElem.style.display = "none";
//             }
//         }
//     }
//     document.getElementById('myInput').addEventListener('onkeyup', myFunction);





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

/*

// 1. Define a function named `isBoolean` that takes in a value and returns a
// boolean if the argument provided is a boolean value or not.

    function isBoolean(input) {
        var output;
        //
        if (input === true || input === false) {
            output = true;
        } else {
            output = false;
        }
        return output;
    }

    //   3. Define a function named `isString` that takes in a value as an input and returns a boolean
// if the input provided is a STRING or not. Numeric strings will count as strings and should return true.
    function isString(input) {
        return typeof input === 'string';
    }
    //   2. Define a function named `isNumeric` that takes in a value and returns true IF the input is numeric OR not. Numeric strings are numeric and should return true.
        function isNumeric(input) {
        return !isNaN(input) && !isBoolean(input) && input !== null;
    }
    //   4. Define a function named `isArray` that takes in an input and returns a boolean whether or not that input is an array or not.

        function isArray(input) {
        return Array.isArray(input);
    }
    //   5. Define a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is less than zero.

        function isNegative(input) {
        return isNumeric(input) && input < 0;
    }
    //  6. Define a function named `isPositive` that accepts an input and returns `true` or `false` based on whether the input is above zero. Any non-numeric input should return false.

        function isPositive(input) {
        return isNumeric(input) && input > 0;
    }
    //   7. Define a function named `increment` that takes in an input and adds 1 to it if the input is NUMERIC.
    //     If the input is NOT numeric, then return false.

        function increment(input) {
        if (isNumeric(input)) {
            return input +1;
        } else {
            return false;
        }

    }
    //  8. Define a function named `decrement`. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, `decrement` should return false.

        function decrement(input) {
        if (isNumeric(input)) {
            return input - 1;
        } else {
            return false;
        }
    }
    //   9. Define a function named `square`. If the provided input is NUMERIC, `square` should return the number multiplied by itself. If the input is not numeric, `square`, should return false.

        function square(input) {
        if (isNumeric(input) || input === 1) {
            return input * input;
        }
        return false;
    }
   // 10. Define a function named `upperCase` that takes in a single input. If the input is not a string, return `false`.  If the input is a non-numeric string, then return it with all the letters capitalized.

        function upperCase(input) {

        if (input === '') {
            return '';
        }

        if (isString(input) && !isNumeric(input)) {
            return input.toUpperCase();
        }
        return false;
    }
  //  11. Write a function named `isPalindrome` that takes in a single input.
  //      If the input is a numeric string, then return `false`.
  //      If the input is a string, then return true if the string is the same forwards as it is backwards.
  //      Return false if the string is different forwards from backwards. Ignore capitalization.

        function isPalindrome(input) {

        var lowerInput;
        var reverseString;

        //use empty string IF to help address that missing spec\\
        //input === undefined, return false;
        //another if for !isArray(input), false;

        if (isNumeric(input)) {
            return false;
        }
        if (isString(input)) {
//        reverse string & compare to original ******************
            lowerInput = input.toLowerCase()
            reverseString = lowerInput.split('').reverse().join('');
            //need to check if reversed input is equal to original
            if (lowerInput === reverseString) {
                return true;
            } else {
                return false;
            }
        }
    }
   // 13. Write a function named `containsVowel` that takes in a single input as its argument.
// If the argument is NOT a string, then return `false`. XX
// If the argument IS a string, then return TRUE if the string contains ANY of the vowels ‘a’, ‘e’, ‘i’, ‘o’, or ‘u’ either uppercased or lowercased.
// Ignore ‘y’. If the string DOES NOT CONTAIN any of these vowels, then return `false`.

        function containsVowel(input) {
        if (input !== isString()) {
            return false;
        } else if (isString.includes('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')) {
            return true;
        }
    }
   // 14. Write a function named `add` that takes in two inputs. XXXXXXXXXXXX
// If both inputs provided are numeric, `add` will return the sum of both inputs.
// If one or both inputs is not numeric, `add` should return false.

    function add(input1, input2) {
        if (input1 === parseFloat(input1) && input2 === parseFloat(input2)) {
            return input1 + input2;
        } else if (input1 === isFinite(input1) && input2 === isFinite(input2) || isNaN(!input1) && isNaN(!input2)) {
            return input1 + input2;
        }
        return false;
    }
    //15. Write a function named 'multiply' that takes in two inputs.
// If both inputs provided are numeric, `multiply` returns the product of the first input multiplied by the second.
// If either or both inputs are not numeric, `multiply` should return false.

        function multiply(a, b) {
        if (isNumeric(a) && isNumeric(b)) {
            return (a) * (b);
        }
        return false;
    }
   // 16. Sum of Squares:

        function sumOfSquares(a, b) {
            // console.log(a, b);
            var squareA = square(a);
            // console.log('this is a^2:', squareA);

            var squareB = square(b);
            // console.log('this is b^2: ', squareB);

            return add(squareA, squareB);
        }

        // Print array revevrse
        function printReverse(arr) {
            for (var i = arr.length -1; i >= 0 ; i-- ) {
                console.log(arr[i])
            }
        }

        printReverse([1,2,3,4,5,6]);
*/


//Assessment 2

/*
    function remove9s(arrNums) {

        var outputArr = [];

        arrNums.forEach(function (num) {
            if (num !== 9){
                outputArr.push(num)
            }
        });
        return outputArr;
    }


    function capitalizeName(str) {
        var names = str.split(" ");
        for (var i = 0; i < names.length; i++) {
            names[i] = names[i][0].toUpperCase() + names[i].slice(1)
        }
        return names.join(" ");
    }



    function capitalizeAllNames(arrNames) {
        var outputArr = [];
        arrNames.forEach(function (name) {
            outputArr.push(capitalizeName(name))
        });
        return outputArr;
    }

    function countVowels(str) {
        var count = 0;
        var chars = str.split("");
        chars.forEach(function (char) {
            if (char === 'a' || char === 'e' ||char === 'i' ||char === 'o' ||char === 'u') {
                count++;
            }
        });
        return count;
    }


    function averageSales(salesPeople) {
        var totalSales = 0;
        salesPeople.forEach(function (person) {
            totalSales += person.sales;
        });
        return totalSales / salesPeople.length
    }



    function analyzeWord(input) {

        return {
            word: input,
            numberOfLetters: input.length,
            numberOfVowels: countVowels(input)
        };


        var wordDetails = {};
        wordDetails.word = input;
        wordDetails.numberOfLetters = input.length;
        wordDetails.numberOfVowels = countVowels(input);
        return wordDetails;
    }

    function analyzeAllWords(arrStr) {
        var outputArr = [];

        arrStr.forEach(function (str) {
            outputArr.push(analyzeWord(str));
        });
       return outputArr;
    }


    function padArray(array, length, fill) {
        while (array.length < length){
            array.push(fill)
        }
        return array;
    }
    */

// JS ES6 very of:
//     var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     var evens = [];
//     for (var i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             evens.push(numbers[i]);
//         }
//     }

/*let numbers = [1,2,3,4,5,6,7,8,9,10];

let evens = numbers.filter( n => n % 2 === 0);
// Can also be
let evens = numbers.filter( (n) => {
       return n % 2 === 0
    });*/



        const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

        const customers = [
            {
                name: "Fred",
                age: 58,
                occupation: "Police Officer",
                noOfPurchases: 4
            },
            {
                name: "Samantha",
                age: 54,
                occupation: "Teacher",
                noOfPurchases: 18
            },
            {
                name: "Charles",
                age: 38,
                occupation: "Librarian",
                noOfPurchases: 9
            }
        ];

        const pets = [
            {
                name: 'Bud',
                age: 2,
                breed: 'Pug'
            },
            {
                name: 'Gabby',
                age: 10,
                breed: 'Retriever'
            },
            {
                name: 'Fred',
                age: 1,
                breed: 'Lab'
            },
            {
                name: 'Bowser',
                age: 2,
                breed: 'Pug'
            }
        ];

        const family = [
            {
                name: "Pam",
                gender: "female",
                age: 29,
            },
            {
                name: "Amelie",
                gender: "female",
                age: 10,
            },
            {
                name: "Justin",
                gender: "male",
                age: 32,
            },
        ];

        // PROBLEM 1 - create an array of the first letters of each fruit

        const firstFruitLetter = fruits.map(letter => letter.charAt(0));

        // PROBLEM 2 - create array of user objects based on the customers array
        // of objects (each user object should just have name and age properties)

        const nameAges = customers.map(nameage => {
            return {name: nameage.name,  age: nameage.age};
        });
        // PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
        // **containing the same properties as the objects on the customers objects
    let test = [];

        const civilServants =  customers.filter(servant => {
            if ( servant.occupation === 'Teacher' || 'Police Officer') {
               test.push(servant.occupation)
           }

        });

        // PROBLEM 4 - determine the average age of customers

        const averageAge = customers.reduce((person, personage) => {
         return person + personage.age / 3
    }, 0);
        // PROBLEM 5 - create a function makeSuperPet() that takes in the pets array as input and returns a single pet object
        // with the following shape...



        function makeSuperPet(pets) {
          return pets.map(n => {
            let string = n['name'].join('');
             return string
          });


        }

    /*

        {
            name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
            age: THE_TOTAL_OF_ALL_PET_AGES,
            breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
        }

     */

        // PROBLEM 6 - take in an array of pets and return an array of the length of first names for pugs only
        // your output for the given input should be [3, 6] for 'Bud' and 'Bowser'
        const sortPugs = pets.filter(pet => pet.breed === 'Pug');
        const pugsNameLength = sortPugs.map(pet => pet['name'].length);

    //    console.log(pugsNameLength);
        // PROBLEM 7 - create a function getFemaleFamilyMembers() that when given the family variable as an argument,
        // returns an array of female family member names
        function getFemaleFamilyMembers(family) {
            let female = family.filter(member => member.gender === 'female');
            return female.map(n => n.name);

        }

   // console.log(getFemaleFamilyMembers(family));
        // PROBLEM 8 - create a function makeLongPetString() that when given the variable of pets,
        // returns a string of all property values with dashes separating each property value
        function makeLongPetString(pets) {
            return Object.values(pets)
        }

        // PROBLEM 9 - create a function that when given an array of first names, returns an array of the same names with a last name of Smith

        // input = ['Sally', 'Fred', 'Steve']
        // output = ['Sally Smith', 'Fred Smith', 'Steve']

    const arrayOfNums = [1,2,3,4,5,6,7,8,9,10];
        // PROBLEM 10 - create a function that when given an array of numbers, return the sum of even numbers
        function evenArrayNums(numbers) {
            let evens = numbers.filter(n => n% 2 === 0 );
            return evens.reduce((total, currentVal) => {
               return total + currentVal
            }, 0);
        }

        console.log(evenArrayNums(arrayOfNums));
        // PROBLEM 11 - create a function that when given an array of numbers, return the sum of all numbers evenly divisible by 10

        // PROBLEM 12 - create a function that when given an array of names, return a string of all the first letters of each name

            function firstLetterName(arr) {
              let arrayLetters = arr.map(letter => letter.charAt(0));
                return arrayLetters.join('')
            }
        // PROBLEM 13 - create a function that when given an array of values, returns an array of only the truthy values



        // PROBLEM 14 - create a function that when given an object, returns the property values as an array of elements
   const person = {
        name: "Fred",
            age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    };

            function objectToArray(object) {
               return Object.values(object)

            }
            console.log(objectToArray(person))
        // PROBLEM 15 - create a function that when given an object, returns the property values as an array of elements

        // PROBLEM 16 - create a function that when given three arguments: a min num, a max num, an array
        // of nums will return the array of nums that are only between the min and max values, inclusive

        // PROBLEM 17 - create a function that when given an array of strings, returns an array of objects
        // with properties for the given string value and the length of the string and the string without vowels (not including y)








})();