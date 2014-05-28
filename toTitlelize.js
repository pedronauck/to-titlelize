'use strict';

var isString = function(str) {
  var firstCondition = typeof str === 'string',
      secondCondition = str.constructor === String;

  return firstCondition || secondCondition;
},

replaceBySpace = function(str, character) {
  var regexp = new RegExp(character, 'g');
  return str.replace(regexp, ' ');
},

splitAndCapitalize = function(str, replaceChar) {
  var newString = '';
  str = replaceBySpace(str, replaceChar).split(' ');

  str.forEach(function(word) {
    newString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    newString += ' ';
  });

  return newString.trim();
},

toTitlelize = function(str, options) {
  options = options || {};
  var replaceChar = options.replaceChar || ' ';

  if (isString(str)) {
    return splitAndCapitalize(str, replaceChar);
  }
  else {
    throw new Error('This isn\'t a String');
  }
};

module.exports = toTitlelize;
