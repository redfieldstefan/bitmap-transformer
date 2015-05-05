'use strict';

var fs = require('fs');

module.exports = function send (destination, buffer) {
	fs.writeFile(destination, buffer, function(err) {
			if(err) {
				throw err;
			}
		});
};