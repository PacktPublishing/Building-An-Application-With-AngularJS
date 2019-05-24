var finance = {
	getAccruedInterest: function(loanAmount, yearlyInterest, period){
		return loanAmount * (Math.pow(1+yearlyInterest, period) - 1);
	},

	getMonthlyPayment: function(loanAmount, yearlyInterest, period){
		var monthlyInterest = yearlyInterest / 12;
		var numberOfPeriods = period * 12;
		var a = (1-Math.pow(1+monthlyInterest, -numberOfPeriods)) / monthlyInterest;
		return loanAmount / a;
	}
};

angular.module('FinanceApp')
.factory('finance', function(){
	return finance;
})