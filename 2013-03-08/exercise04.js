/*
 * exercise04
 * write a function select(data, key, values) that given an array of objects data, a string key and an array of values values, returns the array of objects where the property key is equal to one of the values in values.
 */

function select(data, key, values) {
	
	var arrayObj = [];
	
	for ( obj in data) {
		for (objValues in values) {
		 if(data[obj][key]===values[objValues])
		 	arrayObj.push(data[obj]);		 
}}

return arrayObj;
}
