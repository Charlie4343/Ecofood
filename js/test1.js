// -------------task2--------------------------------------
// let first = prompt('Please enter first number', 10);
// let second = prompt('Please enter first number', 5);

// if (
//     !isNaN(Number(first)) &&
//     !isNaN(Number(second)) &&
//     first !== '' &&
//     second !== '' &&
//     second !== '0'
//     ) {
//     console.log('mul = ' + first * second);
//     console.log('div = ' + first / second);
// } else {
//     console.log('Error');
// }

// -------------task3--------------------------------------

// let f = prompt('F = ', 10);
// const Five = 5;

// if (!isNaN(Number(f)) && f !== ''){
//     console.log('C = ' + (Five/9) * (f - 32));
// } else {
//     console.log('Error');
// }

// -------------task5--------------------------------------

// console.log('Hello'.split(''));
// let arr = ['H', 'e', 'l', 'l', 'o'];
// console.log(arr.join(''));

// // Hello -> olleH
// console.log("Hello".split('').reverse().join(''));

// console.log("Helle".replace('e', 'a')); // "Halle"


// -------------task6--------------------------------------

// let num = prompt('number = ', 10);

// if (!isNaN(Number(num)) && num !== ''){
//     if (num % 3 === 0 || num % 7 === 0) {
//         console.log('Yes');
//     } else {
//         console.log('No');
//     }
// } else {
//     console.log('Error');
// }

// -------------task10--------------------------------------
//poppop

// let str = prompt('palindrome = ', 'pop');
// let reverseStr = str.split('').reverse().join('');

// console.log(str === reverseStr);

// -------------task10--------------------------------------

// let str = 'JavaScript';
// let res = str.split(''); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
// let length = res.length;

// for (let index = 0; index < length; index++) {
//     if (index % 2 === 0) {
//         res.push(index);
//     } else {
//         res.unshift(index);
//     }
// }
// console.log(res.join(''));

console.log(document.getElementsByClassName('header-top'));