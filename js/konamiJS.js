var secretLifeCode = [];
var win = new Audio('sounds/wow.mp3');
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
            $('body').toggleClass("flash");
            $('.fakeInfo').addClass("hideInfo");
            $('.hideBigFrame').toggleClass("hideBigFrame");
            setTimeout(function () {
                win.play();
               showMemes();
                setTimeout(function () {
                }, 3000)
            },3000);



        }
    }

    function showMemes() {
        win.play();
        $('#BigWow').css({"display": "none"});
        $('.hideFrame').removeClass("hideFrame");
        $(".snoop").animate({left: '1500px'}, 5000);
        $(".memeRow").slideDown(5000);
        animateDiv();
    }


    function fallingSnow() {

        var $snowflakes = $(), qt = 20;

        for (var i = 0; i < qt; ++i) {
            var $snowflake = $('<div class="snowflakes"></div>');
            $snowflake.css({
                'left': (Math.random() * $('body').width()) + 'px',
                'top': (- Math.random() * $('body').height()) + 'px'
            });
            // add this snowflake to the set of snowflakes
            $snowflakes = $snowflakes.add($snowflake);
        }
        $('body').prepend($snowflakes);

        $snowflakes.animate({
            top: "500px",
            opacity : "0",
        }, Math.random() + 5000, function(){
            $(this).remove();
            // run again when all 20 snowflakes hit the floor
            if (--qt < 1) {
                fallingSnow();
            }
        });
    }
    fallingSnow();


    if (secretLifeCode.length > 10) {
        secretLifeCode = [];
        console.log(secretLifeCode)
    }
});