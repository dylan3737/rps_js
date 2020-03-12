/*---------------------------------------------------------------------*/
let playerChoice;
let computerChoice;
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
    playerChoice = playerChoice.toLowerCase(); 
    return playerChoice; 
}

function playGame(){
    console.log("Let's play Rock, Paper, Scissors!");
    playerPlay();
    console.log("Player chose " + playerChoice);
    computerPlay();
    console.log("Computer chose " + computerChoice);
    if ((playerChoice == "rock") && (computerChoice == "rock")) {
        return console.log("You both chose rock; it's a tie!");
    }
    else if ((playerChoice == "paper") && (computerChoice == "paper")) {
        return console.log("You both chose paper; it's a tie!");
    }
    else if ((playerChoice == "scissors") && (computerChoice == "scissors")) {
        return console.log("You both chose scissors; it's a tie!")
    }
    else if ((playerChoice == "scissors") && (computerChoice == "rock")) {
        return console.log("Computer chose rock; you lose.")
    }    
    else if ((playerChoice == "scissors") && (computerChoice == "paper")) {
        return console.log("You chose scissors; you won!")
    }
    else if ((playerChoice == "paper") && (computerChoice == "rock")) {
        return console.log("You chose paper; you won!");
    }
    else if ((playerChoice == "paper") && (computerChoice == "scissors")) {
        return console.log("You both chose paper; it's a tie!");
    }
    else if ((playerChoice == "rock") && (computerChoice == "paper")) {
        return console.log("Computer chose paper; you lose.");
    }
    else if ((playerChoice == "rock") && (computerChoice == "scissors")) {
        return console.log("You chose rock; you win!");
    }
}

/*---------------------------------------------------------------------*/
    playGame();

