// #1
function calculateSum(arr) {
    let sum = 0;
  for(let i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  return sum;
}

// console.log(calculateSum([1,2,3,4,5])); 

// #2
function isTriangle(a, b, c) {
    if (a*b*c <= 0) {
        return false;
    }

    if (a >= b && a >= c && a < b+c ){
        return true;
    } else if(b >= a && b >= c && b < a+c){
        return true;
    } else if(c >= a && c >= b && c < a+b){
        return true;
    } else {
        return false;
    }
}

// console.log(isTriangle(5,6,7)); 
// console.log(isTriangle(2,9,3)); 

// #3
function isIsogram(word) {
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++){
        for (let j = i+1; j < word.length; j++){
            if(word[i] === word[j]) {
                return false;
              }
        }
    }
    return true;
}


// console.log(isIsogram('Dermatoglyphics')); 
// console.log(isIsogram('abab')); 


// #4
function isPalindrome(word) {
    word = word.toLowerCase();
    if (word === word.split('').reverse().join('')){
        return true;
    }
    return false;
}


// console.log(isPalindrome('Dermatoglyphics')); 
// console.log(isPalindrome('abbabba')); 

// #5
function showFormattedDate(dateObj) {
    let day = dateObj.getDate();
    let month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(dateObj);
    let year = dateObj.getFullYear();
    const newDate = `${day} of ${month}, ${year}`
    return newDate;
}

// console.log(showFormattedDate(new Date('05/12/22'))); 


// #6
const letterCount = (str, letter) => {
    str = str.toLowerCase();
    letter = letter.toLowerCase();
    let letterNumber = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === letter) {
            letterNumber++;
          }
        }
    return letterNumber;
}

// console.log(letterCount('abbaba', 'b'));  


// #7
function countRepetitions(arr) {
    let obj = {};
    
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}

// console.log(countRepetitions(['banana', 'apple', 'banana'])); 

// #8
function calculateNumber(arr) {
    let length = arr.length
    let newNumber = 0;
    let two = 2;
    for(let i = length; i >0; i--){
        newNumber += Math.pow(two, length - i) * arr[i-1]; 
       }
       return newNumber;
}

// console.log(calculateNumber([0, 1, 0, 1])); 
// console.log(calculateNumber([1, 0, 0, 1])); 
