let number;
let selectedNumber;
let attemptsNumber;
let totalPrize = 0;
let possiblePrize;
let randomNumber;
let isExit = true;

const count = 3;
const startPrize = 100;
const double = 2;
const stepValue = 4;
const startValue = 8;
const isExitFalse = false;

function play(attemptsNumber, possiblePrize, randomNumber, totalPrize){
    let possiblePrizeCopy = possiblePrize;
    number = Math.floor(Math.random() * randomNumber + 1);

    while(attemptsNumber > 0 && isExit === true){      
        selectedNumber = prompt(
            'Choose the roulette pocket number from 0 to ' + randomNumber + '\n' +
            'Attempts left: ' + attemptsNumber + '\n' +
            'Total prize: ' + totalPrize + '$' + '\n' +
            'Possible prize on current attempt: ' + possiblePrizeCopy + '$');

            selectedNumber = Number(selectedNumber);

            if(number === selectedNumber){
                totalPrize += possiblePrizeCopy;
                isExit = confirm('Congratulation, you won! Your prize is: ' + totalPrize + 
                '$. Do you want to continue?');
                if (isExit === true){
                    play(count, possiblePrize*double, randomNumber + stepValue, totalPrize)
                }
            } else {
                attemptsNumber--;
                possiblePrizeCopy = possiblePrizeCopy / double;
            }   
    }

    if (attemptsNumber === 0 && isExit === true){
        alert('Thank you for your participation. Your prize is: ' + totalPrize + '$.')
        if (confirm('Do you want to play a game?') === true){
            play(count, startPrize, startValue, 0)
        } else {
            isExit = isExitFalse;
        }
    }
}

if (confirm('Do you want to play a game?') === true){
    play(count, startPrize, startValue, 0)
} else {
        alert('You did not become a billionaire, but can.');
      }


