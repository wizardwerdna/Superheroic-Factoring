'use strict';
describe('Superheroic-Factoring', function(){
  describe('FEATURE: Print a list of prime factors of an input integer',
    function(){

    var page;
    beforeEach(buildPage);
      
    it('SCENARIO: should not factor unity', function(){
      page.find('.number').$type(1);
      expect(page.find('.factors').text()).toBe('[]');
    });

    it('SCENARIO: should factor 2', function(){
      page.find('.number').$type(2);
      expect(page.find('.factors').text()).toBe('[2]');
    });

    it('SCENARIO: should factor 135', function(){
      page.find('.number').$type(135);
      expect(page.find('.factors').text()).toBe('[3,3,3,5]');
    });

    function buildPage(){
    module('app', 'index.html');
    inject(function($compile, $rootScope, $templateCache){
      page = $compile(
        $templateCache.get('index.html')
      )($rootScope);
      $rootScope.$digest();
    });
  };
  });
});
