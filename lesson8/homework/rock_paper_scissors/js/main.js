// item
//rock, paper, scissors

// number
//random number
//var random {
//	random;}
	// body...}

//game parameter if (true) {};then

// score . display score

var human = document.getElementById("humanScore");
var computer = document.getElementById("computerScore");
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var statusMsg = document.getElementById("status");

// Get user input
rockBtn.onclick = rockIsClicked;
paperBtn.onclick = paperIsClicked;
scissorsBtn.onclick = scissorsIsClicked;

function rockIsClicked() {
	userInput = "rock";
	compare(userInput, getRobotInput());
}

function paperIsCLicked() {
	userInput = "paper";
	compare(userInput, getRobotInput());
}

function scissorsIsClicked() {
	userInput = "scissors";
	compare(userInput, getRobotInput());
}


// Get robot input
function getRobotInput(){
 var choices = {
	2:"paper"
	3:"scissors"
	1:"rock"
};

var randomNumber = Math.ceil(Math.random()*3);

}

// Compare the inputs
function compare(userInput, computerInput) {
	console.log("user: "+ userInput);
	console.log("computer:" + computerInput);
if (
	(userInput == "scissors" && computerInput == "paper") ||
	(userInput == "rock" && computerInput == "scissors") ||
    (userInput == "paper" && computerInput == "rock")
) {
console.log("User win");	
} else if (
	(computerInput == "scissors" && userInput == "paper") ||
    (computerInput == "paper" && userInput == "rock") ||
	(cocmputerInput == "rock" && userInput == "scissors")
	) {
	console.log("User lose");
} else {
	console.log("Draw")
}
}



