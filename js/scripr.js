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

    // const totalBalanceElements1 = getElementByIdValue('total-balance');

    // const previousTotalBalanceStrings1 = totalBalanceElements1.innerText;
    // const previousTotalBalance1 = parseFloat(previousTotalBalanceStrings1);

    const totalMainBalance = incomeBalanceTotal - incomeExpensiveBalanceTotal;
    setTextField('total-balance',totalMainBalance);



    // totalBalanceElements1.innerText = totalMainBalance;
})






// document.getElementById('btn-save').addEventListener('click',function(){
//     const savingField = document.getElementById('saving-field');
//     const newSavingFieldString = savingField.value;
//     const newIncomeField = parseFloat(newSavingFieldString);

//     console.log(newIncomeField);
//     const totalBalanceElements1 = document.getElementById('total-balance');
//     const previousTotalBalanceStrings1 = totalBalanceElements1.innerText;
//     const previousTotalBalance1 = parseFloat(previousTotalBalanceStrings1);

//     // const savingBalance = totalMainBalance * 0.2;
//     // console.log(savingBalance);


//     const savingAmount = document.getElementById('saving-amount');
//     const previousSavingAmountStrings = savingAmount.innerText;
//     const previousSavingAmount = parseFloat(previousSavingAmountStrings);

//     const remainingBalance = document.getElementById('remaining-balance');
//     const previousRemainingBalanceStrings = remainingBalance.innerText;
//     const previousRemainingBalance = parseFloat(previousRemainingBalanceStrings);

// })