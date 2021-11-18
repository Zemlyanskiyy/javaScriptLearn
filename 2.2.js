
let num = 266219;

const getMultiple = (num) => num.toString().split('').reduce((res, item) => item * res, 1);
let rezult = getMultiple(num);
console.log(rezult);
let rezult2 = rezult **3;
console.log(rezult2);
console.log(String(rezult2).slice(0,2));