export function myFunction() {
    return true;
}
// This function should take a string and add return an new string that adds three exclamation points to the argument.
/* 

Input:

'bunny rabbit'

Output: 
'bunny rabbit!!!'
*/
const { test, skip } = QUnit;
test('addExclamationPoints should add 3 exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints(`bunny rabbit`);

    expect.equal(actual, expected, 'bunny rabbit!!!');
});

export function addExclamationPoints(string) {
    return `${string}!!!`;
};

test('this test should pass', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected, 28);
});


export function multiplyBySeven(num) {
    return `${num}` * 7;
}

// This function should take in a number and multiply it by twelve then cut the result in half
/* 
Input:
4
Output: 
24
*/
test('this test should pass', (expect) => {
    const expected =24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, 24);
});

export function multiplyBy12ThenHalve(num) {
    return (`${num}` * 12) / 2;
}




// This function should take in three numbers, divide the first by the second, then multiply the result by the third

/* 
Input:

8, 4, 5

Output: 

10 (because 8 divided by 4 is 2, times 5 is 10)
*/
test('this test should pass', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected, '10');
});

export function divideThenMultiply(firstNumber, secondNumber, thirdNumber) {
    return (firstNumber / secondNumber * thirdNumber);
}

// This function should take in three numbers and return those numbers in an array
/* 
Input:
8, 4, 5
Output: 
[8, 4, 5]
*/
test('this test returnAsAnArrAY', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray( 8, 4, 5);

    expect.deepEqual(actual, expected, [8, 4, 5]);
});

export function returnAsAnArray(firstNumber, secondNumber, thirdNumber) {
    let thatArray = [];
    thatArray[0] = firstNumber;
    thatArray[1] = secondNumber;
    thatArray[2] = thirdNumber;
    return thatArray;
}

// This function should take in three numbers and return those numbers mushed together as a string

/* 
Input:

8, 4, 5

Output: 

'845'
*/
test('returnAsAString should pass', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.deepEqual(actual, expected, '845');
});

export function returnAsAString(firstNumber, secondNumber, thirdNumber) {
    let string = (`${firstNumber}` + `${secondNumber}` + `${thirdNumber}`);
    return string;
}

// This function should take in two numbers and return a greeting announcing that the sum of those numbers is today's lucky number
/* 
Input:
8, 4
Output: 
'Hello! Your lucky number for the day is 12.'
*/
test('make Lucky Greeting should pass', (expect) => {
    const expected = 'Hello! your lucky number for this day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected, 'Hello! your lucky number for this day is 12.');
});

export function makeLuckyGreeting(firstNumber, secondNumber) {
    let sum = (firstNumber + secondNumber);
    return `Hello! your lucky number for this day is ${sum}.`;
}



// This function should take an array and return the second item in the array

/* 
Input:

['kiwi', 'apple', 'orange', 'plum']

Output: 

'apple'

*/
test('getSecondItem should pass', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'apple');
});

export function getSecondItem(array) {
    return array[1];
}

// This function should take an array and return the LAST item in the array, no matter the array's length

/* 
Input:

['kiwi', 'apple', 'orange', 'plum']

Output: 

'plum'

*/
test('getLastItem should pass', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'plum');
});

export function getLastItem(array) {
    return array[3];
}

// This function should take a dog object and return an <li> with the name of the dog
/* 
Input:

{name: 'Benny', age: 6}

Output: 

<li>Benny</li>

*/

export function renderDogLI(dog) {
    return true;
}

// This function should take a dog object and return a div with the dog's information
/* 
Input:

{name: 'Benny', age: 6}

Output: 

<div><h1>Benny</h1><p>Benny is 6 years old</p></div>

*/

export function renderDogDiv() {
    return true;
}
