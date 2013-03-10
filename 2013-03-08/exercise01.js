/*
 * exercise01
 *
 *  exercise01a
 * write a function that pushes into an array the first n natural numbers
 * 
 * exercise01b
 * filter out odd number and return the even ones
 * 
 * exercise01c
 * double each even number obtained
 * 
 * exercise01d
 * return only numbers divisible by four
 *
 *  exercise01e
 * sum all the remaining numbers
 */

function exercise01(n) {
	
	var arrayN = [];
	
		for(var i=0;i<=n;i+=1){
			
			
			arrayN.push(i);
		}
	
	return arrayN.filter(function(item, index, array){return (item%2===0)})
					.map(function(item, index, array){return item*2;})
					.filter(function(item, index, array){return (item%4===0)})
					.reduce(function(a,b){return a+b});
}

