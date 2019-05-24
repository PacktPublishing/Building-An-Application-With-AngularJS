describe('testing the main controller', function(){
	beforeEach(function(){
		module('VocabularyTeacher');
	});

	var scope;

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		mainController = $controller('MainController', {
			$scope: scope
		});
	}));

	it('should define 3 foreign languages', function(){
		expect(scope.languages.length).toBe(3)
	});

	it('should have German as first language', function(){
		expect(scope.languages[0].name).toBe('German');
	});

	it('should give German the id equal to 1', function(){
		expect(scope.languages[0].id).toBe(1);
	});
});