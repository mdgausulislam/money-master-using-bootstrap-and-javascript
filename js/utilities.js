function setInputFieldText(inputId) {
    const incomeField = document.getElementById(inputId);
    const newIncomeFieldString = incomeField.value;
    const newIncomeField = parseFloat(newIncomeFieldString);
    return newIncomeField;
}

function getElementByIdValue(elementId) {
    const totalBalanceElements = document.getElementById(elementId);
    const previousTotalBalanceStrings = totalBalanceElements.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceStrings);
    return previousTotalBalance;
}


function setTextField(inputById, newValue) {
    const InputFieldText = document.getElementById(inputById);
    InputFieldText.innerText = newValue;

}

function calculateAmount(incomeBalanceTotal, incomeExpensiveBalanceTotal) {
    const totalMainBalance = incomeBalanceTotal - incomeExpensiveBalanceTotal;
    setTextField('total-balance', totalMainBalance);
}


function calculateSave(){
    const savingField = setInputFieldText('saving-field');
    const saveAmountString = savingField * 0.2 ;
    const SavingPercentAmount = parseFloat(saveAmountString);
}