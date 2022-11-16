function GetComputerChoice() {
	const number = Math.floor(Math.random() * 3 + 1);
	if (number === 1)
		return "rock";
	else if (number === 2)
		return "paper";
	else
		return "scissors";
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	
	console.log(playerSelection, computerSelection)
	
	// rock and scissors
	if (playerSelection === "rock" && computerSelection === "scissors")
		console.log("You Win! Rock beats Scissors!");
	else if (playerSelection === "scissors" && computerSelection === "rock")
		console.log("You Lose! Rock beats Scissors!");

	// scissors and paper
	else if (playerSelection === "scissors" && computerSelection === "paper")
		console.log("You Win! Scissors beat Paper!");
	else if (playerSelection === "paper" && computerSelection === "scissors")
		console.log("You Lose! Scissors beat Paper!");

	// paper and rock
	else if (playerSelection === "paper" && computerSelection === "rock")
		console.log("You Win! Paper beats Rock!");
	else if (playerSelection === "rock" && computerSelection === "paper")
		console.log("You Lose! Paper beats Rock!");
	
	else
		console.log("Tie!");
}
