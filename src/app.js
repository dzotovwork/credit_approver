const btn = document.getElementById('send');
const form = document.getElementById('form');
form.addEventListener('submit', () => {
    console.log('form submit');
    const data = {
        age: document.getElementById('age').value,
        sex: document.getElementById('sex').value,
        money_income: document.getElementById('money_income').value,
        last_year_money: document.getElementById('last_year_money').value,
        rating: document.getElementById('rating').value,
        credit: document.getElementById('credit').value,
        time: document.getElementById('time').value,
        goal: document.getElementById('goal').value,
    };
    console.log(`data ${JSON.stringify(data)}`);
    alert('все работает и это хорошо');
});