const CONST_VALUE = 123;

//Задача 1
let height;
let width;
let balance;
let sum;

height = 25;
width = 15;
balance = 1000;

sum = balance - (height * width * 2);
console.log(sum);


//Задача 2
let s1 = 15;
let s2 = 6;
let s3 = s1 - s2;
console.log(s3);


//Задача 3
let num1;
let num2;
let num3;
num1 = 130;
num2 = 120;
num3 = 140;

if (num1 < num2 && num1 < num3) {
    console.log(num1);
} else if (num2 < num3) {
    console.log(num2);
} else {
    console.log(num3);  
}


//Задача 4

let m = 10;
let n = -1;

if (m >= 0 && m > 10 && n >= 0 && n > 10 && n > m) {
    console.log(m);
} else if (m <= 0 && n <= 0 && m > n){
    console.log(m);
} else if (m <= 0 && n <= 0 && m < n){
    console.log(n);
} else if (m >= 0 && m > 10 && n >= 0 && n < 10 && 10 - n > m - 10){
    console.log(m);
} else if (m >= 0 && m < 10 && n >= 0 && n > 10 && 10 - n > m - 10){
    console.log(n);
} else if (m >= 0 && m > 10 && n >= 0 && n < 10 && 10 - n < m - 10){
    console.log(n);
} else if (m >= 0 && m > 10 && n >= 0 && n > 10 && n < m) {
    console.log(n);
} else if (m <= 0 && n >= 0 && n > 10 && 10 - n > m - 10) {
    console.log(n);
} else if (m <= 0 && n >= 0 && n > 10 && 10 - n < m - 10) {
    console.log(m);
} else if (m >= 0 && m < 10 && n >= 0 && n > 10 && 10 - n < m - 10){
    console.log(m);
} else if (m >= 0 && m >= 10 && n <= 0 && 10 - n > m - 10){             //добавил =  (m>=10)
    console.log(m);
} else if (m >= 0 && m <= 10 && n <= 0 && 10 - n > m - 10){             //добавил =  (m<=10)
    console.log(m);
} else if (m <= 0 && n >= 0 && n < 10 && 10 - n > m - 10) {
    console.log(n);
} else if (m >= 0 && m < 10 && n >= 0 && n < 10 && n > m){
    console.log(n);
} else if (m >= 0 && m > 10 && n <= 0 && 10 - n < m - 10){
    console.log(n);
} else if (m >= 0 && m < 10 && n >= 0 && n < 10 && m > n){
    console.log(m);
} else if (m = n){
    console.log(m);
} 



/*Задача 4
let m = 8.5;
let n = 11.45;
let result;

result = (10 - m < n - 10)
? "8.5"
: "11.45";
console.log(result); */

/*Задача 4
let m = 40;
let n = -5;

if (m > 10 || 10 > n) {
console.log(m);
} else {
console.log(n);
}*/

/*let m = 8;
let n = 11; 
if (m - n > 10 && 10 > n - m) {
console.log(n);
} else {
console.log(m);
}*/

/*let m = -40;
let n = -50;
if (m * 10 > n * 10) {
console.log(n);
} else {
console.log(m);
}*/

/*let m = -40
let n = 9;
if (m < 10 && m - n > 10 || m > 0 && m - n < 10) {
    console.log(n);
} else {
    console.log(m);
}     */ 

/*let m = 12;
let n = 7;
if (m > 10 < n || m < 10 > n ) {
    console.log(n);
} else {
    console.log(m);
}  */

/*let m = 12;
let n = 70;
if (m - n > 0 && m > n || ) {
    console.log(m);
} else {
    console.log(n);
}*/

