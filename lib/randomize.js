'use strict';

module.exports = function randomize (array) {

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

//RANDOMIZE FUNCTION HIGHLY INSPIRED BY WORK WITH EMRE SURMELI
