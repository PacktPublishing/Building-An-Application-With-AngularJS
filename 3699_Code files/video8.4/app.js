var app = angular.module('VocabularyTeacher', []);

app.directive('cardFrame', function(){
	return {
		restrict: 'A',
		templateUrl: 'card-frame.html',
		scope: {
			card: '=data',
			language: '=language'
		},
		transclude: true
	};
});

app.controller('Main', function($scope){
	$scope.languages = ['German', 'French', 'Spanish'];
	$scope.cards = [
		{ id:1, languageId: 1, source: 'Morning', target: 'Morgen'},
		{ id:2, languageId: 1, source: 'Noon', target: 'Mittag'},
		{ id:3, languageId: 1, source: 'Evening', target: 'Abend'},
		{ id:4, languageId: 1, source: 'Night', target: 'Nacht'},
	];

	$scope.getLanguage = function(languageId){
		return $scope.languages[languageId-1];
	}
})