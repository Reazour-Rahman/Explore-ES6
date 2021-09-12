//function
function sum(num1,  num2) {
    return num1 + num2;
}
//function expression
const sum2 = function sum2( num12, num22){
    return num12 + num22
}
//function expression (anonymous)
const sum3 = function( num12, num22){
    return num12 + num22
}
// Arrow function
const sum4 = (num1, num2) => num1 + num2;
/* calling */
const add1 = sum(10,20);
const add2 = sum2(20,40);
const add3 = sum3(5,5);
const add4 = sum4(15, 15);
console.log(add1, add2, add3, add4 );