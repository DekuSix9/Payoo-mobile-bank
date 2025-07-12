
document.getElementById('btn-add-money').addEventListener('click',function(event){

   event.preventDefault();
   const addmoneyInput=document.getElementById('add-money').value;
   const addpinInput=document.getElementById('add-pin').value;

  if(addpinInput==="1234"){

         const accountBalanceInput=document.getElementById('account-balance').innerText;
         const addmoney=parseFloat(addmoneyInput);
         const accountBalance=parseFloat(accountBalanceInput);
         const newBalance=addmoney+accountBalance;
         document.getElementById('account-balance').innerText=newBalance;

  }

else{
    alert('Your pin is incorrect!Please try again.')
}


})