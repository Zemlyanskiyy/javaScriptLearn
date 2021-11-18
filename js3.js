'use strict';

let money = prompt('Ваш месячный доход?');
let income = '50000';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');
let budgetMounth = money - amount1 - amount2;


console.log(budgetMounth);

let mission = 60000 / budgetMounth;
console.log(Math.ceil(mission));

let period = 6;
let budgetDay = budgetMounth/30;
console.log(Math.floor(budgetDay));

if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200){
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay == 0){
    console.log('Очень жаль, но вы бомж ебаный');
} else if (budgetDay < 0){
    console.log('Что-то пошло не так');
}





