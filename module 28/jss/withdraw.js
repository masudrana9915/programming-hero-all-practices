
// add withdraw button event handler
// get withdraw amount by using getInputFieldValueBYId function
// get previousc withdraw amount by using getTextElementValueById function
// calculate new withdraw total and set the value
// set new withdraw total by using setTextElementValueById function
// get previous balance total by using getTextElementValueById function
// calculate new balance total
// set balance total using setTextElementValueById

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})