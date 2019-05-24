var app = angular.module('SampleApp', []);

app.controller('MyController', ['$scope', function(myScope){
	myScope.title='Hello world';
}]);