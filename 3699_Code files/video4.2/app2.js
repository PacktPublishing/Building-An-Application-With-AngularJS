var app = angular.module('SampleApp', []);

var controller = function(myScope){
	myScope.title='Hello world';
};

controller['$inject'] = ['$scope'];

app.controller('MyController', controller);