const CONST_VALUE = 123;

//Домашнее задание 3

//Задача 1

//1 способ
let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
let C = A.concat(B);
console.log(C);

//2 способ
/*let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
let C = [A] + [B];
console.log(C)*/

//Задача 3

//1 способ
let D = [12, 4, 3, 10, 1, 20];
D.splice(4, 2);
console.log(D);

//2 способ
/*let D = [12, 4, 3, 10, 1, 20];
delete D [4];
delete D [5];
console.log(D);*/