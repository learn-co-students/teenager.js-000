'use strict';

var isTeenager = function(age){
  if (age > 19) {
    return false;
  } else if (age < 13) {
    return false;
  } else {
    return true;
  }
};