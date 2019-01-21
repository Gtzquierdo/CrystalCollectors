var imageBlue = 0;
var imageGreen = 0;
var imageRabbit = 0;
var imageWhite = 0;
var gamePoints = 0;
var randomNbr = 0;
var gameOver = true;
var numWins = 0;
var numLosses = 0;

$(document).ready(function() {
    
    function resetGame() {
        randomNbr = (Math.floor(Math.random() * 100));
        $("#randomNumber").text(String(randomNbr));

        imageBlue = (Math.floor(Math.random() * 10));
        imageGreen = (Math.floor(Math.random() * 10));
        imageRabbit = (Math.floor(Math.random() * 10));
        imageWhite = (Math.floor(Math.random() * 10));

        $("#total").text(String(0));
        gamePoints = 0;
        gameOver = false;
    };

    function updateScore() {
        if (gamePoints > randomNbr) {
            numLosses++;
            $("#tracker").html("<p> Haha You Lose! <p><p> Wins: " + numWins + "</p><p> Losses: " + numLosses + "<p>");
            gameOver = true;
            resetGame();
        } else if (gamePoints === randomNbr) {
            numWins++;
            $("#tracker").html("<p> Hooray! You win! </p><p> Wins: " + numWins + "</p> <p> Losses: " + numLosses + "<p>");
            gameOver = true;
            resetGame();
            };
        };
    

    if (gameOver === true) {
        resetGame();
    };

    $("#imageBlue").click(function() {
        gamePoints = gamePoints + imageBlue;
        $("#total").text(String(gamePoints));
        updateScore();
    });

    $("#imageGreen").click(function() {
        gamePoints = gamePoints + imageGreen;
        $("#total").text(String(gamePoints));
        updateScore();
    });

    $("#imageRabbit").click(function() {
        gamePoints = gamePoints + imageRabbit;
        $("#total").text(String(gamePoints));
        updateScore();
    });

    $("#imageWhite").click(function() {
        gamePoints = gamePoints + imageWhite;
        $("#total").text(String(gamePoints));
        updateScore();
    });
});
