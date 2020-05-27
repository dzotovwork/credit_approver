const message: string = 'hello';
console.log('app.ts');
const btn: Element = document.querySelector('#btn')!;
btn.addEventListener('click', () => {
    alert('все работает и это хорошо');
});
