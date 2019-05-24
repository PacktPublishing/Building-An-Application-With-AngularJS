var app = angular.module('VocabularyTeacher', []);

app.controller('Main', function($scope){
	$scope.source = 'Morning';
	$scope.target = 'Morgen';
});

app.directive('card', function(){
	return {
		restrict: 'AE',
		template: '<div class="card-border"> \
					<h2>{{target}}</h2> \
					<label>English: </label> \
					<span class="target">{{source}}</span> \
					</div>'
	};
});