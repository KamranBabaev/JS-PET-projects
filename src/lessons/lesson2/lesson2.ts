
// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// function sum(a: number) {
//     return function (b: number) {
//         return a + b
//     }
// }
// sum(3)(6)

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
// function makeCounter () {
//     let count = 0
//     return function () {
//         return ++count
//     }
// }
// const counter = makeCounter();
// const counter2 = makeCounter();
// counter2()
// counter()

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
// function makeCounter(n: number) {
//     let count = n
//     return {
//         increase: () => ++count,
//         decrease: () => --count,
//         reset: () => {
//             count = 0
//             return count
//         },
//         set: (num: number) => {
//             count = num
//             return count
//         },
//         getCount: () => count
//     }
// }
//
// makeCounter(5)

// Task 04
// функция получает число и складывает все числа до вхдного аргумента и ретурнит сумму
// например: sumTo(3) = 3 + 2 + 1 = 6
// function sumTo(n: number) {
//     let result = 0
//     for (let i = n; i > 0; i--) {
//         result += i
//     }
//     return result
// }
// sumTo(5)
// либо с рекурсией
// function sumTo(n: number): number {
//     if (n === 1) {
//         return n
//     }
//     return n + sumTo(n - 1)
// }

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
// function superSum(num: number) {
//     if (num <= 0) return 0
//     if (num === 1) return (n: number) => n
//
//     let _arguments: Array<number> = []
//     // @ts-ignore
//     function helper(...args: Array<number>) {
//         _arguments = [..._arguments, ...args]
//         if (_arguments.length >= num) {
//             _arguments.length = num
//             return _arguments.reduce((acc, elem) => acc + elem, )
//         } else {
//             return helper()
//         }
//     }
//     return helper
// }

// Task 05
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с
// помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
//
// Сделайте набор «готовых к употреблению» фильтров:
//
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
//
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// function inBetween(a: number, b: number) {
//     return function(x: number) {
//         return x >= a && x <= b;
//     };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6)) )
// вторая
// function inArray(arr: Array<number>) {
//     return function(x: number) {
//         return arr.includes(x);
//     };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// Task 06
// У нас есть массив объектов, который нужно отсортировать:
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// function byField(field: string) {
//     return (a: any, b: any) => a[field] > b[field] ? 1 : -1;
// }
//
// users.sort(byField('name'));
// users.forEach(user => alert(user.name)); // Ann, John, Pete
//
// users.sort(byField('age'));
// users.forEach(user => alert(user.name)); // Pete, Ann, John

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.


// just a plug
export {};