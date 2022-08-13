function getWeekDay(date) {
	date = new Date(date);
	let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let dayNumber = date.getDay();
	return weekdays[dayNumber];
}

//console.log(getWeekDay(new Date(2020, 9, 22)));
//console.log(getWeekDay(Date.now()));

function getAmountDaysToNewYear() {
	let now = new Date();
	let newYear = new Date(now.getFullYear() + 1, 0, 1);
	let diff = newYear - now;
	const oneThousand = 1000;
	const sixty = 60;
	const tventyFour = 24;
	let oneDay = oneThousand * sixty * sixty * tventyFour;
	let daysToNewYear = Math.floor(diff / oneDay);
	return daysToNewYear;
}

//console.log(getAmountDaysToNewYear());

function getApproveToPass(date) {
	const epochStart = 1970;
	let differensInMs = Date.now() - date.getTime();
	let differens = new Date(differensInMs);
	let differensInYear = differens.getFullYear() - epochStart;
	const eighteen = 18;
	console.log(differensInYear);
	if (differensInYear >= eighteen) {
		return 'Hello adventurer, you may pass!';
	} else if (differensInYear === eighteen - 1) {
		return 'Hello adventurer, you are to yang for this quest wait for few more months!';
	} else {
		let differensTo18 = eighteen - differensInYear;
		return `Hello adventurer, you are to yang for this quest wait for ${differensTo18} years more !`
	}
}

// const birthday17 = new Date(2004, 12, 29); 
// const birthday15 = new Date(2006, 12, 29); 
// const birthday22 = new Date(2000, 9, 22);

// console.log(getApproveToPass(birthday17));
// console.log(getApproveToPass(birthday15));
// console.log(getApproveToPass(birthday22));

const elementP = 'tag="div" class="text" style={color: #aeaeae;} value="Hello World!"';

function transformStringToHtml(str) {
	let tag = str.match(new RegExp('(?<=tag=")[^"]+(?=")', 'g'));
	let value = str.match(new RegExp('(?<=value=")[^"]+(?=")', 'g'));
	let attributes = str.replace(/(tag=".*?")/g, '').replace(/({|})/g, '"').replace(/(value=".*?")/g, '');
	return `<${tag} ${attributes}>${value}</${tag}>`;
}

//console.log(transformStringToHtml(elementP))

function isValidIdentifier(ind) {
	const isId = /^([a-zA-Z_$][a-zA-Z\d_$]*)$/g;
	let id = ind.match(isId);
	id = `${id}`
	if (id === 'null') {
		return false;
	} else {
		return true;
	}
}

// console.log(isValidIdentifier('myVar!')); // false
// console.log(isValidIdentifier('myVar$')); // true
// console.log(isValidIdentifier('myVar_1')); // true
// console.log(isValidIdentifier('1_myVar')); // false
// console.log(isValidIdentifier('?_myVar')); // false

function isValidPassword(password) {
	const checkIt = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/g;
	return checkIt.test(password);

}

// console.log(isValidPassword('agent007'));
// console.log(isValidPassword('AGENT007'))
// console.log(isValidPassword('AgentOOO'))
// console.log(isValidPassword('Age_007'))
// console.log(isValidPassword('Agent007'))

function capitalize(testStr) {
	return testStr.replace(/\b\w/g, function(c) {
		return c.toUpperCase();
	});
}
//console.log(capitalize(testStr));

function bubbleSort(arr) {
	let ifSwap = false;
	let swap;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = swap;
				ifSwap = true;
			}
		}
		if (!ifSwap) {
			break;
		}
	}
	return arr;
}

//console.log(bubbleSort([7,5,2,4,3,9])); 

// const inventory = [
//     { name: 'milk', brand: 'happyCow', price: 2.1, }, 
//     { name: 'chocolate', brand: 'milka', price: 3, }, 
//     { name: 'beer', brand: 'hineken', price: 2.2, }, 
//     { name: 'soda', brand: 'coca-cola', price: 1, }, ];

function sortByItem(obj) {
	const minusOne = -1;
	console.log(obj.array);

	function byField(field) {
		return (a, b) => a[field] > b[field] ? 1 : minusOne;
	}
	for (let i = 0; i < obj.array.length; i++) {
		console.log(obj.array[i][obj.item])
	}
	obj.array.sort(byField(obj.item));
	return obj.array;
}

//sortByItem({item: 'name', array: inventory});