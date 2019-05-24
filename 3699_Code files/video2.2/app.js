var app = angular.module('VocabularyTeacher', []);

app.controller('LearnController', function($scope){

	$scope.card = {
		source: 'man',
		target: 'hombre',
		language: 'spanish'
	}

});