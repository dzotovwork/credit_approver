const btn = document.getElementById('send');
const form = document.getElementById('form');
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
    alert('все работает и это хорошо');
});
