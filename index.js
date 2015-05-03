'use strict';

var fs = require('fs');
var Converter = require('./converter');
var inherits = require('util').inherits;
var EventEmitter = require("events").EventEmitter;

var Step = function () {};
inherits(Step, EventEmitter);
var step = new Step();

fs.readFile('./img/bitmap1.bmp', function (err, data) {

	if(err) {
		throw err;
	} else {

		var bitMapBuff;
		var palette = [];
		bitMapBuff = data;
		var bitMap = {};

		bitMap.startAddress = bitMapBuff.readUInt32LE(10);	
		bitMap.readColorPalate = (function () {
			var counter = 0;
			for (var i = 54; i < bitMap.startAddress ; i+=4) {
			  palette[counter] = [bitMapBuff.readUInt8(i), bitMapBuff.readUInt8(i+1), bitMapBuff.readUInt8(i+2), 0];
			  counter ++;
			}
		})();

		var transform = function(array) {

			var m = array.length;
			var t;
			var i;

			while(m) {
				i = Math.floor(Math.random() * m--);
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}
			return array;
		};

		transform(palette);

		palette.forEach(function(arr) {
			arr = arr.toString();
		});

		var stringPalette = palette.toString();

		bitMapBuff.write(stringPalette, 54, 254);

		fs.writeFile('./img/randomizedBmp.bmp', bitMapBuff, function(err) {
			if(err) {
				throw err;
			}
		});
	}

});









// step.on('readDone', function(buff) {
// 	var buffConversion = new Convert();
// 	var buffConverted = buffConversion(buff);
// 	step.emit('objReady', buffConverted);
// });


// step.on('objReady', function(obj){
// 	//take obj and alter either its pallete or its pixels


// });







