describe('testing the main controller', function(){
	beforeEach(function(){
		module("VocabularyTeacher");
	});

	beforeEach(inject(function($rootScope, $controller, CardService){
		// use CardService here
	}));

	beforeEach(inject(function($injector){
		var rootScope = $injector.get('$rootScope');
		var controller = $injector.get('$controller');

		scope = $rootScope.$new();
		mainController = controller('MainController', {
			$scope: scope
		})
	}));
});