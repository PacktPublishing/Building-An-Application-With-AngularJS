var app = angular.module('LanguageTeacher', []);

app.service('LanguageService', ['$timeout', '$http', function($timeout, $http){
	this.languages = [
		{language:1, name: 'German'},
		{language:2, name: 'French'},
		{language:3, name: 'Spanish'},
	];

	this.cards = [
		{language: 1, source: 'one', target: 'eins'},
		{language: 2, source: 'one', target: 'un'},
		{language: 3, source: 'one', target: 'uno'},
		{language: 1, source: 'two', target: 'zwei'},
	];

	this.addCard = function(card){
		this.cards.push(card);
	};

	this.getCards = function(language){
		return _.filter(this.cards, function(card){
			return card.language == language;
		});
	};
}]);

app.controller('MainController', ['$scope' ,'LanguageService', function($scope, LanguageService){
	$scope.languages = LanguageService.languages;
	
	$scope.addCard = function(){
		LanguageService.addCard({
			language: $scope.language, 
			source: $scope.source, 
			target: $scope.target
		});
	};

	$scope.getCards = function(){
		$scope.filteredCards = LanguageService.getCards($scope.filterLanguage);
	}
}]);