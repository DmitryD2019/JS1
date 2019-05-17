const CONST_VALUE = 123;

//Задача 1
//Данные
height = 25;
width = 15;
balance = 1000;

//1 способ
sum = balance - (height * width);
console.log(sum);

//2 способ
sum = (height * width);
height = 25;
width = 15;
balance = 1000;

total = (balance - sum);
console.log(total); 


//Задача 4

m = 8.5;
n = 11.45;

result = (10 - m < n - 10)
? "8.5"
: "11.45";
console.log(result); 


//Задача 2
s1 = 15;
s2 = 6;
s3 = s1 - s2;
console.log(s3);


//Задача 3

num1 = 150;
num2 = 170;
num3 = 190;
console.log(Number.MIN_VALUE);