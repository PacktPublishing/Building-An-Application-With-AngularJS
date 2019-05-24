var app = angular.module('SampleApp', []);

app.controller('MyController', function($scope, $timeout, $http){
	// need $scope here...
	$scope.title='...';

	$http.get('/cards').then(function(){})
})