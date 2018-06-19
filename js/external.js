(function() {

    "use strict"

// Practice


console.log('Hello from JavaScript!');

alert("Welcome to my Website!");

var userInput = prompt('What is your favorite color?');
alert('Awesome! ' + userInput + ' is my favorite color too!');


// Section 1
var littleMermaidDaysRented = Number(prompt('How many days did you rent Little Mermaid?'));
var brotherBearDaysRented = Number(prompt('How many days did you rent Brother Bear?'));
var herculesDaysRented = Number(prompt('How many days did you rent Hercules?'));
var rentalFeePerDay = Number(prompt('How much is the rental fee per day?'));
var totalRentalFees = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * rentalFeePerDay;

alert(totalRentalFees);
// Section 2

var googleHourlyPayRateDollar = Number(prompt('How much does Google pay hourly for your services?'));
var googleHoursWorkedWeek  = Number(prompt('How many hours did you work for Google this week?'));

var amazonHourlyPayRateDollar = Number(prompt('How much does Amazon pay hourly for your services?'));
var amazonHoursWorkedWeek = Number(prompt('How many hours did you work for Amazon this week?'));

var facebookHourlyPayRateDollar = Number(prompt('How much does Facebook pay hourly for your services?'));
var facebookHoursWorkedWeek = Number(prompt('How many hours did you work for Facebook this week?'));

var totalPayEarnedWeek = (googleHourlyPayRateDollar * googleHoursWorkedWeek) + (amazonHourlyPayRateDollar * amazonHoursWorkedWeek) + (facebookHourlyPayRateDollar * facebookHoursWorkedWeek);

alert(totalPayEarnedWeek);

// Section 3

var classNotFull = confirm('Do you wish to attend Rick Sanchez\'s science class?');
var scheduleNoConflict = confirm('Are you available Monday-Friday at 9am to 5pm?');

var enrollmentSuccess = classNotFull && scheduleNoConflict;

alert('Thank you for your life story. Based on your actions, you may enter this class is: ' + enrollmentSuccess);


// Section 4


var amountOfItemsForDiscount = Number(prompt('How many items are required for the discount?'));
var amountOfItemsPurchasing = Number(prompt('How many items are you purchasing?'));
var offerNotExpired = confirm('Is the offer currently expired?');
var premiumMember = confirm('Are you a Premium Member?');

var discountApproved = premiumMember || (amountOfItemsForDiscount <= amountOfItemsPurchasing && offerNotExpired);

alert(discountApproved);

})();



