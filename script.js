'use strict'

let money = +prompt('Ваш месячный доход?');
let income = prompt('Перечислите возможные источники дохода');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');

function getExpensesMonth(){
  return  amount1 + amount2;
}

function getAccumulatedMonth(){
  return  money - amount1 - amount2;
}

const accumulatedMonth = getAccumulatedMonth();

function getTargetMonth(){
   return 60000 / accumulatedMonth;
}

const budgetDay = getAccumulatedMonth() / 30;


let showTypeOf = function(data){
  console.log(data, typeof(data));
    
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


console.log(getExpensesMonth());
console.log(addExpenses.toLowerCase().split(', '));
console.log(Math.ceil(getTargetMonth()));
console.log(Math.ceil(budgetDay));

let getStatusIncome = function(){
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
}

getStatusIncome();