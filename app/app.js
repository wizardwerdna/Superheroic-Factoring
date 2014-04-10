'use strict';
angular.module('app', [])
.controller('AppVM', function(){
  this.factor = function(number){

    var factors = [];

    for(var candidate=2; candidate<=number; candidate++)
      for (; number % candidate === 0; number /= candidate)
        factors.push(candidate);
    return factors;

  };
});

