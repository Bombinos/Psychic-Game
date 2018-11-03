var computerChoices = ["a", "b", "c", "d", "e"];
var wins = 0;
var losses = 0;
var guessesLeft = 3;
var guesses = [];
var computerGuess = null;

var updateGuessesLeft = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateComputerGuess = function () {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
};

var updateGuesses = function () {
    document.querySelector("#userGuess").innerHTML = guesses.join(", ");
};

var reset = function () {
    guessesLeft = 3;
    guesses = [];
    updateComputerGuess();
    updateGuessesLeft();
    updateGuesses();
};

updateComputerGuess();

document.addEventListener('keydown', function (event) {
    if ((event.code == 'KeyA') || (event.code == 'KeyB') || (event.code == 'KeyC') || (event.code == 'KeyD') || (event.code == 'KeyE')) {
        var userGuess = event.key;

        guessesLeft--
        guesses.push(userGuess);

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess;
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess;
            reset();
        }



        document.querySelector("#compScreen").innerHTML = userGuess.toUpperCase();

    } else {
        console.log("wrong key")
    }

});






