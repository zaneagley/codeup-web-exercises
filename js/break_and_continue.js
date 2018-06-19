(function () {







var number;
var i;


while (!(number % 2)) {
    number = prompt("Please enter a odd number between 1 and 50");

}


for(i = 1; i <= 50; i++){
    if (number == i) {
        console.log("Yikes! Skipping " + number);
        continue;
    }

    else if((i % 2) == 0){
        continue;
    }
    console.log("Here is an odd number: " + i);

}

})();