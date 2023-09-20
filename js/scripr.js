document.getElementById('btn-calculate').addEventListener('click', function () {


    const incomeField = document.getElementById('income-field');
    const newIncomeFieldString = incomeField.value;
    const newIncomeField = parseFloat(newIncomeFieldString);
    // incomeField.value = '';


    const totalBalanceElements = document.getElementById('total-balance');
    const previousTotalBalanceStrings = totalBalanceElements.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceStrings);

    const incomeBalanceTotal = newIncomeField + previousTotalBalance;
    totalBalanceElements.innerText = incomeBalanceTotal;

    // const newBalance=incomeValue+newTotalBalance;
    // console.log(newBalance);


    const foodField = document.getElementById('food-field');
    const newFoodFieldString = foodField.value;
    const newFoodField = parseFloat(newFoodFieldString);
    // foodField.value = '';

    const rentField = document.getElementById('rent-field');
    const newRentFieldString = rentField.value;
    const newRentField = parseFloat(newRentFieldString);
    // rentField.value = '';

    const clothesField = document.getElementById('Clothes-field');
    const newClothesFieldString = clothesField.value;
    const newClothesField = parseFloat(newClothesFieldString);
    // clothesField.value = '';

    const totalExpensiveBalance = document.getElementById('total-expensive');
    const previousTotalExpensiveBalanceStrings = totalExpensiveBalance.innerText;
    const previousTotalExpensiveBalance = parseFloat(previousTotalExpensiveBalanceStrings);

    const incomeExpensiveBalanceTotal = newFoodField + newRentField + newClothesField+previousTotalExpensiveBalance;
    totalExpensiveBalance.innerText=incomeExpensiveBalanceTotal;

const totalBalanceElements1 = document.getElementById('total-balance');
const previousTotalBalanceStrings1 = totalBalanceElements1.innerText;
const previousTotalBalance1 = parseFloat(previousTotalBalanceStrings1);


const totalMainBalance= previousTotalBalance1 - incomeExpensiveBalanceTotal;

totalBalanceElements1.innerText=totalMainBalance;






})