import {log} from "util";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
// let prom1 = new Promise((resolve, reject) => {
//     console.log('Promise is created')
// })
// console.log(prom1)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// let prom2 = new Promise((resolve, reject) => {
//     resolve()
//     console.log('Promise Data')
// })
// console.log(prom2)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
// let prom3 = Promise.reject(new Error("Network Error"))
// console.log(prom3)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// const prom4 = new Promise((res, rej) => {
//     res(setTimeout(() => {
//         console.log('task 4 ', prom4)
//     }, 3000))
// })

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
// const onSuccess = (result: any, name: string) => {
//     return (`${result}` + name)
// }
// const print = (result: any) => {
//     console.log(result)
// }
// const prom5 = new Promise((res, rej) => {
//     const str = 'My name is'
//     setTimeout(() => {
//         res(str)
//     }, 1000)
// })
//     .then((value: any) => onSuccess(value, ' Kam'))
//     .then(print)

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const prom1 = new Promise((res, rej) => {
  setTimeout(() => res({name: "Anna"}), 2000)
})
    // @ts-ignore
    .then(result => result.name)

const prom2 = new Promise((res, rej) => {
  setTimeout(() => res({age: 16}), 3000)
})
    // @ts-ignore
    .then(result => result.age)

const prom3 = new Promise((res, rej) => {
  setTimeout(() => res({city: 'Saint-Petersburg'}), 4000)
})
    // @ts-ignore
    .then(result => result.city)

const result = Promise.all([prom1, prom2, prom3])
    .then(arr => console.log(arr.join(' ')))

// just a plug
export default () => {
};