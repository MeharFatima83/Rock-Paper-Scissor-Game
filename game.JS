let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer's random choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Function to handle draw game
const drawGame = () => {
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "#081b31";  // Dark blue background for draw
};

// Function to show the winner (user or computer)
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";  // Green background for win
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";  // Red background for loss
    }
};

// Main function to handle the game logic
const playGame = (userChoice) => {
    console.log("User choice:", userChoice);

    // Generate computer's choice
    const compChoice = genCompChoice();
    console.log("Computer choice:", compChoice);

    // Check for a draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        // Default to user loses (comp wins)
        let userWin = false;

        // Check for user win conditions
        if (userChoice === "rock") {
            if (compChoice === "scissors") {
                userWin = true;  // rock beats scissors
            } else if (compChoice === "paper") {
                userWin = false;  // paper beats rock
            }
        } else if (userChoice === "paper") {
            if (compChoice === "rock") {
                userWin = true;  // paper beats rock
            } else if (compChoice === "scissors") {
                userWin = false;  // scissors beats paper
            }
        } else if (userChoice === "scissors") {
            if (compChoice === "paper") {
                userWin = true;  // scissors beats paper
            } else if (compChoice === "rock") {
                userWin = false;  // rock beats scissors
            }
        }

        // Call showWinner() with the result (userWin = false if the user loses)
        showWinner(userWin, userChoice, compChoice);
    }
};

// Event listeners for each of the game choices (rock, paper, scissors)
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});





