(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
           this.radius = Math.PI * (this.radius * this.radius);
           return this.radius;


            // TODO: complete this method
            // hint: area = pi * radius^2

            // TODO: return the proper value
        },

        logInfo: function (doRounding) {

            if (doRounding === true) {
                return Math.round(this.radius);
            }
            else if (doRounding === false){
                return this.radius;
            }

            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
        }
    };
    circle.getArea();
    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    circle.getArea();
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));
})();
