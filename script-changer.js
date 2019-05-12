// SCRIPT CHANGER
const btnTestOne = document.querySelector('.test-1');
const btnTestThree = document.querySelector('.test-3');

const scriptTag = document.querySelector('script');

btnTestOne.addEventListener('click', testOne);
btnTestThree.addEventListener('click', testThree);

function testOne() {
  scriptTag.setAttribute('src', './test1.js');
}
function testThree() {
  scriptTag.setAttribute('src', './test3.js');
}
