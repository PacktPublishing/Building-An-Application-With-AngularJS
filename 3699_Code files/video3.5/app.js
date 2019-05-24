var app = angular.module("VocabularyTeacher", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "home.html"
		})	
		.when("/translate", {
			templateUrl: "translate.html"
		})
		.when("/learn", {
			templateUrl: "learn.html"
		})
		.otherwise({
			redirectTo: "/"
		});
});
