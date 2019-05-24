var app = angular.module('VocabularyTeacher', ['ngRoute']);

app.controller('Main', ['$scope', function($scope){
	$scope.languages = [
		{ id: 1, name: 'German' },
		{ id: 2, name: 'French' },
		{ id: 3, name: 'Spanish' }
	];
}]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'home.html'
		})
		.when('/translate/:languageId', {
			templateUrl: 'translate.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);