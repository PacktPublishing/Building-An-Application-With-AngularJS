describe("testing SomeController", function(){
	var controller, scope;

	beforeEach(inject(function($rootScope, $controller){
		module("SampleApp");
		scope = $rootScope.$new();
		function CreateController(){ 
			return controller("SomeController", {
				$scope: scope
			}) 
		};
	}));

	describe("when creating the controller", function(){
		beforeEach(function(){
			CreateController();
		});

		it("should set the title", function(){
			expect(scope.title).toBe("Hello World!");
		})
	});
})
