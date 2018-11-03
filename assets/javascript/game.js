     var computerChoices = ["a", "b", "c", "d", "e"];
     var wins = 0;
     var losses = 0;
     var gLeft = 10;
     var guesses = [];
     var key = 
    

     document.addEventListener('keydown', function(event) {
        if ((event.code == 'KeyA') || (event.code == 'KeyB') || (event.code == 'KeyC') || (event.code == 'KeyD') || (event.code == 'KeyE')) { 

     var userGuess = event.key.toUpperCase();
     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     var hiyocaiundai =
     "<p>You chose: " + userGuess + "</p>" +
     "<p>The computer chose: " + computerGuess + "</p>" +
     "<p>wins: " + wins + "</p>" +
     "<p>losses: " + losses + "</p>" + "<p>Guesses left: " + gLeft + "</p>" + "<p>Guesses made: " + guesses + "</p";

     
     
     


     var reset = function() {
        var gLeft = 10;
        var guesses = [];
     }

            if (gLeft < 1) {
                losses++;
                gLeft = 10;
                guesses = [""];
            }
            else if (userGuess === computerGuess) {
                wins++;
                gLeft = 10;
                guesses = [""];
            }else {
                gLeft--;
            }

            
    guesses.push(userGuess);
   
    document.querySelector("#compScreen").innerHTML = userGuess;

    document.querySelector("#Gary").innerHTML = hiyocaiundai;

    }else{
        console.log("wrong key")
    }

     });




