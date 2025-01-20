const sayHello = () => console.log("Hello, world");
sayHello();

const greet = (name) => console.log(`Hello, ${name}!`);
greet("world");

const divide = (a, b) => a / b;
console.log(divide(10, 5));

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num*2);
console.log(doubled);