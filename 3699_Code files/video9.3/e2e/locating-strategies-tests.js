describe('using different location strategies', function(){
	it('should locate by id', function(){
		browser.get('http://localhost:3000/index.html');
		var ele = element(by.id('one'));
		expect(ele.getText()).toBe('locate me by id');
	});

	it('should locate by model', function(){
		var ele = element(by.model('name'));
		expect(ele.getAttribute('value')).toBe('John Doe');		
	});

	it('should locate by binding', function(){
		var ele = element(by.binding('name'));
		expect(ele.getText()).toBe('John Doe');
	});

	it('should locate multiple items by css', function(){
		var items = element.all(by.css('ul>li'));
		expect(items.count()).toBe(3);
	})
})