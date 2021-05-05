
// ----------------task1-------------

// let num = prompt('Введіть число від 0 до 10 ', 10);

// if (!isNaN(Number(num)) && Number(num) <= 10 && num !== '') {
//    (Math.floor(Math.random() * 11) === num) ? console.log('Good Work') : console.log('Not match');
// } else {
//     console.log('Error !!')
// }

// -------------- task4 ----------------

// let num = prompt('Введіть число:', 10);

// if (!isNaN(Number(num)) && num !== '') {
//     let res = num - 13;

//     if (res < 13) {
//         console.log('Результат: ' + res + ' менше 13 подвійну різницю по модулю не шукаєм');
//     } else {
//         console.log('Подвійна різниця по модулю : ' + (res % 13) * 2);
//     }
// } else {
//     console.log('Error !!')
// }

//  -------------- task7 -------------
// let row = prompt('Введіть рядок', '');
// let row2 = row.split('');

// row2.push(row[0]);
// row2.unshift(row[0]);
// row2 = row2.join('');
// console.log(row2);

// -----------task8-------------------
// let row = prompt('Введіть рядок ', '');

// function modRow(someRow) {
//     let arrRow = someRow.split('');
//     let tempLast = arrRow.pop();
//     let tempFirst = arrRow.shift();

//     someRow = arrRow.push(tempFirst);
//     someRow = arrRow.unshift(tempLast);
//     someRow = arrRow.join('');
//     return (someRow);
// }

// if (row.length >= 1) {
//     console.log(modRow(row));
// } else {
//     console.log('error');
// }

// --------------------task9------------------
// let row = prompt('Введіть рядок ', '');
// let num = 0;

// function delIndex(someRow, index) {
//     let arrRow = someRow.split('');

//     arrRow.splice(index, 1);
//     someRow = arrRow.join('');
//     return (someRow);
// }

// if (row.length >= 1) {
//     let info = 'Введіть число min: 0 Max: ' + (row.length - 1);
//     num = prompt(info, 0);

//     if (!isNaN(Number(num)) && num.length >= 0 && num >= 0 && row.length > num) {
//         console.log(delIndex(row, num));
//     } else {
//         console.log('Потрібно ввести цифру не більшу за довжину рядка');
//     }
// } else {
//     console.log('error');
// }
