var app = angular.module('VocabularyTeacher', []);

app.controller('Main', function($scope){
	$scope.card1 = {source: 'Morning', target: 'Morgen' };
	$scope.card2 = {source: 'Evening', target: 'Abend' };
});

app.directive('card', function(){
	return {
		restrict: 'A',
		templateUrl: 'card.html',
		scope: {
			card: '=data'
		}
	}
})