var app = angular.module('SampleApp', []);

var injector = angular.injector(['SampleApp', 'ng']);

var scope = injector.get('$rootScope');

console.log(scope);