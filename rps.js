/*---------------------------------------------------------------------*/
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
/*---------------------------------------------------------------------*/


function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let temp = Math.random()*3; 
    if (temp < 1) {
        computerChoice = options[0];
    }
    else if (temp > 1 && temp < 2) {
        computerChoice = options[1];
    }
    else {
        computerChoice = options[2];
    }
    return computerChoice
}

function playerPlay() {
    playerChoice = prompt("Would you like to pick Rock, Paper, or Scissors?");
    if ((playerChoice == null) || (playerChoice == "")) {
        return console.log("Please enter a value of either Rock, Paper, or Scissors.");
    }
    playerChoice = playerChoice.toLowerCase(); 
    return playerChoice; 
}

function playGame(){
    console.log("Let's play Rock, Paper, Scissors!");

    playerPlay();
    computerPlay();

    console.log("Player chose " + playerChoice);
    console.log("Computer chose " + computerChoice);


    if ((playerChoice == "rock") && (computerChoice == "rock")) {
        return console.log("You both chose rock; it's a tie!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }
    else if ((playerChoice == "paper") && (computerChoice == "paper")) {
        return console.log("You both chose paper; it's a tie!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }
    else if ((playerChoice == "scissors") && (computerChoice == "scissors")) {
        return console.log("You both chose scissors; it's a tie!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".")
    }  
    else if ((playerChoice == "scissors") && (computerChoice == "paper")) {
        playerScore++;
        return console.log("You chose scissors; you won the round!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".")        
    }
    else if ((playerChoice == "paper") && (computerChoice == "rock")) {
        playerScore++;
        return console.log("You chose paper; you won the round!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }
    else if ((playerChoice == "rock") && (computerChoice == "scissors")) {
        playerScore++;
        return console.log("You chose rock; you won the round!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }    
    else if ((playerChoice == "paper") && (computerChoice == "scissors")) {
        computerScore++;
        return console.log("Computer chose scissors; you lost the round." + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }
    else if ((playerChoice == "rock") && (computerChoice == "paper")) {
        computerScore++;
        return console.log("Computer chose paper; you lost the round." + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }
    else if ((playerChoice == "scissors") && (computerChoice == "rock")) {
        computerScore++;
        return console.log("Computer chose rock; you lost the round." + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".")
    }      
}

/*---------------------------------------------------------------------*/

function game() {
    let winner = false; 
    do {
        if (playerScore == 5){
            winner = true;
            return console.log("You won! The game is now over.")
        }
        else if (computerScore == 5) {
            winner = true;
            return console.log("The computer got 5 first, therefore you lost.")
        }
        playGame();
    } while (winner == false);
}
game();


//computerPlay() //playerPlay() //playGame() //game()
//playerChoice && computerChoice