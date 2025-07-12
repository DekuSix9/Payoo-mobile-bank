
document.getElementById('btn-cash-out').addEventListener('click',function(event){

   event.preventDefault();
   const cashoutInput=document.getElementById('cash-out').value;
   const cashoutPin=document.getElementById('cash-out-pin').value;

  if(cashoutPin==="1234"){

         const accountBalanceInput=document.getElementById('account-balance').innerText;
         const cashoutmoney=parseFloat(cashoutInput);
         const accountBalance=parseFloat(accountBalanceInput);
         const newBalance=accountBalance-cashoutmoney;
         document.getElementById('account-balance').innerText=newBalance;

  }

else{
    alert('Your pin is incorrect!Please try again.')
}


})