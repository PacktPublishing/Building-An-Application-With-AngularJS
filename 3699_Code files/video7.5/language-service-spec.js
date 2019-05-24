describe('testing the language service', function(){
	describe('when loading all cards for a given language', function(){
		beforeEach(function(){
			module('VocabularyTeacher');
		});

		var service, httpBackend;

		beforeEach(inject(function($injector){
			service = $injector.get('LanguageService');
			httpBackend = $injector.get('$httpBackend');
		}));

		it('should return the expected number of cards', function(){
			httpBackend.when('GET', '/cards')
				.respond([
					{id:1, source:'one', target:'eins'},
					{id:1, source:'two', target:'zwei'}
				]);

			service.getCards().then(function(response){
				expect(response.data.lenght).toBe(2);
			})
		});
	})
});