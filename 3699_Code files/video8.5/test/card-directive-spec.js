describe('testing the card directive', function(){
	beforeEach(module('app'));

	beforeEach(module('tpl/card.html'));

	var elem, scope;

	beforeEach(inject(function($compile, $rootScope){
		scope = $rootScope;
		elem = angular.element('<div card-directive></div>');
		$compile(elem)(scope);
		scope.$digest();
	}));
 
	it('should add a heading', function(){
		var heading = elem.find('h2');
		expect(heading.text()).toBe('Card content');
	});

	it('should add the content text', function(){
		var content = elem.find('div > div');
		expect(content.text()).toBe('This is an external template');
	})
})