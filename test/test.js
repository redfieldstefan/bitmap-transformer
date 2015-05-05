'use strict';

var expect = require('chai').expect;
var randomize = require('../lib/randomize');
var stringify = require('../lib/stringify');

describe('randomize.js', function() {

	var testArray = [1,2,3,4,5];
	var duplicateArray =  [1,2,3,4,5];
	var transformed = randomize(testArray);	

	it('Should take an array and shuffle it', function(){
		expect(transformed).to.not.eql(duplicateArray);
	});

});

describe('stringify.js', function() {

	var testArray = [[1],[2],[3],[4],[5]];
	var stringifiedArray = stringify.stringify(testArray);

	it('Should take an array and all of its indices and turn them into strings', function(){
		expect(typeof stringifiedArray).to.eql('string');
		expect(typeof stringifiedArray[3]).to.eql('string');
	});


});
