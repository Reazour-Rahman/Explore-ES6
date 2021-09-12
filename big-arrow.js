//add
const sum = (num1 , num2) => num1 + num2;
const add = sum(10, 20);
console.log(add);
//multiply
const multiply = (num1 , num2, num3) => num1 * num2 * num3;
const result = multiply(10, 20, 5);
console.log(result);
//fiveTimes
const five = (num1) => num1 * 5;
const times = five(10);
console.log(times);
//without Parameter
const NoParameter = () => 'Brandon Sam';
const para = NoParameter();
console.log(para);
//multiline arrow function
const calc = (x, y) =>{
    const sum = x + y;
    const multiply = x * sum;
    const divide = multiply / 5;
    return divide ;
};
const output = calc( 10, 5);
console.log(output);