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
