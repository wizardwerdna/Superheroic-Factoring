'use strict';
describe('AppVM', function(){
  var vm = {};

  beforeEach(buildVM);

  it('should not factor unity', function(){
    test(1, []);
  });

  it('should factor prime numbers', function(){
    test(2, [2]);
    test(3, [3]);
  });

  it('should factor composite powers of a prime', function(){
    test(4, [2,2]);
    test(6, [2, 3]);
    test(8, [2, 2,2]);
    test(9, [3,3]);
  });

  function buildVM(){
    module('app');
    inject(function($controller){
      vm = $controller('AppVM');
    });
  }

  function test(subject, expectedFactors){
    expect(vm.factor(subject)).toEqual(expectedFactors);
  }
});
