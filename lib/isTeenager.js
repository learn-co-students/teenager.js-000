'use strict';

var isTeenager = function(age){
  if (age < 13 || age > 19 || isNaN(Number(age)) ) {
    return false;
  }
  return true;
};