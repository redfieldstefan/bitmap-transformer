'use strict';

var fs = require('fs');
var randomize = require('./randomize');
var stringify = require('./stringify');
var send = require('./send');

module.exports = function transform(file) {

	fs.readFile(file, function (err, data) {
		if(err) {
			throw err;
		} 
		var buff;
		var palette = [];
		buff = data;
		var bitMap = {};
		bitMap.startAddress = buff.readUInt32LE(10);	
		bitMap.readColorPalate = (function () {
			var counter = 0;
			for (var i = 54; i < bitMap.startAddress ; i+=4) {
			  palette[counter] = [buff.readUInt8(i), buff.readUInt8(i+1), buff.readUInt8(i+2), 0];
			  counter ++;
			}
		})();
		
		randomize(palette);
		var string = stringify(palette);
		buff.write(string, 54, 254);
		send('./img/randomizedBmp.bmp', buff);
		
	});

};
