import { dictionary } from './dictionary.js';

let number = Math.floor(Math.random() * dictionary.length);
console.log(dictionary[number]);

console.log(dictionary.includes('вдоcsва'));

let mas=[];
let word=[];
let i = 0;
let endLoop = 5;
const five = 5;
const trirty = 30;

function check(){
    let isCorrect = 0;
    for(i; i < endLoop; i++){
        mas[i] = document.getElementById(`input-${i}`).value;
    }
    i-=five;
    for(let k = 0; k<five; k++){
        word[k] = mas[i];
        i++;
    }
    console.log(word)
    if(dictionary.includes(word.join('')) === true){
            isCorrect = 1;
            console.log(isCorrect);
        }
    console.log(isCorrect);
    if (isCorrect === 1){
        let allRight = 0;
        i = i-five;
        let k = 0;
        let isInWord = 0;
        for(i; i < endLoop; i++){
            document.getElementById(`input-${i}`).style.backgroundColor = 'rgb(127, 135, 150)';
            for(let j = 0; j<five; j++){
                if(mas[i] === dictionary[number][j]){
                    isInWord = 1;
                    
                }
                console.log(mas[i]+' '+dictionary[number][j] + ' '+ isInWord);
            }
            if(isInWord === 1){
                document.getElementById(`input-${i}`).style.backgroundColor = 'rgb(226, 212, 132';
            }

            if( mas[i] === dictionary[number][k]){
                document.getElementById(`input-${i}`).style.backgroundColor = 'rgb(152, 185, 162)';
                allRight ++;
            }
            isInWord = 0;
            k++;
        } 
        if(allRight === five){
            alert('You won');
            return;
        }
        if(i === trirty){
            alert('Game over');
            return;
        }
        endLoop +=five;
    }else{
        alert('Not in word list');
        i-=five;
        for(i; i < endLoop; i++){
           document.getElementById(`input-${i}`).value = '';
        }
        i-=five;
    }
    
}

function reloadPage(){
    document.location.reload();
}

document.getElementById('check').onclick = check;
document.getElementById('reset').onclick = reloadPage;