function getComputerChoice() {
	const number = Math.floor(Math.random() * 3);
	if (number === 0)
		return "rock";
	else if (number === 1)
		return "paper";
	else
		return "scissors";
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	//	rock and scissors
	if (playerSelection === "rock" && computerSelection === "scissors")
		return "You Win! Rock beats Scissors!";
	else if (playerSelection === "scissors" && computerSelection === "rock")
		return "You Lose! Rock beats Scissors!";

	//	scissors and paper
	else if (playerSelection === "scissors" && computerSelection === "paper")
		return "You Win! Scissors beat Paper!";
	else if (playerSelection === "paper" && computerSelection === "scissors")
		return "You Lose! Scissors beat Paper!";

	//	paper and rock
	else if (playerSelection === "paper" && computerSelection === "rock")
		return "You Win! Paper beats Rock!";
	else if (playerSelection === "rock" && computerSelection === "paper")
		return "You Lose! Paper beats Rock!";
	
	else
		return "Tie!";
}

// test
// for (let i = 0; i < 10; ++i) {
// 	const playerSelection = getComputerChoice();
// 	const computerSelection = getComputerChoice();
// 	console.log(playerSelection, computerSelection);
// 	console.log(playRound(playerSelection, computerSelection));
// }

function game() {
	let playerWins = 0;
	let computerWins = 0;
	// let possibleSelection = ["rock", "paper", "scissors"];
	
	// for (let i = 0; i < 5; ++i) {
	// 	// get input
	// 	let playerSelection = prompt("enter rock, paper or scissors").toLowerCase();

	// 	// check for bad input
	// 	while (possibleSelection.indexOf(playerSelection) == -1) {
	// 		alert("Bad input!");
	// 		playerSelection = prompt("enter rock, paper or scissors").toLocaleLowerCase();
	// 	}

	// 	let result = playRound(playerSelection, getComputerChoice());
	// 	alert(result);
		
	// 	// calculate score
	// 	if (result.toLowerCase().startsWith("you win!"))
	// 		++playerWins;
	// 	if (result.toLowerCase().startsWith("you lose!"))
	// 		++computerWins;
		
	// 	console.log(playerWins, " : ", computerWins);
	// }
}

function checkValue(e) {
	console.log(this.textContent);
}



const resultDiv = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
const score = document.querySelector("#score")
const defaultResultStyle = score.style;
let playerWins = 0;
let computerWins = 0;

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const result = playRound(button.textContent, getComputerChoice());
		// console.log(result);
		
		resultDiv.textContent = result;

		if (result.toLowerCase().startsWith("you win!"))
			++playerWins;
		if (result.toLowerCase().startsWith("you lose!"))
			++computerWins;

		score.textContent = `Score: ${playerWins} : ${computerWins}`;

		if (computerWins === 5) {
			score.textContent = '';
			resultDiv.textContent = "YOU LOST!";
			resultDiv.style = "color: rgb(255, 25, 25); font-weight:bold";
			playerWins = 0;
			computerWins = 0;
		}
		else if (playerWins === 5) {
			score.textContent = '';
			resultDiv.textContent = "YOU WON!"
			resultDiv.style = "color: rgb(0, 255, 15); font-weight:bold";
			playerWins = 0;
			computerWins = 0;
		}
		
		else {
			resultDiv.style = defaultResultStyle;
		}
	});
})