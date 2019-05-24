var app = angular.module('VocabularyTeacher', []);

app.service('LanguageService', ['$http', function($http){
	this.getCards = function(){
		return $http.get('/cards');
	}
}])