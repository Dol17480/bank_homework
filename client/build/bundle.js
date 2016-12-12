/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Bank = __webpack_require__(1);
	var BankView = __webpack_require__(4)
	var sampleAccounts = __webpack_require__(2);
	var Account = __webpack_require__(3);
	
	
	
	
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Bank = function() {
	  this.accounts = [];
	};
	
	Bank.prototype = {
	  addAccount: function(account) {
	    this.accounts.push(account);
	  },
	  findAccountByOwnerName:function(ownerName) {
	    var foundAccount = null;
	    for (account of this.accounts) {
	      if(account.owner === ownerName) {
	        foundAccount = account;
	      }
	    }
	    return foundAccount;
	  },
	  filteredAccounts: function(type) {
	    if(!type) return this.accounts;
	    var filteredAccounts = [];
	    for (account of this.accounts) {
	      if(type === account.type)
	        filteredAccounts.push(account);
	    }
	    return filteredAccounts;
	  },
	  totalCash:function(type) {
	    var total = 0;
	    for (account of this.filteredAccounts(type)) {
	      total += account.amount;
	    }
	    return total;
	  },
	  accountAverage:function() {
	    return this.totalCash()/this.accounts.length;
	  },
	  payInterest: function(num) {
	    for (var account of this.accounts){
	      account.amount = (account.amount * num);
	    }
	  }
	};
	
	
	module.exports = Bank;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  { "owner": "jay",
	    "amount": 125.50,
	    "type": "personal"
	  },
	  { "owner": "val",
	    "amount": 55125.10,
	    "type": "personal"
	  },
	  { "owner": "marc",
	    "amount": 400.00,
	    "type": "personal"
	  },
	  { "owner": "keith",
	    "amount": 220.25,
	    "type": "business"
	  },
	  { "owner": "rick",
	    "amount": 1.00,
	    "type": "business"
	  },
	]


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Account = function(params) {
	  this.owner = params.owner;
	  this.amount = params.amount;
	  this.type = params.type;
	};
	
	module.exports = Account;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Bank = __webpack_require__(1);
	var Account = __webpack_require__(3);
	
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
	


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map