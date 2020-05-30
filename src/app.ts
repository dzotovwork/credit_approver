const btn = document.getElementById('send');
const form = document.getElementById('form');
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
