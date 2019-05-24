var app = angular.module('VocabularyTeacher', []);

app.controller('Main', function($scope){
	$scope.source = 'Morning';
	$scope.target = 'Morgen';
});

app.directive('card', function(){
	return {
		restrict: 'AE',
		templateUrl: 'card.html'
	};
});