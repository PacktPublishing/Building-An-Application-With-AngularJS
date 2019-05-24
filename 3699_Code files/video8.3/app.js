var app = angular.module('VocabularyTeacher', []);

app.controller('Main', function($scope){
	$scope.cards = [
		{id: 1, source: 'Morning', target: 'Morgen'},
		{id: 2, source: 'Noon', target: 'Mittag'},
		{id: 3, source: 'Evening', target: 'Abend'},
		{id: 4, source: 'Night', target: 'Nacht'},
	];

	$scope.removeCard = function(card){
		var index = $scope.cards.map(function(x){ return x.id; }).indexOf(card.id);
		$scope.cards.splice(index,1);
	};
});

app.directive('card', function(){
	return {
		restrict: 'A',
		templateUrl: 'card.html',
		scope: {
			card: '=data',
			remove: '&onRemove',
			language: '@language'
		}
	}
})