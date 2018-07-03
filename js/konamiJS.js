var secretLifeCode = [];
var win = new Audio('sounds/wow.mp3');
var jazz = new Audio('sounds/gandalfmeme.mp3');
$('body').removeClass("flash ");



function makeNewPosition(){
    var h = $(window).height();
    var w = $(window).width();
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(){
    var newpos = makeNewPosition();
    $('.doge').animate({ top: newpos[0], left: newpos[1] }, function(){
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
            setTimeout(function () {
                win.play();
            }, 500);
            $('body').toggleClass("flash");
            $('.fakeInfo').addClass("hideInfo");
            $('.hideBigFrame').toggleClass("hideBigFrame");
            setTimeout(function () {
               showMemes();
                jazz.play();
            },3000);



        }
    }

    function showMemes() {
        $('#BigWow').css({"display": "none"});
        $('.hideFrame').removeClass("hideFrame");
        $(".snoop").animate({left: '1700px'}, 10000);
        $(".memeRow").slideDown(3000);
        animateDiv();
    }



    if (secretLifeCode.length > 10) {
        secretLifeCode = [];
        console.log(secretLifeCode)
    }
});