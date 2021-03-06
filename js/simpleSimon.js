(function () {
    "use strict";

    var difficultySetting = document.querySelector('#difficulty');
    var scoreDisplay = document.querySelector('#scoreDisplay');
    var gameStart = false;
    var gameOver = false;
    var userSeq = [];
    var simonSeq = [];
    var winningScore = 9;
    var id, color, level, playerScore = 0;
    var simonColorsSound = [];  // Future work for adding sounds





    difficultySetting.addEventListener("change", function () {
        switch (difficultySetting.value){
            case "easy":
                winningScore = 5;
                break;
            case "normal":
                winningScore = 9;
                break;
            case "hard":
                winningScore = 13;
                break;
            case "endless":
                winningScore = Infinity;
                break;
            default:
        }
    });


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
                color = $("#" + id).attr("class").split(" ")[2];
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
            color = $(this).attr('class').split(' ')[2];
            userSeq.push(id);
            addClassSound(id, color);
            if (!checkUserSeq()) {
                displayError();
                userSeq = [];
            }
            if (userSeq.length == simonSeq.length && userSeq.length < winningScore) {
                playerScore++;
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