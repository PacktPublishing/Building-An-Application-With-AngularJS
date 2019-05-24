describe('testing the sample directive', function(){
	beforeEach(module('app'));

	var compile, rootScope;

	beforeEach(inject(function($compile, $rootScope){
		compile = $compile;
		rootScope = $rootScope;
	}));

	it('adds "<h2>Hello world</h2>" to the element', function(){
		var element = compile('<div sample-directive></div>')(rootScope);
		rootScope.$digest();
		expect(element.html()).toBe('<h2>Hello world</h2>');
	});
});