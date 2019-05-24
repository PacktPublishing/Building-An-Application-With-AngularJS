var deferred = $q.defer();

deferred.resolve({language:1, source:"one", target:"uno"});

deferred.reject(new Error("A terrible error occurred."));
