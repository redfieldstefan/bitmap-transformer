'use strict';

var fs = require('fs');

var bitMapOne;


fs.readFile('./img/bitmap1.bmp', function (err, data) {

	if(err) {
		throw error
	} else {
		bitMapOne = data;
		console.log(Buffer.isBuffer(bitMapOne));
		console.log(bitMapOne);
	}

});







