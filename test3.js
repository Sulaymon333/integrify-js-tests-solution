// 1. word checker
const paragraph =
  'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

//Method one
const wordChecker = (paragraph, wrd) => {
  paragraph = paragraph.split(' ');
  let count = 0;
  // paragraph.forEach(word => {
  //   if (word.toLowerCase().includes(wrd.toLowerCase())) {
  //     count++;
  //   }
  // });

  for (const word of paragraph) {
    if (word.toLowerCase().includes(wrd.toLowerCase())) {
      count++;
    }
  }

  return count;
};
console.log(wordChecker(paragraph, 'love'));

//Method two
const wordChecker2 = (paragraph, wrd) => {
  const regexPattern = new RegExp(wrd, 'gi');
  const matches = paragraph.match(regexPattern) || [];
  return matches.length;
};
console.log(wordChecker2(paragraph, 'love'));

// 2. data type checker
const checkDataTypes = arr => {
  const dataTypes = [];
  for (const data of arr) {
    dataTypes.push(typeof data);
  }
  return dataTypes;
};
const arr = ['Asabeneh', 100, true, null, undefined, { job: 'teaching' }];
console.log(checkDataTypes(arr));

// 3. filter age greater than 18
const ages = [35, 30, 17, 18, 15, 22, 16, 20];
const agesGreaterEighteen = ages => {
  const ageGreater18 = [];
  for (const age of ages) {
    if (age > 18) {
      ageGreater18.push(age);
    }
  }
  return ageGreater18;
};
console.log(agesGreaterEighteen(ages));

// 4. Average age of a group
const averageAge = ages => {
  let sum = 0;
  for (const age of ages) {
    sum += age;
  }
  return Math.round(sum / ages.length);
};
console.log(averageAge(ages));

// 5. remove item(s) from middle and replace with another item(s)
const products = ['Milk', 'Coffee', 'Tea', 'Honey', 'Meat', 'Cabage'];
const removeMiddleItem = (arr, ...items) => {
  let middleIndex;
  if (arr.length % 2 === 0) {
    middleIndex = arr.length / 2 - 1;
    arr.splice(middleIndex, 2, ...items);
  } else {
    middleIndex = Math.floor(arr.length / 2);
    console.log(middleIndex);
    arr.splice(middleIndex, 1, ...items);
  }
  return arr;
};
console.log(removeMiddleItem(products, 'banana', 'igba'));

// 6. generate random Finnish car plate number
const genCarPlateNum = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  let lettersPart = '';
  let numbersPart = '';
  for (let i = 0; i < 3; i++) {
    // const randomLetters = letters.charAt(Math.floor(Math.random() * letters.length));
    // lettersPart += randomLetters;
    // const randomNumbers = numbers.charAt(Math.floor(Math.random() * numbers.length));
    // numbersPart += randomNumbers;

    // Method two
    let numIndex = Math.floor(Math.random() * letters.length);
    let letterIndex = Math.floor(Math.random() * numbers.length);

    lettersPart += letters[numIndex];
    numbersPart += numbers[letterIndex];
  }
  return `${lettersPart}-${numbersPart}`;
};

console.log(genCarPlateNum());

// 7. CRUD for a shopping cart
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add product
const addProduct = (shoppingCart, product) => {
  shoppingCart.push(product);
  return shoppingCart;
};
console.log(addProduct(shoppingCart, 'Sugar'));

// Edit product
const editProduct = (shoppingCart, index, product) => {
  // shoppingCart.splice(index, 1, product);

  // Method two
  shoppingCart[index] = product;
  return shoppingCart;
};
console.log(editProduct(shoppingCart, 1, 'Banana'));

// Remove product
const removeProduct = (shoppingCart, index) => {
  shoppingCart.splice(index, 1);
  return shoppingCart;
};
console.log(removeProduct(shoppingCart, 0));

// 8. Generate random Finnish social security number
const genSocialSecurityNum = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  let year = Math.floor(Math.random() * 2019);
  let month = Math.floor(Math.random() * 12) + 1;
  let date = Math.floor(Math.random() * 31) + 1;

  if (date < 10) date = '0' + date;
  if (month < 10) month = '0' + month;
  if (year > 100) {
    year = year.toString().slice(-2);
  } else if (year < 10) {
    year = '0' + year;
  }

  let numbersSuffix = '';
  for (let i = 0; i < 3; i++) {
    const numIndex = Math.floor(Math.random() * numbers.length);
    numbersSuffix += numbers[numIndex];
  }

  const letterIndex = Math.floor(Math.random() * letters.length);
  const letter = letters[letterIndex];

  return `${date}${month}${year}-${numbersSuffix}${letter}`;
};
console.log(genSocialSecurityNum());

// 9. CRUD for a TODO App
const todoList = [
  {
    task: 'Prepare JS Test',
    time: '4/3/2019 8:30',
    completed: true
  },
  {
    task: 'Give JS Test',
    time: '4/3/2019 10:00',
    completed: false
  },
  {
    task: 'Assess Test Result',
    time: '4/3/2019 1:00',
    completed: false
  }
];

const currentTime = () => {
  const now = new Date().toLocaleString();
  return now.replace(',', '').slice(0, -6);
};

// Add task
const addTask = task => {
  const time = currentTime();
  completed = false;
  const newTask = { task, time, completed };
  todoList.push(newTask);
};
addTask('Complete this test');
console.log(todoList);

// Edit task
const editTask = (index, task) => {
  todoList[index].task = task;
};
editTask(2, 'My name');
console.log(todoList);

// Remove task
const removeTask = index => {
  todoList.splice(index, 1);
};
removeTask(1);
console.log(todoList);

// Toggle task
const toggleTask = (index, task) => {
  todoList[index].completed = !todoList[index].completed;
};
toggleTask(2);
console.log(todoList);

// Toggle All
const toggleAllTasks = arr => {
  for (const task of arr) {
    task.completed = !task.completed;
  }
};
// toggleAllTasks(todoList);
// console.log(todoList);

const toggleAll2 = arr => {
  let completedTodos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].completed) {
      completedTodos++;
    }
    if (completedTodos === arr.length) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].completed = !arr[i].completed;
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        arr[i].completed = true;
      }
    }
  }
  return arr;
};
console.log(toggleAll2(todoList));
console.log(todoList);

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   toggleAll2(todoList);
// });

// Remove all tasks
const removeAllTasks = arr => {
  arr = [];
  return arr;
};
console.log(removeAllTasks(todoList));

// 10. Check unique item of an array
const checkUniqueness = arr => {
  let uniquenessFlag = true;
  for (const element of arr) {
    if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
      uniquenessFlag = false;
      break;
    }
  }
  return uniquenessFlag;
};
const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrTwo));

// 11. Bonus - more functionalities for the CRUD TODO app
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTM'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
  }
];
const scoresGreaterThan85 = arr => {
  const usersGreater85 = [];
  for (const user of arr) {
    if (user.scores > 85) {
      usersGreater85.push(user);
    }
  }
  return usersGreater85;
};

console.log(scoresGreaterThan85(users));

// Add a new user if not exited
const sulaymon = {
  name: 'Sulaymon',
  scores: 90,
  skills: ['HTM', 'CSS', 'JS'],
  age: 20
};

const john = {
  name: 'John',
  scores: 120,
  skills: ['HTM', 'CSS', 'JS', 'Mongo'],
  age: 20
};
const addUser = (arr, user) => {
  for (const usr of arr) {
    if (usr.name === user.name) {
      return 'A user already existed';
    }
  }

  arr.push(user);

  return arr;
};

console.log(addUser(users, sulaymon));

// Add a user skill
const addUserSkill = (arr, name, skill) => {
  let found = false;
  for (const user of arr) {
    if (user.name === name) {
      user.skills.push(skill);
      found = true;
      return arr;
      break; // clarify
    }
  }
  if (!found) {
    return 'A user does not exist';
  }
};

console.log(addUserSkill(users, 'Sulaymon', 'Node'));
console.log(users);

// Edit a user

const editUser = (arr, name, user) => {
  let found = false;
  for (const usr of arr) {
    if (usr.name === name) {
      usr.name = user.name;
      usr.age = user.age;
      usr.scores = user.scores;
      usr.skills = user.skills;
      found = true;
      return arr;
      break; // clarify
    }
  }
  if (!found) {
    return 'A user does not exist';
  }
};
console.log(editUser(users, 'John', john));
console.log(users);
