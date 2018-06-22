




// Longest Word
//
// function findLongWord(string) {
//     var longestWord = string.split(' ').reduce(function(longest, currentWord) {
//
//   return currentWord.length > longest.length ? currentWord : longest;
//    }, "");
//
//     console.log(longestWord.length);
//     return longestWord.length;
// }
// findLongWord("It is unfair to suggest the school was responsible");



//
//
// function booleanABEqualC(a, b, c) {
//     var a = Math.pow(a, 2);
//     var b = Math.pow(b, 2);
//     var c = Math.pow(c, 2);
//
//     if ((a + b) == c) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//
// console.log(booleanABEqualC(, 29, 3));


// Title Case
//
// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }
//
// console.log(titleCase(prompt("Enter a random string to title case it.")));

// Boolean,Number or String

// arguements keyword


// function stringOrNumOrBoolean(input, input, input) {
//    if (typeof input === "string") {
//        return console.log("String");
//    }
//    else if (typeof input === "number") {
//        return console.log("Number")
//    }
//    else if (typeof input === "boolean") {
//        return console.log("Boolean")
//    }
// }

// stringOrNumOrBoolean(13);
//
//
function checkIfSameLetters(a, b) {
    var firstWordLower = a.toLowerCase();
    var secondWordLower = b.toLowerCase();
    var firstWord = firstWordLower.split('');
    var secondWord = secondWordLower.split('');
    firstWord.sort();
    secondWord.sort();
    for (var i = 0; i < firstWord.length; i++)
        if (firstWord[i] == secondWord[i]) {
        return true
        }
        else {
        console.log(firstWord + " " + secondWord);
        return false
        }

}

console.log(checkIfSameLetters("Maybe", "EMyba"));