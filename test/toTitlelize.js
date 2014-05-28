/* jshint -W117 */
'use strict';

var should = require('should'),
    toTitlelize = require('../toTitlelize');

describe('#toTitlelize()', function() {
  it('should titlelize any string', function() {
    var string = 'My first string';
    var newString = toTitlelize(string);

    newString.should.equal('My First String');
  });

  it('should replace a char by space and titlelize string', function(done) {
    var string = 'My-first-string';
    var newString = toTitlelize(string, {
      replaceChar: '-'
    });

    newString.should.equal('My First String');
    done();
  });
});
