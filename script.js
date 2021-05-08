// var http = new XMLHttpRequest();
// var url = 'https://jsonplaceholder.typicode.com/todos/';
// var methode = 'GET';
// http.open(methode,url);
// http.onreadystatechange = function(){
//     if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
//         console.log(JSON.parse(http.responseText));
//     }
// }
// http.send();
// fetch('https://jsonplaceholder.typicode.com/todos/',{method:'GET'}).then(res=> console.log(res));

const currencyElOne = document.getElementById('currency-one');
const currencyElTwo = document.getElementById('currency-two');
const amountElOne = document.getElementById('amount-one');
const amountElTwo = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rateEl = document.getElementById('rate');

function calculate(){
    const currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTwo.value;


    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currencyTwo];
        rateEl.innerText=  `1 ${currencyOne} = ${rate} ${currencyTwo}`;

        amountElTwo.value = (amountElOne.value * rate ).toFixed(2);
    });
    
}





//event on elements
currencyElOne.addEventListener('change',calculate);
currencyElTwo.addEventListener('change',calculate);
amountElOne.addEventListener('input',calculate);
amountElTwo.addEventListener('input',calculate);

swap.addEventListener('click', () => {
    const temp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temp;
    calculate();
});
