const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amount = document.getElementById("amount");
const convertedAmount = document.getElementById("converted-amount");
const swapButton = document.getElementById("swap");

const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";

// Populate Currencies
async function populateCurrencies() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const currencies = Object.keys(data.rates);
    console.log("currencies");

    currencies.forEach(currencies=>{
        const option1 = new Option(currencies,currencies);        //option(name,values)
        const option2 = new Option(currencies,currencies);
        fromCurrency.add(option1);
        toCurrency.add(option2);
    });

    fromCurrency.value = "USD";
    toCurrency.value = "INR";
    convert();
}

//convert function
async function convert() {
    const base = fromCurrency.value;
    const target = toCurrency.value;
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);     //Template String--->${~}
    const data = await response.json();
    const rate = data.rates[target];
    console.log(rate);

    const result = (amount.value*rate);
    convertedAmount.value = result;
}

amount.addEventListener("input",convert);
fromCurrency.addEventListener("change",convert);
toCurrency.addEventListener("change",convert);

populateCurrencies();

//Swap Button
swapButton.addEventListener("click",()=>{
    [fromCurrency.value,toCurrency.value]=[toCurrency.value,fromCurrency.value];
    convert();
});