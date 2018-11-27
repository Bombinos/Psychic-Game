document.addEventListener("DOMContentLoaded", function(event) {

var computerChoices = ["a", "b", "c", "d", "e"];
var wins = 0;
var losses = 0;
var guessesLeft = 3;
var guesses = [];
var computerGuess = "";
var userGuess = "";
var bgMusic = document.createElement("audio");
bgMusic.setAttribute('src', 'assets/audio/xfilestheme.mp3');
var wooHoo = document.createElement("audio");
wooHoo.setAttribute('src', 'assets/audio/ding.mp3');
var ooh = document.createElement("audio");
ooh.setAttribute('src', 'assets/audio/ooh.mp3');


var load = function() {
    bgMusic.volume = 0.3;
    wooHoo.load();
    ooh.load();
}

load();

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
document.querySelector("#eyes").style.display = "none";
document.querySelector("#smile").style.display = "none";
document.querySelector("#eyesLose").style.display = "none";
document.querySelector("#frown").style.display = "none";




document.addEventListener('keydown', function (event) {
    if ((event.code == 'KeyA') || (event.code == 'KeyB') || (event.code == 'KeyC') || (event.code == 'KeyD') || (event.code == 'KeyE')) {
        var userGuess = event.key;
        load();
        bgMusic.play();
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        document.querySelector("#eyesLose").style.display = "none";
        document.querySelector("#frown").style.display = "none";
        document.querySelector("#compScreen").style.color = "black";
        document.querySelector("#compScreen").innerHTML = "?";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            wooHoo.play();
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "limegreen";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            ooh.play();
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "red";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyesLose").style.display = "block";
            document.querySelector("#frown").style.display = "block";
            reset();
        }



        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();

    }
});


document.addEventListener('mouseover', function (event) {
    
    
    document.getElementById("btnA").onclick = function () {
        userGuess = "a";
        console.log(userGuess);
        load();
        bgMusic.play();
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        document.querySelector("#eyesLose").style.display = "none";
        document.querySelector("#frown").style.display = "none";
        document.querySelector("#compScreen").style.color = "black";
        document.querySelector("#compScreen").innerHTML = "?";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            wooHoo.play();
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "limegreen";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            ooh.play();
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "red";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyesLose").style.display = "block";
            document.querySelector("#frown").style.display = "block";
            reset();
        }

        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnB").onclick = function () {
        userGuess = "b"
        console.log(userGuess);
        load();
        bgMusic.play();
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        document.querySelector("#eyesLose").style.display = "none";
        document.querySelector("#frown").style.display = "none";
        document.querySelector("#compScreen").style.color = "black";
        document.querySelector("#compScreen").innerHTML = "?";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            wooHoo.play();
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "limegreen";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            ooh.play();
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "red";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyesLose").style.display = "block";
            document.querySelector("#frown").style.display = "block";
            reset();
        }

        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnC").onclick = function () {
        userGuess = "c";
        console.log(userGuess);
        load();
        bgMusic.play();
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        document.querySelector("#eyesLose").style.display = "none";
        document.querySelector("#frown").style.display = "none";
        document.querySelector("#compScreen").style.color = "black";
        document.querySelector("#compScreen").innerHTML = "?";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            wooHoo.play();
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "limegreen";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            ooh.play();
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "red";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyesLose").style.display = "block";
            document.querySelector("#frown").style.display = "block";
            reset();
        }

        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnD").onclick = function () {
        userGuess = "d";
        console.log(userGuess);
        load();
        bgMusic.play();
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        document.querySelector("#eyesLose").style.display = "none";
        document.querySelector("#frown").style.display = "none";
        document.querySelector("#compScreen").style.color = "black";
        document.querySelector("#compScreen").innerHTML = "?";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            wooHoo.play();
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "limegreen";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            ooh.play();
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "red";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyesLose").style.display = "block";
            document.querySelector("#frown").style.display = "block";
            reset();
        }

        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();
    };

    document.getElementById("btnE").onclick = function () {
        userGuess = "e";
        console.log(userGuess);
        load();
        bgMusic.play();
        document.querySelector("#eyes").style.display = "none";
        document.querySelector("#smile").style.display = "none";
        document.querySelector("#eyesLose").style.display = "none";
        document.querySelector("#frown").style.display = "none";
        document.querySelector("#compScreen").style.color = "black";
        document.querySelector("#compScreen").innerHTML = "?";
        guessesLeft--
        guesses.push(userGuess.toUpperCase());

        updateGuessesLeft();
        updateGuesses();

        if (userGuess == computerGuess) {
            wins++;
            wooHoo.play();
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "limegreen";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyes").style.display = "block";
            document.querySelector("#smile").style.display = "block";
            reset();
        }

        if (guessesLeft == 0) {
            losses++;
            ooh.play();
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#computerGuess").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#compScreen").style.color = "red";
            document.querySelector("#compScreen").innerHTML = computerGuess.toUpperCase();
            document.querySelector("#eyesLose").style.display = "block";
            document.querySelector("#frown").style.display = "block";
            reset();
        }

        document.querySelector("#cloudScreen").innerHTML = userGuess.toUpperCase();
    };

});
});

       



