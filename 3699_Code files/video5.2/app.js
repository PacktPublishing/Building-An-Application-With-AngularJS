var app = angular.module('app', []);

app.controller('SimpleController', function($scope, counterService){
	$scope.counter = 1;
	$scope.service = counterService;

	$scope.increase = function(){
		$scope.counter++;
	}

	$scope.increaseService = function(){
		$scope.service.increase();
	}
});