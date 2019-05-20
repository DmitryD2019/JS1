const CONST_VALUE = 123;

//ДЗ 2

// Задача 1

let month = 'ноябрь';

if (month === 'декабрь' || month === 'январь' || month === 'февраль') {
    console.log("сейчас зима");
} else if (month === 'март' || month === 'апрель' || month === 'май') {
    console.log("сейчас весна");
} else if (month === 'июнь' || month === 'июль' || month === 'август') {
    console.log("сейчас лето");
} else if (month === 'сентябрь' || month === 'октябрь' || month === 'ноябрь') {
    console.log("сейчас осень");
}

//Задача 2

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
}

//Задача 4

let i = 100; 
let three;
let five;
    
for (let i = 100; i > 0; i--) 
    {
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
let h = 'вне диапазона'
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