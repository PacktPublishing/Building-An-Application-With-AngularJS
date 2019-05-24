var app = angular.module("FinanceApp", []);

app.controller("FatInvestmentController", ["$scope", function($scope){
	$scope.calcAccruedInterest = function(){
		var amount = $scope.loanAmount;
		var interest = $scope.interestInPercent / 100;
		var period = $scope.numberOfYears;

		$scope.accruedInterest = amount * (Math.pow(1+interest, period) - 1);
	};

	$scope.calcMonthlyPayment = function(){
		var monthlyInterest = $scope.interestInPercent / 100 / 12;
		var numberOfPeriods = $scope.numberOfYears * 12;
		var a = (1-Math.pow(1+monthlyInterest, -numberOfPeriods)) / monthlyInterest;
		$scope.monthlyPayment = $scope.loanAmount / a;
	};

	// much more complex code...!
}]);

app.controller("LeanInvestmentController", ["$scope", "finance", function($scope, finance){
	$scope.loanAmount = 300000;
	$scope.numberOfYears = 30;
	$scope.interestInPercent = 3.25;

	$scope.calcAccruedInterest = function(){
		$scope.accruedInterest =  finance.getAccruedInterest(
											$scope.loanAmount, 
										  	$scope.interestInPercent/100, 
										  	$scope.numberOfYears);
	};

	$scope.calcMonthlyPayment = function(){
		$scope.monthlyPayment =  finance.getMonthlyPayment(
											$scope.loanAmount, 
										 	$scope.interestInPercent/100, 
										 	$scope.numberOfYears);
	};
}]);
