describe('simple end-to-end test', function(){
	beforeEach(function(){
		browser.get('http://localhost:3000/index.html');
	});

	it('should display 3 foreign languages', function(){
		var items = element.all(by.repeater('lang in languages'));
		expect(items.count()).toBe(3);
	});

	it('should navigate to translate page', function(){
		var link = element.all(by.binding("lang.name")).get(0);
		link.click();
		var title = element(by.css('h2'));
		expect(title.getText()).toBe('On translate page for selected foreign language...');
	});
});