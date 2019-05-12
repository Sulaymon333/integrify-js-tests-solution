// 1. make a growing tree like this #
/* 
  ##
  ###
  ####
  #####
  ######
  #######
*/

const triangleTree = num => {
  let tree = '';
  let i = 0;
  while (i < num) {
    tree += '#';
    console.log(tree);
    i++;
  }
};

// triangleTree(7);

// method two
const triangleTree2 = num => {
  let tree = '';
  for (let i = 0; i < num; i++) {
    tree += '#';
    console.log(tree);
  }
};
// triangleTree2(7);

// 2. FizzBuzz Challenge
const fizzBuzz = () => {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(num, 'db3&5', 'FizzBuzz');
    } else if (num % 3 === 0) {
      console.log(num, 'db3', 'Fizz');
    } else if (num % 5 === 0) {
      console.log(num, 'db5', 'Buzz');
    }
  }
};
// fizzBuzz();

// 3. Find Max of a number without Math.max() method

const findMax = (...items) => {
  items.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return items[items.length - 1];
};
// console.log(findMax(0, 10, 5));
// console.log(findMax(0, -10, -2));

// 4. Reverse an array without reverse() method
const reverseArray = arr => {
  const reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return reverseArray;
};
console.log(reverseArray(['A', 'B', 'C']));
console.log(reverseArray(['1', '2', '3']));

// 5. Modify an index of an array
const modifyArray = arr => {
  if (arr.length < 5) {
    return 'Not found';
  }
  arr[4] = arr[4].toUpperCase();
  return arr;
};
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
// →["Avocado", "Tomato", "Potato","Mango", "LEMON", "Carrot"]
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));
// →["Google", "Facebook","Apple", "Amazon","MICROSOFT",  "IBM"]
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));
// →"Not Found"

// 6. Generate 7 random unique numbers between 0-9
const sevenRandomNumbers = () => {
  const sevenUnique = [];
  let n = 7;
  while (n > 0) {
    const randomNumber = Math.floor(Math.random() * 9);
    if (sevenUnique.indexOf(randomNumber) === -1) {
      sevenUnique.push(randomNumber);
      n--;
    }
  }
  return sevenUnique;
};
console.log(sevenRandomNumbers());

// 7. function that accepts any number of arguments and return its sum
const sum = (...items) => {
  let total = 0;
  for (element of items) {
    total += element;
  }
  return total;
};
console.log(sum(1, 3, 5));
// →9

// 8. remove middle Item and replace it with three items
const removeMiddleItem = (arr, ...items) => {
  let middleIndex;
  if (arr.length % 2 === 0) {
    middleIndex = arr.length / 2 - 1;
    arr.splice(middleIndex, 2, ...items);
  } else {
    console.log(arr.length % 2 !== 0);
    middleIndex = Math.floor(arr.length / 2);
    arr.splice(middleIndex, 1, ...items);
  }
  return arr;
};

console.log(removeMiddleItem([1, 2, 3], 4, 5, 6));
// →[1,4,5,6,3]
console.log(removeMiddleItem([1, 2, 3, 4], 4, 5, 6));
// →[1,4,5,6,4]

// 9. Extra number from text and make a calculation with it

const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const calcFromText = text => {
  let total = 0;
  const pattern = new RegExp(/\d{1,}/, 'g');
  const matches = text.match(pattern) || [];
  for (item of matches) {
    if (item === '5000') {
      item = item * 12;
      total += Number(item);
    } else if (item === '15000') {
      item = item * 12;
      total += Number(item);
    } else {
      total += Number(item);
    }
  }
  return total;
};

console.log(calcFromText(text));
// →250000

// 10. Conditional output based on two strings inputs. checking if the first strings ends with the second string

const stringEndingMatch = (string1, string2) => {
  let matchFlag = true;
  if (string1.slice(-string2.length) !== string2) {
    matchFlag = false;
  }
  return matchFlag;
};
console.log(stringEndingMatch('integrity', 'ity'));
// →true
console.log(stringEndingMatch('integration', 'tio'));
// →false
console.log(stringEndingMatch('connection', 'sion'));
// →false
console.log(stringEndingMatch('connection', 'tion'));
// →true
