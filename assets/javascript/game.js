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
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }



        document.querySelector("#compScreen").innerHTML = userGuess.toUpperCase();

    }else {
        alert("Wrong Key. Please select A, B, C, or D");
    }
});


// document.addEventListener('click', function (event) {
// var keySimA = function () {
//     userGuess = "A";
//     console.log(userGuess)
// };

// var keySimB = function () {
//     userGuess = "B";
//     console.log(userGuess)
// };

// var keySimC = function () {
//     userGuess = "C";
//     console.log(userGuess)
// };

// var keySimD = function () {
//     userGuess = "D";
//     console.log(userGuess)
// };

// var keySimE = function () {
//     userGuess = "E";
//     console.log(userGuess)
// };

document.addEventListener('mouseover', function (event) {

    document.getElementById("btnA").onclick = function () {
        userGuess = "a";
        console.log(userGuess);
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        document.querySelector("#compScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnB").onclick = function () {
        userGuess = "b"
        console.log(userGuess);
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        document.querySelector("#compScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnC").onclick = function () {
        userGuess = "c";
        console.log(userGuess);
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        document.querySelector("#compScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnD").onclick = function () {
        userGuess = "d";
        console.log(userGuess);
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        document.querySelector("#compScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnE").onclick = function () {
        userGuess = "e";
        console.log(userGuess);
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            reset();
        }

        document.querySelector("#compScreen").innerHTML = userGuess.toUpperCase();
    };

});

        // if (document.querySelector("#btnB").click == true) {
        //     keySimB();
        //     console.log(userGuess);
        // };

        // if (document.querySelector("#btnC").click == true) {
        //     keySimC();
        //     console.log(userGuess);
        // };

        // if (document.querySelector("#btnD").click == true) {
        //     keySimD();
        //     console.log(userGuess);
        // };

        // if (document.querySelector("#btnE").click == true) {
        //     keySimE();
        //     console.log(userGuess);
        // }


        // guessesLeft--
        // guesses.push(userGuess.toUpperCase());

        // updateGuessesLeft();
        // updateGuesses();

        // if (userGuess == computerGuess) {
        //     wins++;
        //     document.querySelector("#wins").innerHTML = wins;
        //     document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
        //     reset();
        // }

        // if (guessesLeft == 0) {
        //     losses++;
        //     document.querySelector("#losses").innerHTML = losses;
        //     document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
        //     reset();
        // }

        // document.querySelector("#compScreen").innerHTML = userGuess.toUpperCase();



