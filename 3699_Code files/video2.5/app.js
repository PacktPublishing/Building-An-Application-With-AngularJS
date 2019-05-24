var app = angular.module('VocabularyTeacher', []);

app.controller('TranslateController', function($scope){
	$scope.cards = [];
	$scope.language = { id: 3, name: 'Spanish' };

	$scope.createCard = function(){
		var card = {
			source: $scope.sourceText,
			target: $scope.targetText,
			languageId: $scope.language.id
		};
		$scope.cards.push(card);
	};
})