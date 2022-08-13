// #1
function extractCurrencyValue(param) {
    const ten = 10;
    const fifteen = 15;
    const one = 1;

    let paramCopy = parseFloat(param);
    if (paramCopy < Math.pow(ten, fifteen) - one) {
        return paramCopy;
    } else {
        return BigInt(parseInt(paramCopy));
    }

}

// console.log(extractCurrencyValue('-120.23 USD'));
// console.log(extractCurrencyValue('1283948234720742 EUR'));


// #2

let object = {
    name: 'Ann',
    age: 16,
    hobbies: undefined,
    degree: null,
    isChild: false,
    isTeen: true,
    isAdult: false
}

function clearObject(obj) {
    for (let key in obj) {
        if (Boolean(obj[key]) === false) {
            delete obj[key];
        }
    }
    return obj;
}

// console.log(clearObject(object));


// #3

function getUnique(param) {
    return Symbol(param);
}

// console.log(getUnique('Test'));


// #4

function countBetweenTwoDays(startDate, endDate) {
    let date1 = new Date(startDate);
    let date2 = new Date(endDate);

    const oneThousand = 1000;
    const oneHourSeconds = 3600;
    const oneDayHours = 24;
    const oneDayMiliseconds = oneThousand * oneHourSeconds * oneDayHours;
    const oneWeekDays = 7;
    const oneMonthDays = 30;

    let DifferenceInTime = date2.getTime() - date1.getTime();

    let DifferenceInDays = DifferenceInTime / oneDayMiliseconds;
    let DifferenceInWeeks = DifferenceInDays / oneWeekDays;
    let DifferenceInMonths = DifferenceInDays / oneMonthDays;

    DifferenceInDays = Math.round(DifferenceInDays);
    DifferenceInWeeks = Math.round(DifferenceInWeeks);
    DifferenceInMonths = Math.round(DifferenceInMonths);

    let result = ' The difference between dates is: ' + DifferenceInDays + ' day(-s), ' + DifferenceInWeeks 
    + ' week(-s), ' + DifferenceInMonths + ' month(-s)';
    return result;
}

// console.log(countBetweenTwoDays('03/22/22', '05/25/22'));


// #5

function filterArray(arr) {
    let arrayWithoutCopy = [];
    let ifAdd;
    for (let key in arr) {
        if (!arr.hasOwnProperty(key)) {
            continue;
        }
        
        ifAdd = true;
        
        for (let index in arrayWithoutCopy) {
            if (arr[key] === arrayWithoutCopy[index]) {
                ifAdd = false;
            }
        }
        if (ifAdd) {
            arrayWithoutCopy.push(arr[key]);
        }
    }
    return arrayWithoutCopy;
}

function filterArrayWithSet(arr) {
    let mySet = new Set(arr);
    return mySet;
}

// console.log(filterArrayWithSet([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); 
// console.log(filterArray([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); 
