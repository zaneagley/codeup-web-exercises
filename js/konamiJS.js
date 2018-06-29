var secretLifeCode = [];
var win = new Audio('sounds/wow.mp3');



$('body').removeClass("flash");



$("body").keydown(function (e) {
    var extraLife = 0;
    secretLifeCode.push(e.keyCode);
    console.log(secretLifeCode);
    if (secretLifeCode.length == 11) {
        extraLife = secretLifeCode.join(',');
        console.log(extraLife);
        if (extraLife === "38,38,40,40,37,39,37,39,65,66,13") {
            alert("Unlocked 30 extra lives!");
            $('body').toggleClass("flash");
            $('.hideFrame').removeClass("hideFrame");
            win.play();
            $(".snoop").animate({left: '700px'}, 2000);
        }
    }
    if (secretLifeCode.length > 10) {
        secretLifeCode = [];
        console.log(secretLifeCode)
    }
});