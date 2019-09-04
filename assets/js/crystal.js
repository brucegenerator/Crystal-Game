// Global Variables

var yourNumber = 0;
var randomNumber = numberGenerator();

var crystalOne = Math.floor(Math.random() * 12) + 1;
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;

// Counters
var wins = 0;
var losses = 0;
var yourCrystals;

for (var i = 0; i < 4; i++){
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": randomNumber
    });

    $(".crystals").append
}
// Generates The Target Number
function numberGenerator() {
    return Math.floor(Math.random() * 102) + 19;
}
// Sets The startGame values
function startGame() {
    yourNumber = 0;
    yourCrystals = crystalValue();
    randomNumber = numberGenerator();
    
    
}
// Writes the random number to the DOM
$("#randomNumber").text(randomNumber);

    


function crystalValue() {
    
}

// Empties The Counter and Writes the Response to Win/Lose to the DOM
// And Restarts the Game

function writeWin(playerWins) {
    $(".counter").empty();
    if (playerWins === true) {
        $("#wins").append($("<p>").text("You Win!"));
        startGame();
    }
    else if (playerWins === false) {
        $("#losses").append($("<p>").text("You Lose!"));
        startGame();
    }


}
