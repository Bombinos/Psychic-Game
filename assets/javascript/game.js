document.addEventListener("DOMContentLoaded", function(event) {

var computerChoices = ["a", "b", "c", "d", "e"];
var wins = 0;
var losses = 0;
var guessesLeft = 3;
var guesses = [];
var computerGuess = "";
var userGuess = "";

var updateGuessesLeft = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateComputerGuess = function () {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
};

var updateGuesses = function () {
    document.querySelector("#userGuess").innerHTML = guesses.join(", ");
};


// function winReact() {
//     var x = document.getElementById("eyes");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

// var eyeReact = function() {
//     var x = document.getElementById("eyes");
//     if (x.display === "none") {
//         x.display = "block";
//     } else {
//         x.display = "none";
//     }
// }

// var eyeOpen = function() {
//     document.querySelector("#eyes").display === "block";
// }

// var eyeShut = function() {
//     document.querySelector("#eyes").display === "none";
// }

var reset = function () {
    guessesLeft = 3;
    guesses = [];
    updateComputerGuess();
    updateGuessesLeft();
    updateGuesses();
};

updateComputerGuess();
document.querySelector("#eyes").style.display = "none";
document.querySelector("#smile").style.display = "none";


document.addEventListener('keydown', function (event) {
    if ((event.code == 'KeyA') || (event.code == 'KeyB') || (event.code == 'KeyC') || (event.code == 'KeyD') || (event.code == 'KeyE')) {
        var userGuess = event.key;

        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        // document.querySelector("#mouthWrap").style.display = "none";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            reset();
        }



        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();

    }else {
        alert("Wrong Key. Please select A, B, C, or D");
    }
});


document.addEventListener('mouseover', function (event) {

    document.getElementById("btnA").onclick = function () {
        userGuess = "a";
        console.log(userGuess);
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnB").onclick = function () {
        userGuess = "b"
        console.log(userGuess);
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnC").onclick = function () {
        userGuess = "c";
        console.log(userGuess);
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnD").onclick = function () {
        userGuess = "d";
        console.log(userGuess);
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnE").onclick = function () {
        userGuess = "e";
        console.log(userGuess);
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();
    };

});
});

       



