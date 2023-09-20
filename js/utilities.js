function setInputFieldText(inputId){
    const incomeField = document.getElementById(inputId);
    const newIncomeFieldString = incomeField.value;
    const newIncomeField = parseFloat(newIncomeFieldString);
    return newIncomeField;
}

function getElementByIdValue(elementId){
    const totalBalanceElements = document.getElementById(elementId);
    const previousTotalBalanceStrings = totalBalanceElements.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceStrings);
    return previousTotalBalance;
}


function setTextField(inputById,newValue){
    const InputFieldText=document.getElementById(inputById);
    InputFieldText.innerText=newValue;

}