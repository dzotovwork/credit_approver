const btn = document.getElementById('send');
const form = document.getElementById('form');

function checkRetirement(data) {
    function checkMale(age, time) {
        const retirementAge = 65;
        if (age + time > retirementAge) {
            return false;
        }
    }
    function checkFemale(age, time) {
        const retirementAge = 60;
        if (age + time > retirementAge) {
            return false;
        }
    }
    if (data.sex === 'M') {
        checkMale(data.age, data.time);
    } else {
        checkFemale(data.age, data.time);
    }
}

function checkData(data) {
    let result = 'Кредит выдаётся';
    if (!checkRetirement(data)) {
        result = 'Кредит не выдаётся';
    }
    return result;
}

form.addEventListener('submit', () => {
    const data = {
        age: form.age.value,
        sex: form.sex.value,
        money_income: form.money_income.value,
        last_year_money: form.last_year_money.value,
        rating: form.rating.value,
        credit: form.credit.value,
        time: form.time.value,
        goal: form.goal.value,
    };
    console.log(`data ${JSON.stringify(data)}`);
    let result;
    result = checkData(data);
    alert(result);
});
