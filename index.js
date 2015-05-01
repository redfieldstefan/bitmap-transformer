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
		throw error
	} else {
		var bitMapBuff;
		var pallete = [];
		bitMapBuff = data;
		
		var bitMap = {};
		bitMap.headerSize = bitMapBuff.readUInt32LE(2);
		bitMap.startAddress = bitMapBuff.readUInt32LE(10);
		bitMap.width = bitMapBuff.readUInt32LE(18);
		bitMap.height = bitMapBuff.readUInt32LE(22);
		bitMap.colorPlanes = bitMapBuff.readUInt16LE(26);
		bitMap.colorDepth =  bitMapBuff.readUInt16LE(28);
		bitMap.imageSize = bitMapBuff.readUInt32LE(34);
		bitMap.resH = bitMapBuff.readUInt32LE(38);
		bitMap.resV = bitMapBuff.readUInt32LE(42);
		bitMap.colorNum = bitMapBuff.readUInt32LE(46);
		bitMap.colorImpt = bitMapBuff.readUInt32LE(50);
		bitMap.colorPalate = bitMapBuff.readUInt32LE(54);
		
		bitMap.readColorPalate = function () {
			var counter = 0;
			for (var i = 54; i < bitMap.startAddress ; i+=4) {
			  pallete[counter] = {
			  	b: bitMapBuff.readUInt8(i),
			  	g: bitMapBuff.readUInt8(i+1),
			  	r: bitMapBuff.readUInt8(i+2),
			  	a: 0
			  }
			  counter ++;

			}
		}

		bitMap.readColorPalate();
		console.log(pallete);


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







