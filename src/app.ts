const btn = document.getElementById('send')!;
btn.addEventListener('submit', () => {
    const data = {
        // @ts-ignore
        age: Number(document.getElementById('age').value),
        // @ts-ignore
        sex: document.getElementById('sex').value,
        // @ts-ignore
        money_income: document.getElementById('money_income').value,
        // @ts-ignore
        last_year_money: Number(document.getElementById('last_year_money').value),
        // @ts-ignore
        rating: Number(document.getElementById('rating').value),
        // @ts-ignore
        credit: Number(document.getElementById('credit').value),
        // @ts-ignore
        time: Number(document.getElementById('time').value),
        // @ts-ignore
        goal: document.getElementById('goal').value,
    };
    alert(JSON.stringify(data));
});
