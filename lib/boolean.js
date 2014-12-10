'use strict';

var boolean = function (value) {
  if (!value) {
    return false;
  }

  if (typeof value === 'string') {
    return /^true|t|yes|y|1$/i.test(value);
  }

  return true;
};

module.exports = boolean;
