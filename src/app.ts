const btn = document.getElementById('send');
const form = document.getElementById('form');

function checkMale(data) {
    const retirementAge = 65;
    console.log(`Проверяем male age = ${data.age}, time = ${data.time}`);
    if (data.age + data.time > retirementAge) {
        return false;
    }
}
function checkFemale(data) {
    const retirementAge = 60;
    console.log(`Проверяем female age = ${data.age}, time = ${data.time}`);
    if (data.age + data.time > retirementAge) {
        return false;
    }
}

function checkRetirement(data) {
    if (data.sex === 'M') {
        return checkMale(data.age, data.time);
    } else {
        return checkFemale(data.age, data.time);
    }
}

function checkData(data) {
    let result = 'Кредит выдаётся';
    if (!checkRetirement(data)) {
        result = 'Кредит не выдаётся';
    }
    return result;
}

btn.addEventListener('click', () => {
    const data = {
        age: Number(form.age.value),
        sex: form.sex.value,
        money_income: form.money_income.value,
        last_year_money: Number(form.last_year_money.value),
        rating: Number(form.rating.value),
        credit: Number(form.credit.value),
        time: Number(form.time.value),
        goal: form.goal.value,
    };
    console.log(`data ${JSON.stringify(data)}`);
    let result;
    result = checkData(data);
    console.log(result);
});
