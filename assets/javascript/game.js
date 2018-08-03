     var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
     var wins = 0;
     var losses = 0;
     var gLeft = 10;
     var guesses = [];
    
     document.onkeyup = function(event) {
     
     var userGuess = event.key;  
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
            else if (userGuess == computerGuess) {
                wins++;
                gLeft = 10;
                guesses = [""];
            }else {
                gLeft--;
            }

            
            guesses.push(userGuess)  ;
            // document.querySelector("#Gary").innerHTML = hiyocaiundai
    
        
            document.querySelector("#Gary").innerHTML = hiyocaiundai;
     
        }
    
