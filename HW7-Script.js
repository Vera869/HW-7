//Задание 1

let str = 'js';
str = str.toUpperCase()
console.log(str);

//Задание 2

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

//Задание 3

const x =  32.58884;

console.log(Math.floor(x));   //До меньшего целого    console.log(Math.trunc(x)); другой вариант решения
console.log(Math.ceil(x));    //До большего целого
console.log(Math.round(x));   //До ближайшего целого   console.log(x.toFixed(0)); другой вариант решения


//Задание 4

let array = [ 52, 53, 49, 77, 21, 32];

console.log(`Наибольшее число в массиве: ${Math.max.apply(null, array)}`);
console.log(`Наименьшее число в массиве: ${Math.min.apply(null, array)}`);


//Задание 5

function rand(minValue, maxValue) {
   return Math.ceil(Math.random()* maxValue);
}
console.log(rand(1, 10));

//Задание 6

function getRandomArr(arr) {
   let newArr = [];
   for (let i = 0; i < Math.floor(arr/2); i++) {

      newArr.push(Math.floor(Math.random() * arr));
   }
return newArr;
}
console.log(getRandomArr(8));

//Задание 7

//Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

function nambers(minValue, maxValue) {

   return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(nambers(12, 15));


//Задание 8

let myDate = new Date('09/05/2023');

console.log(myDate);

//Задание 9

let currentDate = myDate;

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let thisDate = new Date();
let declaredDate = "Дата: " + thisDate.getDate() + " " + months[thisDate.getMonth()] + " " + thisDate.getFullYear() + " - это " + days[myDate.getDay()];
console.log(declaredDate);
