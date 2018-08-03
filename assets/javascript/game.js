     var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
     var wins = 0;
     var losses = 0;
    
     document.onkeyup = function(event) {
     console.log();
     
     var userGuess = event.key;  
     
     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
     var html =
     "<p>You chose: " + userGuess + "</p>" +
     "<p>The computer chose: " + computerGuess + "</p>" +
     "<p>wins: " + wins + "</p>" +
     "<p>losses: " + losses + "</p>";

            if (userGuess === computerGuess) {
                wins++;
            }
            else {
                losses++;
            };

        
        // document.querySelector("#Gary").innerHTML = hiyocaiundai

    
        document.querySelector("#Gary").innerHTML = html;
  }

