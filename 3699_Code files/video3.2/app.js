var app = angular.module('VocabularyTeacher', []);
app.controller('TranslationController', function($scope){
	$scope.cards = [
		{ id:1, source:'One', target:'Uno', languageId:1 },
		{ id:2, source:'Two', target:'Dos', languageId:1 },
		{ id:3, source:'Three', target:'Tres', languageId:1 },
		{ id:4, source:'Four', target:'Cuatro', languageId:1 },
	];
});