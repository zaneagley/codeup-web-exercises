(function () {
    "use strict";

    var playerScore = 0;
    var winningScore = 5;
    var scoreDisplay = document.querySelector('#scoreDisplay');
    var gameStart = false;
    var gameOver = false;
    var userSeq = [];
    var simonSeq = [];
    var id, color, level = 0;
    var simonColorsSound = [];  // Future work for adding sounds



    $(".start").click(function () {
        if (gameStart != true) {
            gameStart = true;
            startSequence();
        }
    });

    $('#resetbtn').click(reset);

    function startSequence() {
        if (gameStart != false) {
            getRandomNum();
            var i = 0;
            var myInterval = setInterval(function () {
                id = simonSeq[i];
                color = $("#" + id).attr("class").split(" ")[1];
                console.log(id + " " + color);
                addClassSound(id, color);
                i++;
                if (i == simonSeq.length) {
                    i = 0;
                    clearInterval(myInterval);
                }
            }, 1000);
        }
    }

    function getRandomNum() {
        var random = Math.floor(Math.random() * 4);
        simonSeq.push(random);
    }


    function addClassSound(id, color) {
        $('#'+id).addClass(color+'-active');
   //     playSound(id);
        setTimeout(function(){
            $('#'+id).removeClass(color+'-active');
        }, 500);
    }

    function playSound(id) {

    }

    $('.simonBlocks').click(function () {
        if (gameStart != false) {
            id = $(this).attr('id');
            color = $(this).attr('class').split(' ')[1];
            userSeq.push(id);
            console.log(id + " " + color);
            addClassSound(id, color);
            if (!checkUserSeq()) {
                displayError();
                userSeq = [];
            }
            if (userSeq.length == simonSeq.length && userSeq.length < winningScore) {
                console.log(playerScore);
                playerScore++;
                console.log(playerScore);
                $(scoreDisplay).text(playerScore);
                userSeq = [];
                startSequence();
            }
            if (userSeq.length == winningScore) {
                playerScore++;
                $(scoreDisplay).text(playerScore);
                $(scoreDisplay).addClass('win');
                alert("You win!");
                gameStart = false;
                gameOver = true
            }
        }
    });


    function checkUserSeq() {
        for (var i = 0; i < userSeq.length; i++) {
            if (userSeq[i] != simonSeq[i]) {
                return false
            }
        }
        return true
    }

    function displayError() {
        console.log('error');
        $(scoreDisplay).text('--');
        var counter = 0;
        var myError = setInterval(function () {
            counter++;
            if (counter == 3) {
                gameOver = true;
                $('.display').text(level);
                clearInterval(myError);
                reset();
                counter = 0;
            }
        }, 500);
    }

    function reset() {
        userSeq = [];
        simonSeq = [];
        playerScore = 0;
        $('#scoreDisplay').text(playerScore);
        $('#scoreDisplay').removeClass('win');
        gameOver = false;
        gameStart = false;
    }


})();