
/*
var i = 2

while (i < 65537) {
    console.log(i);
    var i = i * 2;
}
*/



// This is how you get a random number between 50 and 100

var allCones = Math.floor(Math.random() * 50) + 50;

// This expression will generate a random number between 1 and 5

var conesBought = Math.floor(Math.random() * 5) + 1;




do {
    conesBought = Math.floor(Math.random() * 5) + 1;
    console.log("Current total of Ice Cream Cones : " + allCones);
    console.log("Cones purchased = " + conesBought);
    if (conesBought > allCones) {
        console.log("Cannot sell you " + conesBought+" , I only have " + allCones);
        continue;
    }
    else {
        allCones = allCones - conesBought;
        console.log(conesBought + " cones have been sold...")
    }
} while (allCones > 0);

console.log("Total of cones: " + allCones + " All cones have sold!");