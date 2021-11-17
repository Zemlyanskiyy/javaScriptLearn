
let money = 120000;
let income = '50000';
let addExpenses = 'Такси, гей-сауны, интернет, донат в геншин импакт';
let deposit = true;
let mission = 600000;
let period = 6;
let budgetDay = money/30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен' + period + 'месяцев');
console.log('Цель заработать' + mission + 'рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);