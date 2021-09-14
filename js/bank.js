
//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    //update deposit total
    const depositInput         = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    
    if(newDepositAmountText == ''){
        alert("Empty input field");
    }else{
        if(isNaN(newDepositAmountText)){
            alert("Input value not a number");
        }else{
            const newDepositAmount     = parseFloat(newDepositAmountText);
            if(newDepositAmount < 0){
                alert('Negative number not allow');
            }else{
                const depositTotal         = document.getElementById('deposit-total');
                const previousDepositText  = depositTotal.innerText;
                const previousDeposit      = parseFloat(previousDepositText);
                const newDepositTotal      = previousDeposit + newDepositAmount;
            
                depositTotal.innerText = newDepositTotal;
            
                //update account balance
                const balanceTotal          = document.getElementById('balance-total');
                const balanceTotalText      = balanceTotal.innerText;
                const previousBalanceTotal  = parseFloat(balanceTotalText);
                const newBalanceTotal       = previousBalanceTotal + newDepositAmount;
                balanceTotal.innerText      = newBalanceTotal;
            }
        }
    }

    depositInput.value = '';

});

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput         = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;

    if(newWithdrawAmountText == ''){
        alert("Empty input field");
    }else{
        if(isNaN(newWithdrawAmountText)){
            alert("Input value not a number");
        }else{
            const newWithdrawAmount     = parseFloat(newWithdrawAmountText);
            if(newWithdrawAmount < 0){
                alert('Negative number not allow');
            }else{
                const withdrawTotal        = document.getElementById('withdraw-total');
                const previousWithdrawText = withdrawTotal.innerText;
                const previousWithdraw     = parseFloat(previousWithdrawText);
                const newWithdrawTotal     = previousWithdraw + newWithdrawAmount;
                withdrawTotal.innerText    = newWithdrawTotal;
    
                //update account balance
                const balanceTotal          = document.getElementById('balance-total');
                const balanceTotalText      = balanceTotal.innerText;
                const previousBalanceTotal  = parseFloat(balanceTotalText);
                const newBalanceTotal       = previousBalanceTotal - newWithdrawAmount;
                balanceTotal.innerText      = newBalanceTotal;
            }
            
        }
    }

    withdrawInput.value = '';

});