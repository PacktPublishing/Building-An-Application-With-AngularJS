var app = angular.module("app");

app.provider("statistics", function(){
	var precision = 2;
	// service configuration API
	this.setPrecision = function(value){
		precision = value;
	};

	var sumFn = function(arr){
		return arr.reduce(function(pv, cv){ 
			return pv+cv;
		}, 0);
	};

	var service = {
		sum: function(items){
			if(items.length == 0) return 0;
			var value = sumFn(items);
			return value.toFixed(precision);
		},
		average: function(items){
			if(items.length == 0) return 0;
			var value = sumFn(items) / items.length;
			return value.toFixed(precision);
		}
	};

	this.$get = function(){
		return service;
	};
})
