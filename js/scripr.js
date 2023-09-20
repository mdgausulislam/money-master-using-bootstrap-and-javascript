document.getElementById('btn-calculate').addEventListener('click',function(){
    console.log('calculate click');

    const incomeField=document.getElementById('income-field');
    const incomeValue=incomeField.value;
    console.log(incomeValue);

    const totalBalance=document.getElementById('total-balance');
    incomeField.innerText=totalBalance;
    console.log('money add');
})