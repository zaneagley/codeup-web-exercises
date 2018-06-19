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
