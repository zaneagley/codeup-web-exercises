(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);


    var planetsArray1 = planetsArray.join(" \n ");

    console.log(planetsArray1);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsString2 = "placeHolder-|Mercury|-|Venus|-|Earth|-|Mars|-|Jupiter|-|Saturn|-|Uranus|-|Neptune|-placeHolder";


    var planetsString3 = planetsString2.split("|").join("<li>");
    var planetsString3 = planetsString3.split("placeHolder").join("<ul>");
    var planetsString3 = planetsString3.split("-").join("\n");

    console.log(planetsString3);
})();
