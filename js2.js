const CONST_VALUE = 123;

//ДЗ 2

// Задача 1

let month = 7;

if (month === 12 || month === 1 || month === 2) {
    console.log("сейчас зима");
} else if (month === 3 || month === 4 || month === 5) {
    console.log("сейчас весна");
} else if (month === 6 || month === 7 || month === 8) {
    console.log("сейчас лето");
} else if (month === 9 || month === 10 || month === 11) {
    console.log("сейчас осень");
}

/*//Задача 2

let dcm = 0.1;
let km = 1000;
let m = 1;
let mm = 0.001;
let cm = 0.01;
let length = 15;
let unit = 'cm';

if (unit === 'dcm') {
    console.log (length * dcm);
} else if (unit === 'km') {
    console.log (length * km);
} else if (unit === 'm') {
    console.log (length * m);
} else if (unit === 'mm') {
    console.log (length * mm);
} else if (unit === 'cm') {
    console.log (length * cm);
}*/


//Задача 2

let dcm = 1;
let km = 2;
let m = 3;
let mm = 4;
let cm = 5;
let length = 15;
let unit = 4;

if (unit === 1) {
    console.log (length * 0.1);
} else if (unit === 2) {
    console.log (length * 1000);
} else if (unit === 3) {
    console.log (length * 1);
} else if (unit === 4) {
    console.log (length * 0.001);
} else if (unit === 5) {
    console.log (length * 0.01);
}


//Задача 4

let i = 100; 
let three;
let five;
    
for (let i = 100; i > 0; i--) {
    if (i % 3 === 0) {
        console.log('three');
    } else if (i % 5 === 0){ 
        console.log('five');
    } else {console.log (i);
    } continue;
} 

/*
// деление на 3 и на 5 

let i = 100; 
let ThreeFive;

for (let i = 100; i > 0; i--) 
    {
        if (i % 3 === 0 && i % 5 === 0) {
        console.log('ThreeFive');
        } else {console.log (i);
        } continue;
    } 
*/

// Задача 3

let number = -300;
let a = 'отрицательное трехзначное';
let b = 'отрицательное двузначное';
let c = 'отрицательное однозначное';
let d = 'положительное трехзначное';
let e = 'положительное двузначное';
let f = 'положительное однозначное';
let g = 'нуль';
let h = 'вне диапазона';
let min = -999;
let max = 999;

if (number <= -100 && number >= -999) {
    alert (a);
} else if (number <= -10 && number >= -99){
    alert (b);
} else if (number <=-1 && number >= -9){
    alert (c);
} else if (number <= 999 && number >= 100){
    alert (d);
} else if (number <= 99 && number >= 10){
    alert (e);
} else if (number <= 9 && number >= 1){
    alert (f);
}else if (number === 0){
    alert (g);
} else {
    alert (h);
}