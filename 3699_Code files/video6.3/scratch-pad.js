promise.then(...)
	.then(...)
	.then(...);

var promise1 = $http.get('/cards');
var promise2 = $http.get('/scores');
var promise3 = $http.get('/users/' + userId);

$q.all([promise1, promise2, promise3])
	.then(function(result){
		//success
	}, function(result){
		// failure
	});