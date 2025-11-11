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
    playerChoice = prompt("Would you like to pick Rock, Paper, or Scissors? ('q' to quit)");
    if ((playerChoice == null) || (playerChoice == "")) {
        return console.log("Please enter a value of either Rock, Paper, or Scissors.");
    }
    playerChoice = playerChoice.toLowerCase(); 
    return playerChoice; 
}

function playRound(playerChoice){
    console.log("Let's play Rock, Paper, Scissors!");

    // playerPlay();
    var computerChoice;
    computerChoice = computerPlay();

    if ((playerChoice == null) || (playerChoice == "")) {
        return;
    }

    console.log("Player chose " + playerChoice);
    console.log("Computer chose " + computerChoice);


    if ((playerChoice == "rock") && (computerChoice == "rock")) {
        console.log("You both chose rock; it's a tie!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }
    else if ((playerChoice == "paper") && (computerChoice == "paper")) {
        console.log("You both chose paper; it's a tie!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }
    else if ((playerChoice == "scissors") && (computerChoice == "scissors")) {
        console.log("You both chose scissors; it's a tie!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }  
    else if ((playerChoice == "scissors") && (computerChoice == "paper")) {
        playerScore++;
        console.log("You chose scissors; you won the round!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");        
    }
    else if ((playerChoice == "paper") && (computerChoice == "rock")) {
        playerScore++;
        console.log("You chose paper; you won the round!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }
    else if ((playerChoice == "rock") && (computerChoice == "scissors")) {
        playerScore++;
        console.log("You chose rock; you won the round!" + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }    
    else if ((playerChoice == "paper") && (computerChoice == "scissors")) {
        computerScore++;
        console.log("Computer chose scissors; you lost the round." + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }
    else if ((playerChoice == "rock") && (computerChoice == "paper")) {
        computerScore++;
        console.log("Computer chose paper; you lost the round." + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    }
    else if ((playerChoice == "scissors") && (computerChoice == "rock")) {
        computerScore++;
        console.log("Computer chose rock; you lost the round." + "\nPlayer Score: " + playerScore + ". Computer Score: " + computerScore + ".");
    } 
    gameEndCheck()     
}

/*---------------------------------------------------------------------*/

function gameEndCheck() {
    if (playerScore == 5){
        console.log(`Player has won! Player score is ${playerScore} and Computer score is ${computerScore}`)
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore == 5) {
        console.log(`Computer has won! Player score is ${playerScore} and Computer score is ${computerScore}`)
        playerScore = 0
        computerScore = 0
    }
    else if (playerChoice == "q") {
        return console.log("You have ended the game.");
    }
}
// game();


// computerPlay() //playerPlay() //playGame() //game()
// playerChoice && computerChoice


/*---------------------------------------------------------------------*/

// 1. Get references to the buttons
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

// 2. Add event listeners to each button
rockButton.addEventListener('click', function() {
    // 3. Call playRound with the correct playerSelection
    playRound('rock');
});

paperButton.addEventListener('click', function() {
    playRound('paper');
});

scissorsButton.addEventListener('click', function() {
    playRound('scissors');
});

/*---------------------------------------------------------------------*/