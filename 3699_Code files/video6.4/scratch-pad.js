var canceller = $q.defer();
var config = { timeout: canceller.promise };
$http.get('/products/3', config);

$scope.cancel = function(){
	canceller.resolve("Operation cancelled by user");
}