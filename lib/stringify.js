'use strict';

module.exports = function stringify(array) {
	
	array.forEach(function(el){
		el = el.toString();
	});

	return array.toString();
};

