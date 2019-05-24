var app = angular.module('QuestionnaireApp', []);
app.controller('QuestionnaireController', function($scope){
	$scope.questions = [
		{ number:"1", type: "number", question: "How many siblings do you have?" },
		{ number:"2", type: "date", question: "What's your date of birth?" },
		{ number:"3", type: "text", question: "Your country of origin" },
		{ number:"4", type: "singleOption", question: "What is your favorite hobby?",
			options: [
				{name: "Horse back riding"},
				{name: "Deep sea diving"},
				{name: "Hiking in the mountains"},
				{name: "Cooking"}
			]
		},
	];
});