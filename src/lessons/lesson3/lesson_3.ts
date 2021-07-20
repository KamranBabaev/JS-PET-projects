console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const prom = new Promise((resolve, reject) => {
    const a = 10
    setTimeout(() => {
        resolve(a)
        reject()
    }, 2000)
})

prom
    .then(res => {
        console.log('resolved', res)
    }, err => {
        console.log('error', err)
    })

// либо
prom
    .then(res => {
        console.log('resolved', res)
    })
    .catch(err => {
        console.log('error', err)
    })


// just a plug
export default () => {
};