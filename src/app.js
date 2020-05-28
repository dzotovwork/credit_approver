const btn = document.getElementById('send');
const age = document.getElementById('age');
btn.addEventListener('click', () => {
    console.log(`aloha ${age.value}`);
    alert('все работает и это хорошо');
});
