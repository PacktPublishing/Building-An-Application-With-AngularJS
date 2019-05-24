var app = angular.module('app', []);
app.controller('Main', function($scope, $q){
	$scope.loadUser = function(){
		getUser()
			.then(loadStaff)
			.then(function(result){
				alert(JSON.stringify(result));
			})	
	};

	function getUser(){
		var deferred = $q.defer();
		setTimeout(function(){
			deferred.resolve({
				userId: 1,
				staffId: 13,
				userName: "jdoe"
			});
		},100);
		return deferred.promise;
	};

	function loadStaff(user){
		var deferred = $q.defer();
		setTimeout(function(){
			deferred.resolve({
				staffId: 13,
				firstName: "John",
				lastName: "Doe"
			});
		}, 200);
		return deferred.promise;
	};
});