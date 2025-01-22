function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
}
greet();
greet("Kim");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));