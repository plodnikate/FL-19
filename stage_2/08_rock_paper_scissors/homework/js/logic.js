const rock = document.getElementsByClassName('rock')[0];
const paper = document.getElementsByClassName('paper')[0];
const scissors = document.getElementsByClassName('scissors')[0];
const rounds = document.getElementsByClassName('round-information')[0];
let yourWin = 0;
let yourLose = 0;
let roundCounter = 1;
let userChoice;
let computerChoice;
let text;
const choices = ['Rock', 'Paper', 'Scissors']
choiceArray = [rock, paper, scissors];

const newRound = (text) =>{
    let newRound = document.createElement('div');
    newRound.innerHTML = text;
    rounds.appendChild(newRound);
}

const game = (event) => {
    userChoice = event.target.innerHTML;
    computerChoiceTime(userChoice);
    isWin(userChoice, computerChoice);
    roundCounter++;

    if(yourWin == 3){
        text = 'You winner!';
        newRound(text);
        gameOver();
    }
    if(yourLose == 3){
        text = 'You loser!';
        newRound(text);
        gameOver();
    }
}

const gameOver = () => {
    choiceArray.map(thing => thing.removeEventListener('click', game));
}

choiceArray.map(thing => thing.addEventListener('click', game));

function computerChoiceTime(userChoice){
    let maybeComputerChoise = choices[Math.floor(Math.random() * 3)];
    if (maybeComputerChoise == userChoice){
        computerChoiceTime(userChoice)
    }else{
    computerChoice = maybeComputerChoise;
    }
}



function isWin(userChoice, computerChoice){
    switch (userChoice) {
        case 'Rock':
          if(computerChoice == choices[2]){
            text = `Round ${roundCounter}, Rock vs. Scissors, You've WON!`;
            newRound(text);
            yourWin++;
          }else{
            text = `Round ${roundCounter}, Rock vs. Paper, You've LOST!`;
            newRound(text);
            yourLose++;
          }
          break;
        case 'Paper':
            if(computerChoice == choices[1]){
                text = `Round ${roundCounter}, Paper vs. Rock, You've WON!`;
                newRound(text);
                yourWin++;
              }else{
                text = `Round ${roundCounter}, Paper vs. Scissors, You've LOST!`;
                newRound(text);
                yourLose++;
              }
          break;
        case 'Scissors':
            if(computerChoice == choices[0]){
                text = `Round ${roundCounter}, Scissors vs. Paper, You've WON!`;
                newRound(text);
                yourWin++;
              }else{
                text = `Round ${roundCounter}, Scissors vs. Rock, You've LOST!`;
                newRound(text);
                yourLose++;
              }
          break;
      }
}




