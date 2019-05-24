var app = angular.module('app', []);

app.directive('sampleDirective', function(){
	return{
		restrict: 'A',
		template: '<h2>Hello world</h2>'
	};
});


app.directive('cardDirective', function(){
	return{
		restrict: 'A',
		templateUrl: 'tpl/card.html'
	};
});