const greet = (name) => console.log(`Hello, ${name}`);
greet("KIM");


/* *함수 안에 함수 */
function outer() {
    console.log("Outer function");

    function inner() {
        console.log("Inner function");
    }
    inner();
}
outer();

// //함수 안에 함수 화살표
// 화살표 함수가 필요가 없었다. 화살표 함수는 간결해야하는데... 
// const outer = () => 
//     const inner = () =>
//     console.log("Outer function");

const myFunction = function() {
    console.log("Function assigned to a variable");
};
myFunction();

function getMultiplier(x) {
    return function(y) {
        return x * y;
    };
}
const dobule = getMultiplier(2);
console.log(dobule(5));