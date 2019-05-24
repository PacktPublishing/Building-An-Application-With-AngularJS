var app = angular.module('app', []);

app.factory('foo', ['calculator', function(calculator){
	var startValue = calculator.mult(13, calculator.e);

	var obj = {
		startValue: startValue,
		bar: function(){/* ... */},
		baz: function(){/* ... */},
	};
	return obj;
}])

app.service('calculator', function(){
	// data
	this.pi = 3.14159;
	this.e = 2.71828;

	// behavior
	this.add = function(a, b) { return a+b; };
	this.mult = function(a, b) { return a*b; };
})

app.constant('version', '2.3.0');
app.config(function(version){
	// do something
})

app.value('title', 'Vocabulary teacher application');
app.value('released', new Date(2014, 12, 15));

app.value('comples', {
	name: 'Foo',
	age: 25,
	hireDate: new Date(2014,6,1),
	hobbies: ['jogging', 'hiking', 'cooking']
});

app.controller('MainController', 'title' ['$scope', function($scope, title){

}]);
