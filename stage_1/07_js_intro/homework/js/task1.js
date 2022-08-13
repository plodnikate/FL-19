let firstNumber = prompt('Input first number');
let secondNumber = prompt('Input second number');
let isValid = ' ';
let firstNumberCopy = firstNumber;

if(isNaN(firstNumber) || isNaN(secondNumber) || firstNumber > secondNumber) {
    alert('Invalid input data');
}else{
    while(firstNumberCopy < secondNumber-1){
        firstNumberCopy++;
        isValid += firstNumberCopy + ' ';
    }
    alert(
        'First number: '+ firstNumber + '\n' +
        'Second number: ' + secondNumber + '\n' + '\n' +
        'Numbers between :' + isValid);
}