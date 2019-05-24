var app = angular.module('VocabularyTeacher', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
	$scope.executeGet = function(){
		$http.get('/cards').then(function(response){
			$scope.cards = response.data;
		});
	};

	$scope.executePost = function(){
		var body = {
			language: 1,
			source: "woman",
			target: "mujer"
		};
		$http.post('/cards', body).then(function(response){
			alert('success');
		});
	};
}]);