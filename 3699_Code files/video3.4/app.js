var app = angular.module("VocabularyTeacher", []);

// show "Yes" if true, "No" otherwise
app.filter("booleanFilter", function($scope){
	return function(input){
		return input ? "Yes" : "No";
	}
});