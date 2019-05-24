var app = angular.module('VocabularyTeacher', []);

app.controller('MainController', function($scope){
	$scope.languages = [
		{id:1, name:'German'},
		{id:2, name:'French'},
		{id:3, name: 'Spanish'}
	];
})