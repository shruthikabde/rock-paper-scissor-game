
// rock paper scissors game
let userScore = 0;
let compScore = 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score"); 
const compScoreDisplay = document.querySelector("#comp-score"); 


const computerChoice = () => {
     const options = ["rock", "paper", "scissors"];
     const randomNumber = Math.floor(Math.random() * 3);
     return options[randomNumber];


}
const drawGame = () => {
     console.log("It's a draw!");
     msg.innerText = "It's a draw!";
     msg.style.backgroundColor ="#081b31"
}

const showWinner=(userWin,userChoice,compChoice)=>{

     if(userWin){
          userScore++;
          userScoreDisplay.innerText = userScore;
          msg.innerText = `You win!  your ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor = "green";
          
     }else{
         compScore++;
          compScoreDisplay.innerText = compScore;
          msg.innerText = `Computer wins! ${compChoice} beats  your ${userChoice}`;
          msg.style.backgroundColor = "red";
     }
}

const playGame = ( userChoice) => {
     
     const compChoice = computerChoice();
     
     if(userChoice === compChoice) {
          drawGame();
     }else{
          let userWin= true;
          // scissors beats paper, paper beats rock, rock beats scissors
          // if user chooses rock, computer chooses paper, user loses
          if (userChoice=== "rock"){
               userWin= compChoice==="paper"?false:true;
          }else if (userChoice=== "paper"){
               // if user chooses paper, computer chooses scissors, user loses
               // if user chooses paper, computer chooses rock, user wins
               userWin= compChoice==="scissors"?false:true;
     }else if (userChoice=== "scissors"){
               // if user chooses scissors, computer chooses rock, user loses
               // if user chooses scissors, computer chooses paper, user wins
               userWin= compChoice==="rock"?false:true;
          }
          showWinner(userWin, userChoice, compChoice);
          if(userWin){
               userScore++;
               console.log("user wins", userScore);
          }else{
               compScore++;
               console.log("computer wins", compScore);
          }

}}
choices.forEach(choice => {
     
     choice.addEventListener("click", () => {
          const userChoice= choice.getAttribute("id");
          console.log("choice was clicked",userChoice);
          playGame(userChoice);

     });
});