function getMaxEvenElement(arr){
    return arr.map(x => +x).reduce((prev, item) => {
        if(item%2 === 0 && item > prev) { 
            return item 
        } else { 
            return prev 
        }
    })
}
const arr = ['1', '2', '10', '5', '8'];
console.log(getMaxEvenElement(arr));

let a = 3;
let b = 5;
[a,b] = [b,a];
console.log(a)
console.log(b)

function getValue(smt){
    return smt ?? '-';
}
console.log(getValue(null)) 
console.log(getValue('null')) 
console.log(getValue(1)) 

function getObjFromArry(arrOfArayOfArrays){
    return Object.fromEntries(arrOfArayOfArrays)
}
const arr1 = [ ['name', 'dan'], ['age', '21'], ['city', 'Lviv'] ];
console.log(getObjFromArry(arr1))

function uniqueId(obj){
    return {...obj, id: Symbol() }
  }
const obj1 = {name:'nik'}

const object1 = {
    name:'willow',
    details:{
        id:1,
        age:47,
        university:'LNU'
    }
}

function getRegroupedObj(oldObj){
    const {details:{id}, details:{age}, details:{university}, name} = oldObj;
    return {university:university, user:{age:age, firstName:name, id:id}}

}
console.log(getRegroupedObj(object1));

const arr3 = [2, 4, 6, 6, 1]
function getArraysWithUniqueElements(arr){
    return [...new Set(arr)];
}
console.log(getArraysWithUniqueElements(arr3))

let n = '1234567890'
function hideNumber(phoneNumber){
    return phoneNumber.slice(6,10).padStart(10,'*');
}
console.log(hideNumber(n))

function add(a,b) {
    if(!a) { 
        throw new Error('a is required'); 
    }
    if(!b) { 
        throw new Error('a is required'); 
    }
    return a+b;
  }  

add()

function* generateIterableSequence() {
    yield 'I';
    yield 'Love';
    yield 'EPAM';
    return 'I Love EPAM';
  }
  
let generator = generateIterableSequence();
  
for(let value of generator) {
    console.log(value); 
}



