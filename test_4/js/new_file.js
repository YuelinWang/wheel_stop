'use strict';
var arr = ['Apple','pear','orange'];
console.log(arr.findIndex(function(s){
	return s.toLowerCase() === s;
}));