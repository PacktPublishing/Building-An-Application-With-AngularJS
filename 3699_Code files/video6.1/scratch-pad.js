var promise = $http.get("/cards");

promise.then(function(result){
	// use cards...
}, function(result){
	// failure...
})