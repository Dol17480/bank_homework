var Bank = require('../bank/bank.js');
var Account = require('../bank/account.js');

var BankView = function(bank){
  this.bank = bank;

}

BankView.prototype = {
  render: function(){
   
     var totalDisplay = document.getElementById('total');
     totalDisplay.innerText = "Total: £" + this.bank.totalCash();

     var accountList = document.getElementById('accounts');

     for(account of this.bank.accounts){
       var accountListItem = document.createElement('li');
       accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
       accountList.appendChild(accountListItem);
     }

     var businessAccounts = this.bank.filteredAccounts('business');
     var businessAccountList = document.getElementById('business-accounts');
     console.log('businessAccounts');

      for(account of businessAccounts){
       var businessAccountItem = document.createElement('li');
       businessAccountItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
       businessAccountList.appendChild(businessAccountItem);
     }

    var personalAccounts = this.bank.filteredAccounts('personal');
    var personalAccountList = document.getElementById('personal-accounts');

      for(account of personalAccounts){
      var personalAccountItem = document.createElement('li');
      personalAccountItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
      personalAccountList.appendChild(personalAccountItem);
   }

   var businessTotalDisplay = document.getElementById('business-total');
   var personalTotalDisplay = document.getElementById('personal-total');

   businessTotalDisplay.innerText = "Total Business: £" + this.bank.totalCash('business');
   personalTotalDisplay.innerText = "Total Personal: £" + this.bank.totalCash('personal');

  }
}

module.exports = BankView;

