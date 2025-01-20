const mutiply = function (a, b) {
    return a * b;
};
console.log(mutiply(1, 4));



// const hi = function (name){
//     console.log (`hello ${name}`);
// };
// console.log(hi(kim));

const numbers = [1, 2, 3, 4];
const squared = numbers.map(function (num) {
    return num*num*num;
});
console.log(squared);