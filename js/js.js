//Zavd 1
// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// let a = randomInteger(1, 10);
// let b = prompt('Please enter number', 1);

// console.log('Правильна відповідь = ' + a);
// if (b == 0) {
//     console.log('Error');
// }
// (a === b) ? console.log('Good Work') : console.log('Not match');



//Zavd 4
// let f = prompt('Please enter number ', 1); //string
// let a;
// const t = 13;

// if (f <= 13){
//     a = f-13;
//     console.log('Результат різниці = ' + a);
// }
// else{
//     a = (f-13)-13;
//     console.log('Результат подвійної різниці = ' + a);
// }

//Zavd 7
// let g = prompt('Введіть рядок', '');
// let f = g.split('');

// f.push(g[0]);
// f.unshift(g[0]);

// let l = f.join('');
// console.log(l);


//Zavd 8
// let g = prompt('Введіть рядок', '');

// if(g.length >= 1){
//     let f = g.split('');
//     let a = f.slice(1,f.length-1);

//     a.unshift(g[f.length-1]);
//     a.push(g[0]);

//     let x = a.join('');
//     console.log(x);
// }
// else{
//     console.log('ERROR');
// }


//Zavd 9
// let v = prompt('Введіть рядок', '');
// let u = v.split('');

// console.log(u);
// let k = prompt('Введіть букву', '');

// while (u.includes(k)){
//     let l = u.indexOf(k);
//     if(l > -1){
//         u.splice(l,1);
//         console.log(u);
//     }
// }
// let a = u.join('');
// console.log(a);
