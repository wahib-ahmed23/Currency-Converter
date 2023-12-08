function convertCurrency() {
  
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

   
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const exchangeRates = {
        USD: 1,
        INR: 75.25,
        GBP: 0.72,
        JPY: 110.25,
        CAD: 1.28,
    };

    const convertedAmount = (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
    document.getElementById('result').innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
