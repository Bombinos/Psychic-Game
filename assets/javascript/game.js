     var computerChoices = ["a", "b", "c", "d", "e"];
     var wins = 0;
     var losses = 0;
     var gsLeft = 2;
     var guesses = [];
     var computerGuess = null;

     var updateComputerGuess = function() {
         computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
     };

     var reset = function() {
         gsLeft = 2;
         guesses = [];
         updateComputerGuess();
        };
    
        updateComputerGuess();

document.addEventListener('keydown', function (event) {
    if ((event.code == 'KeyA') || (event.code == 'KeyB') || (event.code == 'KeyC') || (event.code == 'KeyD') || (event.code == 'KeyE')) {
        var userGuess = event.key;
        
        

        if (userGuess == computerGuess) {
            wins++;
            reset();
        }

        if (gsLeft == 0) {
            losses++;
            reset();
        }

        gsLeft--
        guesses.push(userGuess);

        document.querySelector("#compScreen").innerHTML = userGuess.toUpperCase();

        // document.querySelector("#Gary").innerHTML = hiyocaiundai;

    } else {
        console.log("wrong key")
    }

});

// var hiyocaiundai =
//             "<p>You chose: " + userGuess + "</p>" +
//             "<p>The computer chose: " + computerGuess + "</p>" +
//             "<p>wins: " + wins + "</p>" +
//             "<p>losses: " + losses + "</p>" + "<p>Guesses left: " + gsLeft + "</p>" + "<p>Guesses made: " + guesses + "</p";




