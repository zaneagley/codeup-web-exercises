var secretLifeCode = [];
var win = new Audio('sounds/wow.mp3');
$('body').removeClass("flash");







function makeNewPosition(){
    var h = $(window).height();
    var w = $(window).width();
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    $('.doge').animate({ top: newq[0], left: newq[1] }, function(){
        animateDiv();
    });

}




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
            $('.hideBigFrame').toggleClass("hideBigFrame");
            setTimeout(function () {
                win.play();
            }, 600);
            setTimeout(function () {
                $('#BigWow').css({"display": "none"});
                $('.hideFrame').removeClass("hideFrame");
                $(".snoop").animate({left: '1500px'}, 5000);
                animateDiv();
            }, 5000)


        }
    }
    if (secretLifeCode.length > 10) {
        secretLifeCode = [];
        console.log(secretLifeCode)
    }
});