var Bank = require('./bank/bank.js');
var BankView = require('./views/bank_view.js')
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');




window.onload = function() {
  console.log('loaded');
  var bank = new Bank();
  for(accountsData of sampleAccounts){
    bank.addAccount(new Account(accountsData));
  }
  var view = new BankView(bank);
  view.render();
// }

//   var interestButton = document.getElementById('pay-interest');
//   interestButton.onclick = function(){
//     this.bank(accounts).payInterest(10);
};
