document.getElementById('btn-calculate').addEventListener('click', function () {


    const incomeField = setInputFieldText('income-field');
    // const newIncomeFieldString = incomeField.value;
    // const newIncomeField = parseFloat(newIncomeFieldString);
    // incomeField.value = '';


    const totalBalanceElements = getElementByIdValue('total-balance');
    // const previousTotalBalanceStrings = totalBalanceElements.innerText;
    // const previousTotalBalance = parseFloat(previousTotalBalanceStrings);

    const incomeBalanceTotal = incomeField + totalBalanceElements;

    setTextField('total-balance',incomeBalanceTotal);
    // totalBalanceElements.innerText = incomeBalanceTotal;

    // const newBalance=incomeValue+newTotalBalance;
    // console.log(newBalance);


    const foodField = setInputFieldText('food-field');
    // const newFoodFieldString = foodField.value;
    // const newFoodField = parseFloat(newFoodFieldString);
    // foodField.value = '';

    const rentField = setInputFieldText('rent-field');
    // const newRentFieldString = rentField.value;
    // const newRentField = parseFloat(newRentFieldString);
    // rentField.value = '';

    const clothesField = setInputFieldText('Clothes-field');
    // const newClothesFieldString = clothesField.value;
    // const newClothesField = parseFloat(newClothesFieldString);
    // clothesField.value = '';

    const totalExpensiveBalance = getElementByIdValue('total-expensive');
    // const previousTotalExpensiveBalanceStrings = totalExpensiveBalance.innerText;
    // const previousTotalExpensiveBalance = parseFloat(previousTotalExpensiveBalanceStrings);

    const incomeExpensiveBalanceTotal = foodField + rentField + clothesField+ totalExpensiveBalance;
    setTextField('total-expensive',incomeExpensiveBalanceTotal);

    calculateAmount(incomeBalanceTotal,incomeExpensiveBalanceTotal)

    // const totalBalanceElements1 = getElementByIdValue('total-balance');

    // const previousTotalBalanceStrings1 = totalBalanceElements1.innerText;
    // const previousTotalBalance1 = parseFloat(previousTotalBalanceStrings1);

    // totalBalanceElements1.innerText = totalMainBalance;
})



// document.getElementById('btn-save').addEventListener('click', function () {
//     // Get the input field element
//     const savingField = document.getElementById('saving-field');

//     // Get the value entered in the input field and convert it to a number
//     const inputPercentage = parseFloat(savingField.value);

//     // Check if the input is a valid number
//     if (!isNaN(inputPercentage)) {
//         // Calculate the savings amount (assuming the input is a percentage)
//         const saveAmount = (inputPercentage / 100) * 20; // You can change 20 to any desired amount

//         // Display the calculated savings amount in an alert
//         alert(`You will save ${saveAmount.toFixed(2)} dollars.`); // Display the result as a decimal with 2 decimal places
//     } else {
//         // Handle invalid input (non-numeric input)
//         alert('Please enter a valid percentage.');
//     }
// });


document.getElementById('btn-save').addEventListener('click',function(){
const savingField = setInputFieldText('saving-field');
const totalBalanceElements = getElementByIdValue('total-balance');
const saveAmountString = (totalBalanceElements/ 100 )* savingField;
const SavingPercentAmount = parseFloat(saveAmountString);
console.log(SavingPercentAmount);

// 

// const savingMainAmount= (totalBalanceElements * SavingPercentAmount)/100;
// console.log(savingMainAmount);




})